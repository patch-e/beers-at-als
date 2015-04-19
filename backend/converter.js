/*
converter.js
Module that provides functions to conversion tweaks to beers that better match the Untappd search database

Copyright (c) 2015

Patrick Crager

*/

module.exports = {

	handle: function(beer) {
		beer.brewery = beer.brewery.
			// only consider the string to the left of a forward slash,
			// common with collab beers that untappd doesn't really support
			replace(/(\/).+$/g, '').
			// additional brewery fixes on a case-by-case basis
			replace('OSKARBLUES', 'OSKAR BLUES').
			replace('THE RAVEN', 'BALTIMORE-WASHINGTON BEER WORKS');

		beer.name = beer.name.
			// remove any bracketed special text in the name, [NITRO], [FIRKIN], [SOUR] etc.
			replace(/ *\[[^)]*\] */g, '').
			// remove special hyphen'd text sometimes added to the end as a special notice, ex. BEERNAME -LAST KEG!!
			replace(/ (-).+$/g, '').
			// additional name fixes on a case-by-case basis
			replace('2013', '').
			replace('2014', '').
			replace('2015', '').
			replace('2016', '').
			replace('8OZ', '').
			replace('SUNSHINE-WITH', 'SUNSHINE - WITH').
			replace('BROWN(TOASTED', 'BROWN (TOASTED');
	}

};
