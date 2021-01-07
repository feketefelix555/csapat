/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

function loadCSS(cssId) {
    if (!document.getElementById(cssId))
    {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        //link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = cssId;
        link.media = 'all';
        head.appendChild(link);
    }
}

function loadstyle(pc, mobile) {
    console.log(detectMob());
    console.log(screen.width);
    console.log(navigator.userAgent);
    if (detectMob()) {
        loadCSS(mobile);
    } else {
        loadCSS(pc);
    }
}


