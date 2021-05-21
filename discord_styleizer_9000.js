// ==UserScript==
// @name        Discord Styleizer 9000
// @namespace   https://github.com/whilei/userscripts
// @description Improve messages from specific users.
// @icon
// @author      whilei
// @copyright   2021+, whilei (https://github.com/whilei)
// @license     CC-BY-NC-SA-4.0; https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @version     1.0
// @include     https://discord.com/*
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        if (head.getAttribute("tampered-discord-styler")) { return; }
        head.setAttribute("tampered-discord-styler", "yes");
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

	function init() {
        addGlobalStyle(`
        :root {
        --background-primary: #040a15 !important;
        --background-secondary: #040a15 !important;
        --background-tertiary: #000 !important;

        --text-normal: #9097ff !important; /* #6ebd58 green   #9097ff purple */
        --header-primary: rgb(150,50,150) !important; /* #91b4d9 light grayish blue   #ff0000*/
        --interactive-muted: #9097ff !important; /* does blockquotes */

        font-size: 82% !important;
        }
        body {
            /* border-top: 4px solid var(--text-normal); */
        }
        ::placeholder, body, button, input, select, textarea {
        font-family: mono !important;
        }
        a, button, div, input, label, select, span, strong, textarea  {

        }
        div {
        /* font-size: 82% !important; */
        }
        a, abbr, acronym, address, applet, big, blockquote, body, caption, cite, code, dd, del, dfn, div, dl, dt, em, fieldset, form, h1, h2, h3, h4, h5, h6, html, iframe, img, ins, kbd, label, legend, li, object, ol, p, pre, q, s, samp, small, span, strike, strong, table, tbody, td, tfoot, th, thead, tr, tt, ul, var {
        /* font-size: inherit !important; */ /* 82% !important; */
        }

        /* Important for double-digit (eg. 10:42 AM) chat message timestamps to not overflow to a line break. */
        h2 span {
        min-width: 50px;
        }

        /* This handles the sidebar menu item (channels, etc.) */
        a div {
        font-size: inherit !important;
        }
        code.inline {
        background-color: #1b273c !important;
        color: #ef7fff !important; /* 42b1d2 */
        }
        .hljs {
        background: #3a0c68 !important;
        color: #ef7fff !important;
        padding: 1.5em 2em !important;
        }

        `);
	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);
})();
