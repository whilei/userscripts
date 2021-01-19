// ==UserScript==
// @name         Stack[Overflow|Exchange]: Remove Blurby Sidebar Widgets
// @namespace   https://github.com/whilei/userscripts
// @description Make GitHub relative time elements also show absolute values
// @icon        https://github.githubassets.com/pinned-octocat.svg
// @author      whilei
// @copyright   2021+, whilei (https://github.com/whilei)
// @license     CC-BY-NC-SA-4.0; https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @version     1.0
// @include     https://stackoverflow.com/*
// @include     https://*.stackexchange.com/*
// ==/UserScript==

(function() {
    'use strict';

    const hiddenEls = [
        [document.querySelector("#hot-network-questions")],
        [document.querySelector("#feed-link")],
        document.querySelectorAll(".s-sidebarwidget"),
    ];

    function hideSelectorOrNull(elements) {
        elements.forEach((el) => { el.style.display = "none"; });
    }

	function init() {
        for (var i = 0; i < hiddenEls.length; i++) { hideSelectorOrNull(hiddenEls[i]); }
	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);
})();
