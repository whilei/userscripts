// ==UserScript==
// @name        Github Avatars Faded and Some random stuff
// @namespace   https://github.com/whilei/userscripts
// @description Makes avatars black and white. Less noise.
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
        if (head.getAttribute("tampered-avatarbw")) { return; }
        head.setAttribute("tampered-avatarbw", "yes");
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

	function init() {
        addGlobalStyle(`

.avatar-user {
    // filter: grayscale(100%);
    filter: opacity(50%);
}

.js-resolvable-timeline-thread-form {
    --color-construction-bg: var(--color-alert-warn-bg);
    background: linear-gradient(127deg, var(--color-bg-canvas) 25%, var(--color-construction-bg) 25%, var(--color-construction-bg) 50%, var(--color-bg-canvas) 50%, var(--color-bg-canvas) 75%, var(--color-construction-bg) 75%, var(--color-construction-bg) 100%);
    background-size: 25.04px 33.23px;
}

svg.octicon-mark-github > path {
  fill: dodgerblue; /* springgreen; // #f9826c */
}

:root {
    /* --color-header-bg: #6f228a !important; */
}
header.Header {
    padding: 8px !important;
    font-size: 12px !important;
    border-top: 2px solid dodgerblue !important;
    // background: rgb(36,0,22) !important;
    // background: linear-gradient(170deg, rgba(36,0,22,1) 0%, rgba(87,9,121,1) 38%, rgba(171,22,52,1) 100%) !important;
    background: var(--color-bg-canvas) !important;
}
.header-search {
    max-width: 50vw !important;
}

// linear-gradient(170deg, rgba(36,0,22,1) 0%, rgba(87,9,121,1) 38%, rgba(171,22,52,1) 100%) !important
// .header-search-wrapper { background: linear-gradient(138deg, rgba(0,150,74,1) 0%, rgba(38,103,159,1) 38%, rgba(163,5,159,1) 100%) !important; }
// .header-search-wrapper { background: linear-gradient(170deg, rgba(36,0,22,1) 0%, rgba(87,9,121,1) 38%, rgba(171,22,52,1) 100%) !important; }
// .header-search-input { background: inherit !important; }

.header-search-wrapper {
    border-radius: 0px !important;
    border: 1px solid var(--color-bg-info-inverse);
    border-top: 1px solid var(--color-bg-canvas) !important;
    border-right: 1px solid var(--color-bg-canvas) !important;
    border-left: 1px solid var(--color-bg-canvas) !important;
    background-color: var(--color-bg-canvas) !important;
}
input.header-search-input {
    color: var(--color-text-secondary) !important;
}
input.header-search-input::placeholder {
    color: var(--color-text-link) !important;
}

.header-search-wrapper.focus {
    // background: springgreen !important;
}

a.Header-link[href$='/marketplace'] {
    color: #152f48 !important;
}

 a.Header-link[href$='/explore'] {
    color: #152f48 !important;
}

a.Header-link[href$='/pulls'] {
    color: dodgerblue !important;
}

 a.Header-link[href$='/issues'] {
    color: dodgerblue !important;
}

a.Header-link {
    color: dodgerblue !important;
}
summary.Header-link path {
    fill: dodgerblue !important;
}
summary.Header-link span.dropdown-caret {
    color: dodgerblue !important;
}

.notification-indicator .mail-status {
    background-image: linear-gradient(#5174fb,#7b0aa4) !important;
    border: 3px solid #f9826c !important; // #36d08f !important;
    top: 24px; left: -2px; width: 22px; height: 6px;

    border-top-left-radius: 50% !important;
    border-top-right-radius: 50% !important;
    border-bottom-left-radius: 0% !important;
    border-bottom-right-radius: 0% !important;
}

// #46ea8e
.UnderlineNav-item.selected, .UnderlineNav-item[aria-current]:not([aria-current="false"]) {
    // border-bottom-color: #46ea8e !important;
}

textarea#new_comment_field {
height: 640px !important;
max-height: 640px !important;
}

`);
/*         var hover = new MouseEvent('mouseover', {
            // 'view': window,
            'bubbles': true,
            // 'cancelable': true
        });
        var unhover = new MouseEvent('mouseout', {
            'bubbles': true,
        });

        Array.prototype.filter.call(document.querySelectorAll("a.issue-link.js-issue-link"), function (link) {
			return true;
		}).forEach(function (link) {
            //link.style.border = "2px solid pink";
            var data_url = link.getAttribute("data-url").split("/");
            var issue_number = data_url[data_url.length -1];
            link.dispatchEvent(hover);
            //setTimeout(function() {
                // var pop = Array.prototype.find.call(document.querySelectorAll(".Popover-message"), function(el) { el.getAttribute("baseURI").indexOf(""+issue_number) > 0; });
                //var pop = document.querySelectorAll(".Popover-message").find(function(el) { el.baseURI.indexOf(""+issue_number) > 0; });
                var pop = document.querySelector(".Popover-message");
                var text = pop.innerText;
                var title = text.split("\n")[1];
                link.innerText = title + link.innerText;
                console.log("Found popover", pop);
                link.dispatchEvent(unhover);
            //}, 300);
        }); */
	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);
})();