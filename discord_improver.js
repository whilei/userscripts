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
    function improveMessageHandler(usernameEl) {
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

            // bool
            // If an '@' exists as the first character, remove it and match against the resulting username value.
            // This handles replied-messages, which append the '@', but normal messages don't (and are uneffected).
            var userMsgNeedsImprovement = needsImproving.indexOf(un.innerText.replace(/^@/, '')) >= 0;

            // Dedupe: One kitten, one time; since this can be called repeately (via setInterval)
            // Prepend an identifying class so it won't match the prefix-based selector for messageUsernames.
            // We do this for all messages so that we don't have to handle more than once.
            var cl = Array.from(un.classList);
            un.classList.remove(...cl);
            un.classList.add(userMsgNeedsImprovement ? "improver-improved" : "improver-ok");
            un.classList.add(...cl);

            // Found one.
            if (userMsgNeedsImprovement) improveMessageHandler(un);
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
