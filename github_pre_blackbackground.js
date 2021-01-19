// ==UserScript==
// @name        Github Pre Hacker
// @namespace   https://github.com/whilei/dne
// @description Nake un-syntaxed-declared code blocks look like real hacker stuff.
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
        Array.prototype.filter.call(document.querySelectorAll("pre"), function (el) {
            return !el.parentElement.classList.contains("highlight");
		}).forEach(function (el) {
            el.style.backgroundColor = "black";
            el.style.color = "white";
        });
	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);
})();