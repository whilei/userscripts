// ==UserScript==
// @name        Discord Improver
// @namespace   https://github.com/whilei/userscripts
// @description Improve messages from specific users.
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

    // Users with room for improvement.
    var needsImproving = ["meowsbits"];

    // This help us randomize our kittens.
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    // Accepts an attachment element, eg. a picture.
    function improveAttachment(attach) {
        attach.innerHTML = `<img src="https://placekitten.com/${getRandomInt(200,400)}/${getRandomInt(200,400)}" />`; // `🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈 🖼️ 🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈`;
    }

    // Accepts either reply or standard message.
    function improveMsg(contents) {
        var msg = contents.querySelector('div[class*=" messageContent-"]');

        // So. Much. Positivity.
        if (msg) msg.innerHTML = "👍 🙌 🥰 ✌️"; // 🐱🦄

        // Even more positivity, if possible.
        var attach = contents.querySelector('div[class^="messageAttachment-"]');
        if (attach) improveAttachment(attach);
    }

    // Why destroy when you can create?
    function improveMessage(usernameEl) {
        // Normal messages.
        var contents = usernameEl.closest('div[class^="contents-"]');
        if (contents) {
            improveMsg(contents);
        }

        // Message with attachments.
        var msg = usernameEl.closest('div[class^="message-"]');
        if (msg) {
            var attach = msg.querySelector('div[class^="messageAttachment-"]');
            if (attach) {
                improveAttachment(attach);
            }
        }

        // Are we in a reply?
        var reply = usernameEl.closest('div[class^="repliedMessage-"]');
        if (reply) {
            improveMsg(reply);
        }
    }

    function improve() {
        var messageUsernames = document.querySelectorAll('span[class^="username-"]');
        // console.log("Parsing all message usernames", "length", messageUsernames.length);
        for (var i = 0; i < messageUsernames.length; i++) {
            var un = messageUsernames[i];

            // If an '@' exists as the first character, remove it and match against the resulting username value.
            // This handles replied-messages, which append the '@', but normal messages don't (and are uneffected).
            if (needsImproving.indexOf(un.innerText.replace(/^@/, '')) >= 0) {
                // Found one.
                // console.log("Found a user to help", un);

                // Dedupe: One kitten at a time, since this can be called repeately (via setInterval).
                if (un.classList.contains("already-improved")) continue;
                un.classList.add("already-improved");

                improveMessage(un);
            }
        }
    }

	function init() {
        improve();
        setInterval(improve, 3000);
	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);
})();
