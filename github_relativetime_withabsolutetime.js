// ==UserScript==
// @name        Github: Relative Time w/ Absolute Time
// @namespace   https://github.com/whilei/dne
// @description Make GitHub relative time elements also show absolute values
// @icon        https://github.githubassets.com/pinned-octocat.svg
// @author      whilei
// @copyright   2021+, whilei (https://github.com/whilei)
// @license     CC-BY-NC-SA-4.0; https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @version     1.0
// @include     https://github.com/*
// ==/UserScript==

(function() {
    'use strict';

	function init() {

        Array.prototype.filter.call(document.querySelectorAll("relative-time"), function (el) {
            return !el.classList.contains("tampered-datetime");

		}).forEach(function (el) {
            el.classList.add("tampered-datetime");

            // const dt = el.getAttribute("datetime");
            const tit = el.getAttribute("title");

            var absTimeEl = document.createElement("span");

            absTimeEl.innerHTML = " (" + tit + ")";
            el.parentNode.insertBefore(absTimeEl, el.nextSibling);
		});
	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);
    document.addEventListener('locationchange', init);

})();
