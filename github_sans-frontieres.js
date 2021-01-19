// ==UserScript==
// @name        Github Sans Frontieres
// @namespace   https://github.com/whilei/userscripts
// @description Imagine a Github without borders... a place unconstrained by arbitrary fences and pixelated delineations.
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
        if (head.getAttribute("tampered-github-sans-frontieres")) { return; }
        head.setAttribute("tampered-github-sans-frontieres", "yes");
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

	function init() {
        /*
        Unchanged on purpose:

        --color-border-danger:  rgba(0,0,0,0) !important;
        - anything with hover, maybe
        */
        addGlobalStyle(`
:root {
  --color-border-primary: rgba(0,0,0,0) !important;
  --color-border-secondary: rgba(0,0,0,0) !important;
  --color-border-tertiary: rgba(0,0,0,0) !important;
  --color-border-overlay:  rgba(0,0,0,0) !important;
  --color-border-inverse:  rgba(0,0,0,0) !important;
  --color-border-info:  rgba(0,0,0,0) !important;
  --color-box-header-blue-border: rgba(0,0,0,0) !important;
  --color-box-border-info: rgba(0,0,0,0) !important;
  --color-input-border: rgba(0,0,0,0) !important;

  --color-btn-border: rgba(0,0,0,0) !important;
  --color-btn-hover-border: rgba(0,0,0,0) !important;
  --color-btn-focus-border: rgba(0,0,0,0) !important;
  --color-btn-primary-border: rgba(0,0,0,0) !important;
  --color-btn-primary-hover-border: rgba(0,0,0,0) !important;
  --color-btn-primary-disabled-border: rgba(0,0,0,0) !important;
  --color-btn-primary-focus-border: rgba(0,0,0,0) !important;
  --color-btn-outline-hover-border: rgba(0,0,0,0) !important;

  --color-markdown-table-border: rgba(0,0,0,0) !important;
  --color-current-user-tip-border: rgba(0,0,0,0) !important;
  --color-current-user-tip-bg: rgba(0,0,0,0) !important;
  --color-pr-state-open-border: rgba(0,0,0,0) !important;
  --color-pr-state-draft-border: rgba(0,0,0,0) !important;
  --color-verified-badge-border: rgba(0,0,0,0) !important;
  --color-merge-box-warning-box-border: rgba(0,0,0,0) !important;
  --color-merge-box-neutral-icon-border: rgba(0,0,0,0) !important;
  --color-border-success:  rgba(0,0,0,0) !important;
  --color-alert-info-border:  rgba(0,0,0,0) !important;
  border-color: rgba(0,0,0,0) !important;
  border-bottom-color: rgba(0,0,0,0) !important;
}
`);
	}

	// Page load.
	init();

	// On pjax.
	document.addEventListener('pjax:end', init);
})();

/*
  --color-border-primary: rgba(0,0,0,0) !important;
  --color-border-secondary: rgba(0,0,0,0) !important;
  --color-border-tertiary: rgba(0,0,0,0) !important;
  --color-border-overlay:  rgba(0,0,0,0) !important;
  --color-border-inverse:  rgba(0,0,0,0) !important;
  --color-border-info:  rgba(0,0,0,0) !important;
  --color-box-header-blue-border: rgba(0,0,0,0) !important;
  --color-box-border-info: rgba(0,0,0,0) !important;
  --color-input-border: rgba(0,0,0,0) !important;

  --color-btn-border: rgba(0,0,0,0) !important;
  --color-btn-hover-border: rgba(0,0,0,0) !important;
  --color-btn-focus-border: rgba(0,0,0,0) !important;
  --color-btn-primary-border: rgba(0,0,0,0) !important;
  --color-btn-primary-hover-border: rgba(0,0,0,0) !important;
  --color-btn-primary-disabled-border: rgba(0,0,0,0) !important;
  --color-btn-primary-focus-border: rgba(0,0,0,0) !important;
  --color-btn-outline-hover-border: rgba(0,0,0,0) !important;

  --color-markdown-table-border: rgba(0,0,0,0) !important;
  --color-current-user-tip-border: rgba(0,0,0,0) !important;
  --color-current-user-tip-bg: rgba(0,0,0,0) !important;
  --color-pr-state-open-border: rgba(0,0,0,0) !important;
  --color-pr-state-draft-border: rgba(0,0,0,0) !important;
  --color-verified-badge-border: rgba(0,0,0,0) !important;
  --color-merge-box-warning-box-border: rgba(0,0,0,0) !important;
  --color-merge-box-neutral-icon-border: rgba(0,0,0,0) !important;
  --color-border-success:  rgba(0,0,0,0) !important;
  --color-alert-info-border:  rgba(0,0,0,0) !important;
  border-color: rgba(0,0,0,0) !important;
  border-bottom-color: rgba(0,0,0,0) !important;
*/

/*
> cat github-styles.css | grep border | while read -r line; do echo "$(echo "${line}" | cut -d':' -f1)"': rgba(0,0,0,0) !important;'; done

--color-border-primary: rgba(0,0,0,0) !important;
--color-border-secondary: rgba(0,0,0,0) !important;
--color-border-tertiary: rgba(0,0,0,0) !important;
--color-border-overlay: rgba(0,0,0,0) !important;
--color-border-inverse: rgba(0,0,0,0) !important;
--color-border-info: rgba(0,0,0,0) !important;
--color-box-header-blue-border: rgba(0,0,0,0) !important;
--color-box-border-info: rgba(0,0,0,0) !important;
--color-input-border: rgba(0,0,0,0) !important;
--color-btn-border: rgba(0,0,0,0) !important;
--color-btn-hover-border: rgba(0,0,0,0) !important;
--color-btn-focus-border: rgba(0,0,0,0) !important;
--color-btn-primary-border: rgba(0,0,0,0) !important;
--color-btn-primary-hover-border: rgba(0,0,0,0) !important;
--color-btn-primary-disabled-border: rgba(0,0,0,0) !important;
--color-btn-primary-focus-border: rgba(0,0,0,0) !important;
--color-btn-outline-hover-border: rgba(0,0,0,0) !important;
--color-markdown-table-border: rgba(0,0,0,0) !important;
--color-current-user-tip-border: rgba(0,0,0,0) !important;
--color-pr-state-open-border: rgba(0,0,0,0) !important;
--color-pr-state-draft-border: rgba(0,0,0,0) !important;
--color-verified-badge-border: rgba(0,0,0,0) !important;
--color-merge-box-warning-box-border: rgba(0,0,0,0) !important;
--color-merge-box-neutral-icon-border: rgba(0,0,0,0) !important;
--color-border-success: rgba(0,0,0,0) !important;
--color-alert-info-border: rgba(0,0,0,0) !important;
--color-profile-color-modes-toggle-track-border: rgba(0,0,0,0) !important;
--color-profile-color-modes-toggle-track-border: rgba(0,0,0,0) !important;
--color-promo-color-modes-toggle-track-border: rgba(0,0,0,0) !important;
--color-promo-color-modes-toggle-track-border: rgba(0,0,0,0) !important;
--color-current-user-tip-border: rgba(0,0,0,0) !important;
--color-current-user-tip-border: rgba(0,0,0,0) !important;
--color-discussions-answer-border: rgba(0,0,0,0) !important;
--color-discussions-answer-border: rgba(0,0,0,0) !important;
--color-workflow-card-connector-inactive-bg: rgba(0,0,0,0) !important;
--color-workflow-card-connector-inactive-bg: rgba(0,0,0,0) !important;
--color-workflow-card-connector-inactive: rgba(0,0,0,0) !important;
--color-workflow-card-connector-inactive: rgba(0,0,0,0) !important;
--color-border-primary: rgba(0,0,0,0) !important;
--color-border-secondary: rgba(0,0,0,0) !important;
--color-border-tertiary: rgba(0,0,0,0) !important;
--color-border-overlay: rgba(0,0,0,0) !important;
--color-border-inverse: rgba(0,0,0,0) !important;
--color-border-info: rgba(0,0,0,0) !important;
--color-border-danger: rgba(0,0,0,0) !important;
--color-border-success: rgba(0,0,0,0) !important;
--color-border-warning: rgba(0,0,0,0) !important;
--color-state-hover-primary-border: rgba(0,0,0,0) !important;
--color-state-hover-secondary-border: rgba(0,0,0,0) !important;
--color-state-selected-primary-border: rgba(0,0,0,0) !important;
--color-state-focus-border: rgba(0,0,0,0) !important;
--color-alert-info-border: rgba(0,0,0,0) !important;
--color-alert-warn-border: rgba(0,0,0,0) !important;
--color-alert-error-border: rgba(0,0,0,0) !important;
--color-alert-success-border: rgba(0,0,0,0) !important;
--color-autocomplete-row-border: rgba(0,0,0,0) !important;
--color-btn-border: rgba(0,0,0,0) !important;
--color-btn-hover-border: rgba(0,0,0,0) !important;
--color-btn-focus-border: rgba(0,0,0,0) !important;
--color-btn-primary-border: rgba(0,0,0,0) !important;
--color-btn-primary-hover-border: rgba(0,0,0,0) !important;
--color-btn-primary-disabled-border: rgba(0,0,0,0) !important;
--color-btn-primary-focus-border: rgba(0,0,0,0) !important;
--color-btn-outline-hover-border: rgba(0,0,0,0) !important;
--color-btn-outline-selected-border: rgba(0,0,0,0) !important;
--color-btn-outline-focus-border: rgba(0,0,0,0) !important;
--color-btn-danger-hover-border: rgba(0,0,0,0) !important;
--color-btn-danger-selected-border: rgba(0,0,0,0) !important;
--color-btn-danger-focus-border: rgba(0,0,0,0) !important;
--color-label-border: rgba(0,0,0,0) !important;
--color-label-primary-border: rgba(0,0,0,0) !important;
--color-label-secondary-border: rgba(0,0,0,0) !important;
--color-label-info-border: rgba(0,0,0,0) !important;
--color-label-success-border: rgba(0,0,0,0) !important;
--color-label-warning-border: rgba(0,0,0,0) !important;
--color-label-danger-border: rgba(0,0,0,0) !important;
--color-label-orange-border: rgba(0,0,0,0) !important;
--color-input-border: rgba(0,0,0,0) !important;
--color-input-disabled-border: rgba(0,0,0,0) !important;
--color-input-warning-border: rgba(0,0,0,0) !important;
--color-input-error-border: rgba(0,0,0,0) !important;
--color-input-tooltip-success-border: rgba(0,0,0,0) !important;
--color-input-tooltip-warning-border: rgba(0,0,0,0) !important;
--color-input-tooltip-error-border: rgba(0,0,0,0) !important;
--color-avatar-border: rgba(0,0,0,0) !important;
--color-toast-border: rgba(0,0,0,0) !important;
--color-toast-icon-border: rgba(0,0,0,0) !important;
--color-toast-success-border: rgba(0,0,0,0) !important;
--color-toast-success-icon-border: rgba(0,0,0,0) !important;
--color-toast-warning-border: rgba(0,0,0,0) !important;
--color-toast-warning-icon-border: rgba(0,0,0,0) !important;
--color-toast-danger-border: rgba(0,0,0,0) !important;
--color-toast-danger-icon-border: rgba(0,0,0,0) !important;
--color-toast-loading-border: rgba(0,0,0,0) !important;
--color-toast-loading-icon-border: rgba(0,0,0,0) !important;
--color-timeline-target-badge-border: rgba(0,0,0,0) !important;
--color-select-menu-border-secondary: rgba(0,0,0,0) !important;
--color-select-menu-backdrop-border: rgba(0,0,0,0) !important;
--color-box-blue-border: rgba(0,0,0,0) !important;
--color-box-header-blue-border: rgba(0,0,0,0) !important;
--color-box-border-info: rgba(0,0,0,0) !important;
--color-box-border-warning: rgba(0,0,0,0) !important;
--color-markdown-frame-border: rgba(0,0,0,0) !important;
--color-markdown-blockquote-border: rgba(0,0,0,0) !important;
--color-markdown-table-border: rgba(0,0,0,0) !important;
--color-markdown-table-tr-border: rgba(0,0,0,0) !important;
--color-menu-border-active: rgba(0,0,0,0) !important;
--color-sidenav-border-active: rgba(0,0,0,0) !important;
--color-drag-and-drop-border: rgba(0,0,0,0) !important;
--color-upload-enabled-border: rgba(0,0,0,0) !important;
--color-upload-enabled-border-focused: rgba(0,0,0,0) !important;
--color-previewable-comment-form-border: rgba(0,0,0,0) !important;
--color-underlinenav-border: rgba(0,0,0,0) !important;
--color-underlinenav-border-hover: rgba(0,0,0,0) !important;
--color-underlinenav-border-active: rgba(0,0,0,0) !important;
--color-verified-badge-border: rgba(0,0,0,0) !important;
--color-header-search-border: rgba(0,0,0,0) !important;
--color-diffstat-neutral-border: rgba(0,0,0,0) !important;
--color-diffstat-deletion-border: rgba(0,0,0,0) !important;
--color-diffstat-addition-border: rgba(0,0,0,0) !important;
--color-hl-author-border: rgba(0,0,0,0) !important;
--color-discussion-border: rgba(0,0,0,0) !important;
--color-repo-language-color-border: rgba(0,0,0,0) !important;
--color-blob-line-highlight-border: rgba(0,0,0,0) !important;
--color-diff-addition-border: rgba(0,0,0,0) !important;
--color-diff-deletion-border: rgba(0,0,0,0) !important;
--color-diff-change-border: rgba(0,0,0,0) !important;
--color-diff-blob-selected-line-highlight-border: rgba(0,0,0,0) !important;
--color-global-nav-input-border: rgba(0,0,0,0) !important;
--color-calendar-graph-day-border: rgba(0,0,0,0) !important;
--color-calendar-graph-day-L4-border: rgba(0,0,0,0) !important;
--color-calendar-graph-day-L3-border: rgba(0,0,0,0) !important;
--color-calendar-graph-day-L2-border: rgba(0,0,0,0) !important;
--color-calendar-graph-day-L1-border: rgba(0,0,0,0) !important;
--color-pr-state-draft-border: rgba(0,0,0,0) !important;
--color-pr-state-open-border: rgba(0,0,0,0) !important;
--color-pr-state-merged-border: rgba(0,0,0,0) !important;
--color-pr-state-closed-border: rgba(0,0,0,0) !important;
--color-merge-box-success-icon-border: rgba(0,0,0,0) !important;
--color-merge-box-success-indicator-border: rgba(0,0,0,0) !important;
--color-merge-box-merged-icon-border: rgba(0,0,0,0) !important;
--color-merge-box-merged-box-border: rgba(0,0,0,0) !important;
--color-merge-box-neutral-icon-border: rgba(0,0,0,0) !important;
--color-merge-box-neutral-indicator-border: rgba(0,0,0,0) !important;
--color-merge-box-warning-icon-border: rgba(0,0,0,0) !important;
--color-merge-box-warning-box-border: rgba(0,0,0,0) !important;
--color-merge-box-error-icon-border: rgba(0,0,0,0) !important;
--color-merge-box-error-indicator-border: rgba(0,0,0,0) !important;
--color-border-primary: rgba(0,0,0,0) !important;
--color-border-secondary: rgba(0,0,0,0) !important;
--color-border-tertiary: rgba(0,0,0,0) !important;
--color-border-overlay: rgba(0,0,0,0) !important;
--color-border-inverse: rgba(0,0,0,0) !important;
--color-border-info: rgba(0,0,0,0) !important;
--color-border-danger: rgba(0,0,0,0) !important;
--color-border-success: rgba(0,0,0,0) !important;
--color-border-warning: rgba(0,0,0,0) !important;
--color-state-hover-primary-border: rgba(0,0,0,0) !important;
--color-state-hover-secondary-border: rgba(0,0,0,0) !important;
--color-state-selected-primary-border: rgba(0,0,0,0) !important;
--color-state-focus-border: rgba(0,0,0,0) !important;
--color-alert-info-border: rgba(0,0,0,0) !important;
--color-alert-warn-border: rgba(0,0,0,0) !important;
--color-alert-error-border: rgba(0,0,0,0) !important;
--color-alert-success-border: rgba(0,0,0,0) !important;
--color-autocomplete-row-border: rgba(0,0,0,0) !important;
--color-btn-border: rgba(0,0,0,0) !important;
--color-btn-hover-border: rgba(0,0,0,0) !important;
--color-btn-focus-border: rgba(0,0,0,0) !important;
--color-btn-primary-border: rgba(0,0,0,0) !important;
--color-btn-primary-hover-border: rgba(0,0,0,0) !important;
--color-btn-primary-disabled-border: rgba(0,0,0,0) !important;
--color-btn-primary-focus-border: rgba(0,0,0,0) !important;
--color-btn-outline-hover-border: rgba(0,0,0,0) !important;
--color-btn-outline-selected-border: rgba(0,0,0,0) !important;
--color-btn-outline-focus-border: rgba(0,0,0,0) !important;
--color-btn-danger-hover-border: rgba(0,0,0,0) !important;
--color-btn-danger-selected-border: rgba(0,0,0,0) !important;
--color-btn-danger-focus-border: rgba(0,0,0,0) !important;
--color-label-border: rgba(0,0,0,0) !important;
--color-label-primary-border: rgba(0,0,0,0) !important;
--color-label-secondary-border: rgba(0,0,0,0) !important;
--color-label-info-border: rgba(0,0,0,0) !important;
--color-label-success-border: rgba(0,0,0,0) !important;
--color-label-warning-border: rgba(0,0,0,0) !important;
--color-label-danger-border: rgba(0,0,0,0) !important;
--color-label-orange-border: rgba(0,0,0,0) !important;
--color-input-border: rgba(0,0,0,0) !important;
--color-input-disabled-border: rgba(0,0,0,0) !important;
--color-input-warning-border: rgba(0,0,0,0) !important;
--color-input-error-border: rgba(0,0,0,0) !important;
--color-input-tooltip-success-border: rgba(0,0,0,0) !important;
--color-input-tooltip-warning-border: rgba(0,0,0,0) !important;
--color-input-tooltip-error-border: rgba(0,0,0,0) !important;
--color-avatar-border: rgba(0,0,0,0) !important;
--color-toast-border: rgba(0,0,0,0) !important;
--color-toast-icon-border: rgba(0,0,0,0) !important;
--color-toast-success-border: rgba(0,0,0,0) !important;
--color-toast-success-icon-border: rgba(0,0,0,0) !important;
--color-toast-warning-border: rgba(0,0,0,0) !important;
--color-toast-warning-icon-border: rgba(0,0,0,0) !important;
--color-toast-danger-border: rgba(0,0,0,0) !important;
--color-toast-danger-icon-border: rgba(0,0,0,0) !important;
--color-toast-loading-border: rgba(0,0,0,0) !important;
--color-toast-loading-icon-border: rgba(0,0,0,0) !important;
--color-timeline-target-badge-border: rgba(0,0,0,0) !important;
--color-select-menu-border-secondary: rgba(0,0,0,0) !important;
--color-select-menu-backdrop-border: rgba(0,0,0,0) !important;
--color-box-blue-border: rgba(0,0,0,0) !important;
--color-box-header-blue-border: rgba(0,0,0,0) !important;
--color-box-border-info: rgba(0,0,0,0) !important;
--color-box-border-warning: rgba(0,0,0,0) !important;
--color-markdown-frame-border: rgba(0,0,0,0) !important;
--color-markdown-blockquote-border: rgba(0,0,0,0) !important;
--color-markdown-table-border: rgba(0,0,0,0) !important;
--color-markdown-table-tr-border: rgba(0,0,0,0) !important;
--color-menu-border-active: rgba(0,0,0,0) !important;
--color-sidenav-border-active: rgba(0,0,0,0) !important;
--color-drag-and-drop-border: rgba(0,0,0,0) !important;
--color-upload-enabled-border: rgba(0,0,0,0) !important;
--color-upload-enabled-border-focused: rgba(0,0,0,0) !important;
--color-previewable-comment-form-border: rgba(0,0,0,0) !important;
--color-underlinenav-border: rgba(0,0,0,0) !important;
--color-underlinenav-border-hover: rgba(0,0,0,0) !important;
--color-underlinenav-border-active: rgba(0,0,0,0) !important;
--color-verified-badge-border: rgba(0,0,0,0) !important;
--color-header-search-border: rgba(0,0,0,0) !important;
--color-diffstat-neutral-border: rgba(0,0,0,0) !important;
--color-diffstat-deletion-border: rgba(0,0,0,0) !important;
--color-diffstat-addition-border: rgba(0,0,0,0) !important;
--color-hl-author-border: rgba(0,0,0,0) !important;
--color-discussion-border: rgba(0,0,0,0) !important;
--color-repo-language-color-border: rgba(0,0,0,0) !important;
--color-blob-line-highlight-border: rgba(0,0,0,0) !important;
--color-diff-addition-border: rgba(0,0,0,0) !important;
--color-diff-deletion-border: rgba(0,0,0,0) !important;
--color-diff-change-border: rgba(0,0,0,0) !important;
--color-diff-blob-selected-line-highlight-border: rgba(0,0,0,0) !important;
--color-global-nav-input-border: rgba(0,0,0,0) !important;
--color-calendar-graph-day-border: rgba(0,0,0,0) !important;
--color-calendar-graph-day-L4-border: rgba(0,0,0,0) !important;
--color-calendar-graph-day-L3-border: rgba(0,0,0,0) !important;
--color-calendar-graph-day-L2-border: rgba(0,0,0,0) !important;
--color-calendar-graph-day-L1-border: rgba(0,0,0,0) !important;
--color-pr-state-draft-border: rgba(0,0,0,0) !important;
--color-pr-state-open-border: rgba(0,0,0,0) !important;
--color-pr-state-merged-border: rgba(0,0,0,0) !important;
--color-pr-state-closed-border: rgba(0,0,0,0) !important;
--color-merge-box-success-icon-border: rgba(0,0,0,0) !important;
--color-merge-box-success-indicator-border: rgba(0,0,0,0) !important;
--color-merge-box-merged-icon-border: rgba(0,0,0,0) !important;
--color-merge-box-merged-box-border: rgba(0,0,0,0) !important;
--color-merge-box-neutral-icon-border: rgba(0,0,0,0) !important;
--color-merge-box-neutral-indicator-border: rgba(0,0,0,0) !important;
--color-merge-box-warning-icon-border: rgba(0,0,0,0) !important;
--color-merge-box-warning-box-border: rgba(0,0,0,0) !important;
--color-merge-box-error-icon-border: rgba(0,0,0,0) !important;
--color-merge-box-error-indicator-border: rgba(0,0,0,0) !important;
*/
