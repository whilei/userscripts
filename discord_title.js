// ==UserScript==
// @name        Discord Title
// @namespace   https://github.com/whilei/userscripts
// @description Makes discord chats always have Discord in the page title. Easier for rofi switching.
// @icon
// @author      whilei
// @copyright   2021+, whilei (https://github.com/whilei)
// @license     CC-BY-NC-SA-4.0; https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @version     1.0
// @include     https://discord.com/channels/*
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
        if (css === "") return;
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        if (head.getAttribute("tampered-titled")) { return; }
        head.setAttribute("tampered-titled", "yes");
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    function removeNotice() {
        var notice = document.querySelector("div[class^='channelNotice-']");
        if (notice) { notice.style.display = "none"; }

        var store = document.querySelector("a[href='/store']");
        if (store) store.style.display = "none";
    }

    function fixTitle() {
        var head, title;

        head = document.getElementsByTagName('head')[0];
        if (!head) return;

        title = head.querySelector("title");
        if (!title) return;

        const ind = title.innerHTML.indexOf("Discord -");
        if (ind < 0 || ind > 0) {
            title.innerHTML = "Discord - " + title.innerHTML;
            title.setAttribute("readonly", "readonly");
        }
    }

    function niceness() {
        fixTitle();
        removeNotice();
    }
	function init() {
        addGlobalStyle(".hljs { background: white !important; }");
        setInterval(niceness, 1000);
	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);
})();
