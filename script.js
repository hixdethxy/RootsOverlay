// ==UserScript==
// @name         Root's Overlay
// @namespace    http://tampermonkey.net/
// @version      1.3.1
// @description  Root's Overlay
// @author       Root
// @match        *://*.jklm.fun/*
// @match        *://falcon.jklm.fun/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// @grant        GM_xmlhttpRequest
// @connect      *
// @run-at       document-start
// ==/UserScript==

(function () {
    const roomCode = location.pathname.substr(1, 4).toUpperCase();

    // HIER DEINE URL EINTRAGEN (Wo das Haupt-Script liegt)
    const baseUrl = "https://your-api-domain.com/api/overlay";
    const url = baseUrl + "?file=" + (!roomCode ? "overlay_home" : window.top === window.self ? "overlay_room" : "overlay_game");

    unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest;

    // Lädt das Haupt-Script dynamisch nach
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    document.head.appendChild(script);

    console.log("[Root Overlay] Loader active. Fetching remote logic...");
})();
