// ==UserScript==
// @name        Github Commits Days Offsets
// @namespace   https://github.com/whilei/userscripts
// @description Adds XY days later clause to commit history view.
// @icon        https://github.githubassets.com/pinned-octocat.svg
// @author      whilei
// @copyright   2021+, whilei (https://github.com/whilei)
// @license     CC-BY-NC-SA-4.0; https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @version     1.0
// @include     https://github.com/*/*/commits/*
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

    const selTimelineItem = ".TimelineItem"; // -Body
    const selTimelineItemBodyItemCommit = ".TimelineItem-Body > ol > li";
    // relative-time[datetime]

    const selTimelineRef = ".TimelineItem > h2";

    function getEntryDatetime(el) {
        const sel = el.querySelector("relative-time");
        if (!sel) {
            return new Date();
        }
        const d = sel.getAttribute("datetime");
        return new Date(d);
    }

	function init() {
        // addGlobalStyle(`
// `);

        var entries = document.querySelectorAll(selTimelineItem)

        for (var i = 0; i < entries.length - 1; i++) {
            var entry = entries[i];
            var next = entries[i+1];

            var delta = (getEntryDatetime(entry).getTime() / 1000) - (getEntryDatetime(next).getTime() / 1000);
            delta = Math.round(delta / (24*60*60));
            var dateref = entry.querySelector("h2");
            dateref
                ? dateref.innerHTML = dateref.innerHTML + ` (${delta} days later)`
                : null;
        }

	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);
})();

/*
<svg width="828" height="128" class="js-calendar-graph-svg">
  <g transform="translate(10, 20)" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:1858594,&quot;target&quot;:&quot;CONTRIBUTION_CALENDAR_SQUARE&quot;,&quot;user_id&quot;:45600330,&quot;originating_url&quot;:&quot;https://github.com/iquidus&quot;}}" data-hydro-click-hmac="f9735d662a5c11670007db256b9d054e782eee2b8308b4f5d046bbf882a94e21">
      <g transform="translate(0, 0)">
          <rect class="day" width="11" height="11" x="16" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-19"></rect>
          <rect class="day" width="11" height="11" x="16" y="15" fill="var(--color-calendar-graph-day-L2-bg)" data-count="7" data-date="2020-01-20"></rect>
          <rect class="day" width="11" height="11" x="16" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2020-01-21"></rect>
          <rect class="day" width="11" height="11" x="16" y="45" fill="var(--color-calendar-graph-day-L2-bg)" data-count="5" data-date="2020-01-22"></rect>
          <rect class="day" width="11" height="11" x="16" y="60" fill="var(--color-calendar-graph-day-L1-bg)" data-count="2" data-date="2020-01-23"></rect>
          <rect class="day" width="11" height="11" x="16" y="75" fill="var(--color-calendar-graph-day-L2-bg)" data-count="5" data-date="2020-01-24"></rect>
          <rect class="day" width="11" height="11" x="16" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-01-25"></rect>
      </g>

      <g transform="translate(32, 0)">
          <rect class="day" width="11" height="11" x="14" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-02"></rect>
          <rect class="day" width="11" height="11" x="14" y="15" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-03"></rect>
          <rect class="day" width="11" height="11" x="14" y="30" fill="var(--color-calendar-graph-day-L1-bg)" data-count="3" data-date="2020-02-04"></rect>
          <rect class="day" width="11" height="11" x="14" y="45" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-05"></rect>
          <rect class="day" width="11" height="11" x="14" y="60" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-06"></rect>
          <rect class="day" width="11" height="11" x="14" y="75" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-07"></rect>
          <rect class="day" width="11" height="11" x="14" y="90" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2020-02-08"></rect>
      </g>
      */