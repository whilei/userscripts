// ==UserScript==
// @name         Github Pull Request 'Approved' in Green
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
        if (head.getAttribute("tampered-approved")) { return; }
        head.setAttribute("tampered-approved", "yes");
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

	function init() {
        addGlobalStyle(".tampered-approved { color: var(--color-alert-success-text) !important; }");

        Array.prototype.filter.call(document.querySelectorAll("[aria-label$='review approval']"), function (el) {
            return !el.classList.contains("tampered-approved");
		}).forEach(function (el) {
            el.classList.add("tampered-approved");
        });
	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);
})();