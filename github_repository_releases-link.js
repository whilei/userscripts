// ==UserScript==
// @name        Github Repository Menu: Releases Link
// @namespace   https://github.com/whilei/userscripts
// @description Make pull request list items include branch names
// @icon        https://github.githubassets.com/pinned-octocat.svg
// @author      whilei
// @copyright   2021+, whilei (https://github.com/whilei)
// @license     CC-BY-NC-SA-4.0; https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @version     1.0
// @include     https://github.com/*/*
// ==/UserScript==

(function() {
    'use strict';

	function init() {
        Array.prototype.filter.call(document.querySelectorAll("ul.pagehead-actions"), function (nav) {
            return !nav.classList.contains("tampered-release-button");

		}).forEach(function (nav) {
            nav.classList.add("tampered-release-button");

            var releasesLink = document.createElement("a");
            const pathS = location.pathname.split("/");
            const targetURI = window.location.protocol + "//" + window.location.host + "/" + pathS[1] + "/" + pathS[2] + "/releases";

            releasesLink.setAttribute("href", targetURI);
            releasesLink.innerHTML = " 📦 Releases";
            releasesLink.classList.add("btn", "btn-sm", "d-none","d-md-block");

            var releasesLi = document.createElement("li");
            nav.appendChild(releasesLi);
            releasesLi.appendChild(releasesLink);
		});
	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);

})();