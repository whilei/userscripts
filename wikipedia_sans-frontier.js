// ==UserScript==
// @name        Wikipedia Sans Frontier
// @namespace   https://github.com/whilei/userscripts
// @description Improve messages from specific users.
// @icon
// @author      whilei
// @copyright   2021+, whilei (https://github.com/whilei)
// @license     CC-BY-NC-SA-4.0; https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @version     1.0
// @include     https://*wikipedia.org/wiki/*
// ==/UserScript==

// Where el is the DOM element you'd like to test for visibility
function isHidden(el) {
    return (el.offsetParent === null)
}
        function tocHideOrShow() {
            // console.log("hideshow");
            if (document.body.clientWidth > 1700 && isHidden(document.getElementById("toc").getElementsByTagName("ul")[0])) {
                // var toctoggler = document.getElementById("toctogglecheckbox");
                // if (toctoggler) toctoggler.click();
                console.log("should show");
                document.getElementById("toc").getElementsByTagName("ul")[0].display = "block";
            } else if (document.body.clientWidth <= 1700 && !isHidden(document.getElementById("toc").getElementsByTagName("ul")[0])) {
                // if (toctoggler) toctoggler.click();
                console.log("should hide");
                document.getElementById("toc").getElementsByTagName("ul")[0].display = "none";
            }
        }

(function() {
    'use strict';

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        if (head.getAttribute("tampered-wiki-styler")) { return; }
        head.setAttribute("tampered-wiki-styler", "yes");
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

	function init() {
        addGlobalStyle(`
        :root {
        }
        * {
            border: none !important;
        }
        body, #mw-page-base {
            background-color: var(--body-bg) !important;
            background-image: none !important;
        }
        #mw-head {
            display: none !important;
        }
        #mw-panel {
                /* position: relative !important; */
                display: none !important;
        }
        #mw-panel:hover {display: block !important;}
        #toc, .toclimit-3 {
                position: fixed;
                top: 0em;
                left: 0em;
                background: #fff !important;
                width: 10em;
                z-index: 1000;
                font-size: calc(1em * 0.875) !important;
                /* border-left: 2px solid black !important; */
                /* border-right: 2px solid #b2b2b2 !important; */
                /* border-bottom: 2px solid #b2b2b2 !important; */

-webkit-box-shadow: 1px 7px 12px -8px rgba(0,0,0,0.52);
-moz-box-shadow: 1px 7px 12px -8px rgba(0,0,0,0.52);
box-shadow: 1px 7px 12px -8px rgba(0,0,0,0.52);
border-bottom-right-radius: 1em;

                /* padding-right: 2em !important; */
                line-height: 1.3em;
        }
        #toc ul {
        max-height: 90vh;
overflow-y: auto;
overflow-x: hidden;
margin-right: 1.5em;
}
        .mw-body {
            max-width: 1200px !important;

        }
        .infobox {
            background-color: #ffffff !important;
            margin-left: 3em !important;
        }
        .thumbinner {
            background-color: #ffffff !important;
        }
        @media screen and (max-width: 1500px) {
    #toc ul {
        display: none;
    }

}
        @media screen and (min-width: 1500px) {
    #toc ul {
        display: block;
    }
}

        @media screen and (max-width: 1730px) {
            .mw-body {
            margin-right: none !important;
            margin-left: auto !important;
        }
}
        @media screen and (min-width: 1730px) {
            .mw-body {

            margin-right: auto !important;
            margin-left: auto !important;
        }
}

        `);
        var toc = document.getElementById("toc");
        if (toc) {
            /* #mw-content-text */
            document.getElementsByTagName("body")[0].prepend(toc);
            // document.getElementById("content").prepend(toc);
        }

//         setTimeout(function() {
//             if (document.body.clientWidth > 1700) return;

//             var toctoggler = document.getElementById("toctogglecheckbox");
//             var toc = document.getElementById("toc");
//             if (toctoggler && toc) {
//                 var list = toc.getElementsByTagName("ul")[0];
//                 if (list) {
//                     if (!isHidden(list)) {
//                         toctoggler.click();
//                     }
//                 }
//             }
//         }, 500);
	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);
//     window.onresize = tocHideOrShow;
})();
