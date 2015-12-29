/**
 * This file is part of Adguard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * Adguard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Adguard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Adguard Browser Extension.  If not, see <http://www.gnu.org/licenses/>.
 */
var SimplePrefs = require('sdk/simple-prefs');
var Log = require('utils/log').Log;

/**
 * Local storage adapter
 */
var LS = exports.LS = {

	storage: SimplePrefs.prefs,

	getItem: function (key) {
		return LS.storage[key];
	},

	setItem: function (key, value) {
		try {
			LS.storage[key] = value;
		} catch (ex) {
			Log.error("Error save item cause: {0}", ex);
		}
	},

	removeItem: function (key) {
		delete LS.storage[key];
	},

	clean: function () {
		//TODO: delete prefs branch
	}
};