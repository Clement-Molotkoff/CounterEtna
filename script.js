// ==UserScript==
// @name         Etna Counter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Counts days left
// @author       Clément MOLOTKOFF
// @match        https://intra.etna-alternance.net/
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @require      http://code.jquery.com/jquery-latest.js
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(".alert-info{width:100%;padding:12px 16px;border-radius:4px;border-style:solid;border-width:1px;margin-bottom:12px;font-size:16px;background-color:#d9edf7;color:#31708f;border-color:#7eb6c1}");

(function() {
    'use strict';

    var dateNow = new Date();
    var endDate = new Date("10/07/2022");

    var time_diff = endDate.getTime() - dateNow.getTime();
    var days_Diff = time_diff / (1000 * 3600 * 24);
    var numberMonth = Math.floor(days_Diff/30);

    window.addEventListener("load", async () => {
        await new Promise((res) => setTimeout(res, 1000));
        var alertBox = document.createElement ('div');

        alertBox.innerHTML = '<h2 class="alert-info"> Bonne nouvelle ! il ne reste plus que : ' + Math.round(days_Diff) + ' jours à l\'ETNA <br> Soit ' + Math.floor(days_Diff/30) + ' mois et ' + Math.floor(days_Diff % 30) + ' jours </h2>';
        alertBox.setAttribute ('id', 'myContainer');
        var findElementNormal = Array.from(document.getElementsByClassName("row hidden-sm hidden-xs"))[0];
        findElementNormal.appendChild(alertBox);
    });

})();
