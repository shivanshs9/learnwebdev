/*
 #    #     #     ####   #    #    ##    #    #   #####  #    #  #####   #####
 ##   #     #    #       #    #   #  #   ##   #     #    #    #  #    #  #    #
 # #  #     #     ####   ######  #    #  # #  #     #    #    #  #    #  #    #
 #  # #     #         #  #    #  ######  #  # #     #    # ## #  #####   #####
 #   ##     #    #    #  #    #  #    #  #   ##     #    ##  ##  #   #   #
 #    #     #     ####   #    #  #    #  #    #     #    #    #  #    #  #

*/
rebtn = document.querySelector('#rebtn');
rediv = document.querySelector('.rebtn');
rebtn.onclick = function() {
    location.reload();
}
document.querySelector('#onebtn').onclick = function() {
    document.querySelector('.oneopt').classList.remove('hide');
    document.querySelector('.oneopta').classList.remove('hide');
    document.querySelector('.twobtn').classList.add('hide');
    document.querySelector('.onebtn').classList.add('hide');
}
var convert = new Map();
convert.set(1,'.b1');
convert.set(2,'.b2');
convert.set(3,'.b3');
convert.set(4,'.b4');
convert.set(5,'.b5');
convert.set(6,'.b6');
convert.set(7,'.b7');
convert.set(8,'.b8');
convert.set(9,'.b9');
var turn = 0;
var clicked = [0,0,0,0,0,0,0,0,0];
var over = 0;
var twop = 0;
var whowin = 0;
var bfirst = 0;
var currbtn = 0;
var bdecider = 0;
var bsteps = 0;
var hsteps = 0;
var currentm;
var bmap1 = new Map();
var bmap2 = new Map();
var bmap3 = new Map();
var bmap4 = new Map();
var bmap5 = new Map();
var bmap6 = new Map();
var bmap7 = new Map();
bmap1.set(4,1); bmap2.set(4,9); bmap3.set(4,3); bmap4.set(4,2); bmap5.set(4,7); bmap1.set(2,1); bmap2.set(2,9); bmap3.set(2,7); bmap4.set(2,4); bmap5.set(2,3); bmap1.set(6,9); bmap2.set(6,1); bmap3.set(6,7); bmap4.set(6,8); bmap5.set(6,3); bmap1.set(8,9); bmap2.set(8,1); bmap3.set(8,3); bmap4.set(8,7); bmap5.set(8,6); bmap1.set(1,4); bmap2.set(1,6); bmap3.set(1,2); bmap4.set(1,8); bmap5.set(1,7); bmap6.set(1,3); bmap7.set(1,9); bmap1.set(3,2); bmap2.set(3,8); bmap3.set(3,6); bmap4.set(3,4); bmap5.set(3,9); bmap6.set(3,1); bmap7.set(3,7); bmap1.set(7,8); bmap2.set(7,2); bmap3.set(7,4); bmap4.set(7,6); bmap5.set(7,1); bmap6.set(7,9); bmap7.set(7,3); bmap1.set(9,8); bmap2.set(9,2); bmap3.set(9,6); bmap4.set(9,4); bmap5.set(9,3); bmap6.set(9,7); bmap7.set(9,1);
var optdiv = document.querySelector('.opt');
var griddiv = document.querySelector('.grids');
document.querySelector('#youbtn').onclick = function() {
    optdiv.classList.add('hide');
    griddiv.classList.remove('hide');
    rediv.classList.remove('hide');
    currentm = document.querySelector('.youturn');
    currentm.classList.remove('hide');
} 
document.querySelector('#botbtn').onclick = function() {
    optdiv.classList.add('hide');
    griddiv.classList.remove('hide');
    rediv.classList.remove('hide');
    clicked[4] = 2;
    currentm = document.querySelector('.youturn');
    currentm.classList.remove('hide');
    document.querySelector('.b5').setAttribute('style','background-image:url(\'images/cross.jpg\')');
    turn += 1;
    bfirst = 1;
}
document.querySelector('#twobtn').onclick = function() {
    optdiv.classList.add('hide');
    griddiv.classList.remove('hide');
    rediv.classList.remove('hide');
    currentm = document.querySelector('.p1turn');
    currentm.classList.remove('hide');
    twop = 1;
} 
function check() {
    if (clicked[0] === clicked[1] && clicked[1] === clicked[2] && clicked[0] !== 0 && clicked[1] !==0 && clicked[2]!==0) {
        whowin = clicked[0];
        return 1;
    }
    if (clicked[3] === clicked[4] && clicked[4] === clicked[5] && clicked[3] !== 0 && clicked[4] !==0 && clicked[5]!==0) {
        whowin = clicked[3];
        return 1;
    }
    if (clicked[6] === clicked[7] && clicked[7] === clicked[8] && clicked[6] !== 0 && clicked[7] !==0 && clicked[8]!==0) {
        whowin = clicked[6];
        return 1;
    }
    if (clicked[0] === clicked[3] && clicked[3] === clicked[6] && clicked[0] !== 0 && clicked[3] !==0 && clicked[6]!==0) {
        whowin = clicked[0];
        return 1;
    }
    if (clicked[1] === clicked[4] && clicked[4] === clicked[7] && clicked[1] !== 0 && clicked[4] !==0 && clicked[7]!==0) {
        whowin = clicked[1];
        return 1;
    }
    if (clicked[2] === clicked[5] && clicked[5] === clicked[8] && clicked[2] !== 0 && clicked[5] !==0 && clicked[8]!==0) {
        whowin = clicked[2];
        return 1;
    }
    if (clicked[0] === clicked[4] && clicked[4] === clicked[8] && clicked[0] !== 0 && clicked[4] !==0 && clicked[8]!==0) {
        whowin = clicked[0];
        return 1;
    }
    if (clicked[2] === clicked[4] && clicked[4] === clicked[6] && clicked[2] !== 0 && clicked[4] !==0 && clicked[6]!==0) {
        whowin = clicked[2];
        return 1;
    }
    if (turn === 9) {
        return 2;
    }
    return 0;
}
function pressbtn(a) {
    if (over === 1) {
        alert('Game Over. Restart the game.');
    } else if (clicked[a-1] !== 0) {
        alert('Invalid Move');
    } else {
        turn += 1;
        clicked[a-1] = (turn%2) + 1;
        if (turn%2 !== 0) {
            var cbtn = document.querySelector(convert.get(a));
            cbtn.setAttribute('style','background-image:url(\'images/cross.jpg\')');
        } else {
            var cbtn = document.querySelector(convert.get(a));
            cbtn.setAttribute('style','background-image:url(\'images/zero.jpg\')');
        }
        return 1;
}
return 0;
}
function bwin() {
    var i = 0;
    while (i < 9) {
        if (clicked[i] === 0) {
            clicked[i] = 1;
            if (check() === 1) {
                clicked[i] = 0;
                return i+1;
            }
            clicked[i] = 0;
        }
        i += 1;
    }
    return 0;
}
function hwin() {
    var i = 0;
    while (i < 9) {
        if (clicked[i] === 0) {
            clicked[i] = 2;
            if (check() === 1) {
                clicked[i] = 0;
                return i+1;
            }
            clicked[i] = 0;
        }
        i += 1;
    }
    return 0;
}
function hmove() {
    if (hsteps === 0) {
        if (currbtn === 2 || currbtn === 4 || currbtn === 6 || currbtn === 8) {
            pressbtn(5);
        } else if (currbtn === 5){
            pressbtn(3);
        } else {
            pressbtn(5);
        }
    } else {
        if (bwin() === 0) {
            if (hwin() === 0) {
                var i = 0;
                while (i < 9) {
        if (clicked[i] === 0) {
            pressbtn(i+1);
            break;
            }
            i += 1;
        }
        
            } else {
                pressbtn(hwin());
            }
        } else {
            pressbtn(bwin());
        }
    }
    hsteps += 1;
}
function botmove() {
    if (bfirst === 1) {
        if (bsteps === 0) {
            bdecider = currbtn;
            pressbtn(bmap1.get(bdecider));
        } else if (bsteps === 1) {
            if (clicked[bmap2.get(bdecider) - 1] === 0) {
                pressbtn(bmap2.get(bdecider));
            } else {
                pressbtn(bmap3.get(bdecider));
            }
        } else if (bsteps === 2) {
            if (clicked[bmap4.get(bdecider) - 1] === 0) {
                pressbtn(bmap4.get(bdecider));
            } else {
                pressbtn(bmap5.get(bdecider));
            }
        } else if (bsteps === 3) {
            if (clicked[bmap6.get(bdecider) - 1] === 0) {
                pressbtn(bmap6.get(bdecider));
            } else {
                pressbtn(bmap7.get(bdecider));
            }
        } else if (bsteps === 4) {
            pressbtn(bmap7.get(bdecider));
        }
        bsteps += 1;
    } else {
        hmove();
        //Human First Code
    }
}





/* ------------------------------------------------------------------------------------------------------------- */
function solve() {
if (check() === 0) {
if (twop === 0 ) {
//Main Code

} else {
    if (turn % 2 === 1 ) {
        currentm.classList.add('hide');
        currentm = document.querySelector('.p2turn');
        currentm.classList.remove('hide');
    } else {
        currentm.classList.add('hide');
        currentm = document.querySelector('.p1turn');
        currentm.classList.remove('hide');
    }
    //Switch turn messeges
}
} else if (check() === 1) {
//Win
if (twop === 1) {
currentm.classList.add('hide');
over = 1;
if (whowin === 2) {
winp = document.querySelector('.p1win');
winp.classList.remove('hide');
} else {
winp = document.querySelector('.p2win');
winp.classList.remove('hide');
}
} else {
over = 1;
currentm.classList.add('hide');
var winm = document.querySelector('.win');
winm.classList.remove('hide');
}
} else {
//Draw
over = 1;
currentm.classList.add('hide');
var drawm = document.querySelector('.draw');
drawm.classList.remove('hide');
}
}


/* --------------------------------------------------------------------------------------------------------------------------------*/
document.querySelector('.b1').onclick = function() {
if (pressbtn(1) === 1) {
    currbtn = 1;
    if (twop === 0) {
        botmove();
    }
    solve();
}
}
document.querySelector('.b2').onclick = function() {
    if (pressbtn(2) === 1) {
        currbtn = 2;
        if (twop === 0) {
            botmove();
        }
        solve();
    }
}
document.querySelector('.b3').onclick = function() {
    if (pressbtn(3) === 1) {
        currbtn = 3;
        if (twop === 0) {
            botmove();
        }
        solve();
    }
}
document.querySelector('.b4').onclick = function() {
    if (pressbtn(4) === 1) {
        currbtn = 4;
        if (twop === 0) {
            botmove();
        }
        solve();
    }
}
document.querySelector('.b5').onclick = function() {
    if (pressbtn(5) === 1) {
        currbtn = 5;
        if (twop === 0) {
            botmove();
        }
        solve();
    }
}
document.querySelector('.b6').onclick = function() {
    if (pressbtn(6) === 1) {
        currbtn = 6;
        if (twop === 0) {
            botmove();
        }
        solve();
    }
}
document.querySelector('.b7').onclick = function() {
    if (pressbtn(7) === 1) {
        currbtn = 7;
        if (twop === 0) {
            botmove();
        }
        solve();
    }
}
document.querySelector('.b8').onclick = function() {
    if (pressbtn(8) === 1) {
        currbtn = 8;
        if (twop === 0) {
            botmove();
        }
        solve();
    }
}
document.querySelector('.b9').onclick = function() {
    if (pressbtn(9) === 1) {
        currbtn = 9;
        if (twop === 0) {
            botmove();
        }
        solve();
    }
}