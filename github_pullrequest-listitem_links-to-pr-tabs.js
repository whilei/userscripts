// ==UserScript==
// @name        Github Pull Request List Item: Links to PR Details (Files Changed, Commits)
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

        Array.prototype.filter.call(document.querySelectorAll("a[id^='issue_']"), function (treeA) {
            const isPull = treeA.getAttribute("href").indexOf("/pull/") >= 0;
            const alreadyTampered = treeA.parentElement.querySelector(".opened-by") && treeA.parentElement.querySelector(".opened-by").querySelector(".tamper-filechange-span") !== null;
			return isPull && !alreadyTampered;

		}).forEach(function (treeA) {
            var openLine = treeA.parentElement.querySelector(".opened-by");

            var diffLink = document.createElement("a");
            diffLink.setAttribute("href", treeA.getAttribute("href") + "/files");
            diffLink.classList.add("tamper-filechange-link", "muted-link");
            diffLink.innerHTML = "files changed ±";
            diffLink.setAttribute("style", "padding: 0.2em 0.3em;");

            var commitsLink = document.createElement("a");
            commitsLink.setAttribute("href", treeA.getAttribute("href") + "/commits");
            commitsLink.classList.add("tamper-filechange-link", "muted-link");
            commitsLink.innerHTML = "commits";
            commitsLink.setAttribute("style", "padding: 0.2em 0.3em;");

            var fancySentence = document.createElement("span");
            fancySentence.setAttribute("class", "tamper-filechange-span");
            fancySentence.innerHTML = " with these";

            openLine.appendChild(fancySentence);
            openLine.appendChild(commitsLink);
            openLine.innerHTML += "and";
            openLine.appendChild(diffLink);
		});
	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);
    document.addEventListener('locationchange', init);

})();