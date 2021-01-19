// ==UserScript==
// @name        Github NoPro
// @namespace   https://github.com/whilei/userscripts
// @description Remove ProTips and noob hints from all Github pages.
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
        Array.prototype.filter.call(document.querySelectorAll(".protip"), function (el) {
			return true;
		}).forEach(function (el) {
            el.style.hidden = true;
            el.style.display = "none";
        });
        var noobGuide = document.querySelector(`[href="https://docs.github.com/categories/setting-up-and-managing-your-github-profile"]`);
        noobGuide ? noobGuide.parentElement.style.display = "none" : null;
	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);
})();