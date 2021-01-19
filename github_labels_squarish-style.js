// ==UserScript==
// @name        Github Labels: Style Transparent-Squareish
// @namespace   https://github.com/whilei/userscripts
// @description Make pull request list items include branch names
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
        Array.prototype.filter.call(document.querySelectorAll("a.IssueLabel"), function (label) {
			return true;
		}).forEach(function (label) {
            label.style.border = "none";
            label.style.borderRadius = "0.3em";
            label.style.paddingTop = "0.15em";
            label.style.marginBottom = "0.3em";
            //label.style.background = "none";
        });
	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);
})();