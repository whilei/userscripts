// ==UserScript==
// @name        Github Timeline Comment Box Shadower
// @namespace   https://github.com/whilei/userscripts
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

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        if (head.getAttribute("tampered-boxshadow")) { return; }
        head.setAttribute("tampered-boxshadow", "yes");
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

	function init() {
        addGlobalStyle(".timeline-comment { box-shadow: 2px 4px 5px 0px rgb(0, 0, 0); }");
	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);
})();