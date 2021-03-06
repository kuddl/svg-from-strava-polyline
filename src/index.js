import "./styles.css";
import polyline from "@mapbox/polyline";
import util from "util";

// returns an array of lat, lon pairs
// "msydHgx`q@_A~IkDL\\pJsPrWcQhv@cJxKq@bIpIjAzE~OzKdMbKrd@jK~FtMbTbL}H~DzVpLnJpTwB_CpPdNjOsDkKoNiGiKdHcIiDoTnDm]gMwWlQgy@sOiQpUyQqTuZdHwHgBlHuCqLoCyIzBaBpGgHSyKwF{AgIuGcAsNdIc]v@cKqEyLxFoYuMkd@pGoYsFkI`FuEpRy_@|g@iLlp@gIvBcUyRbAyJ_KEeV_]gLgGiNe}@yFmM|J}LeJiDoAoH{Uh@}BgT{Hk@qLcOja@aZsPyXgDyOzKLt@kN_ScXoAuTp@oYxN}LxQ}CgNm_AjJuCtj@cn@bh@sI~C{NnWmEjCiIhHWpDqHde@A~X_Nv]hO`S`Sda@aGfL`LGxEwLdQ`N~e@iT`k@XhEdDaBkC|Z~Jr_@}Sp_@~D`ReFg@qEjLiTsNeAwG}Ht@{BhFGt]lJtOxJfE`D|J`R|Hle@kTzPrY~ZmLlPpEbMqGxJeQxYqM~\\zNb\\uE|PlX~DoIlGnArGaHbQmw@nHcM"
//  "yo`bHy}{v@vC}PhIvFnFcPpQnAjVnXvPmV|v@jMhPnfBnMmJz[zQgFjl@vLu@xg@s}@hJp@jYee@lH~UfGz@FaZrGgL`fAdrAnk@lInTlW~XjDtS|zBvk@}@xE|hAcItp@dPnyAfPlg@?f^nHLpBdUly@d_@iDzPhKjvD|BdPtJhHoHvmBnBtaBtOtuBoBn\\v\\|fC|GfpBfMtw@`jA|wBjeAlOnWwHL}}@fPgPbFwZru@eWb}@k~AzQeK}CcH~Rcj@xbAaqBbk@wuCpYgz@dd@wc@~e@qtAnH}g@dYiQba@vFbTwv@hF{hAmH[oA_YkIyJwJ_d@}YqUnYrUxInb@jJ~@~@yKoClKuGiAiKgd@cZ{TwEgW}\\qi@wJuj@_k@k_@zA}ScQzAmg@sb@}YrJaIj}@nIvo@mBrDoFyQ_OGoKvYaOn{EgGv[qDMeMmKyIyf@m\\ea@gr@o]e_@wg@_`@hBwO~\\s^DaBg_@ma@eyAeLySsRw@pM{Y{G{IpF_PrOuaCieAk_@yK_WvHiq@aHcDUga@yCjY}Ca`@a]ub@qPiBuMna@}\\wB`Hpu@oS`ZiNlf@yXmp@mEbNkY~CuBqZ}V}F?}]{Ymx@yi@oGmTyVid@wHaG@bG|SczAz^kGfPe]uRyGpg@qMtQaFkUrBo[e\\jL}i@qUsCydAmQggBcw@wLgQ~UyYe\\gNv@oElPoIcGoCfP"
//
//
let arr_ = polyline.decode(
  "yo`bHy}{v@vC}PhIvFnFcPpQnAjVnXvPmV|v@jMhPnfBnMmJz[zQgFjl@vLu@xg@s}@hJp@jYee@lH~UfGz@FaZrGgL`fAdrAnk@lInTlW~XjDtS|zBvk@}@xE|hAcItp@dPnyAfPlg@?f^nHLpBdUly@d_@iDzPhKjvD|BdPtJhHoHvmBnBtaBtOtuBoBn\\v\\|fC|GfpBfMtw@`jA|wBjeAlOnWwHL}}@fPgPbFwZru@eWb}@k~AzQeK}CcH~Rcj@xbAaqBbk@wuCpYgz@dd@wc@~e@qtAnH}g@dYiQba@vFbTwv@hF{hAmH[oA_YkIyJwJ_d@}YqUnYrUxInb@jJ~@~@yKoClKuGiAiKgd@cZ{TwEgW}\\qi@wJuj@_k@k_@zA}ScQzAmg@sb@}YrJaIj}@nIvo@mBrDoFyQ_OGoKvYaOn{EgGv[qDMeMmKyIyf@m\\ea@gr@o]e_@wg@_`@hBwO~\\s^DaBg_@ma@eyAeLySsRw@pM{Y{G{IpF_PrOuaCieAk_@yK_WvHiq@aHcDUga@yCjY}Ca`@a]ub@qPiBuMna@}\\wB`Hpu@oS`ZiNlf@yXmp@mEbNkY~CuBqZ}V}F?}]{Ymx@yi@oGmTyVid@wHaG@bG|SczAz^kGfPe]uRyGpg@qMtQaFkUrBo[e\\jL}i@qUsCydAmQggBcw@wLgQ~UyYe\\gNv@oElPoIcGoCfP"
);

let arr = polyline.decode(
  "msydHgx`q@_A~IkDL\\pJsPrWcQhv@cJxKq@bIpIjAzE~OzKdMbKrd@jK~FtMbTbL}H~DzVpLnJpTwB_CpPdNjOsDkKoNiGiKdHcIiDoTnDm]gMwWlQgy@sOiQpUyQqTuZdHwHgBlHuCqLoCyIzBaBpGgHSyKwF{AgIuGcAsNdIc]v@cKqEyLxFoYuMkd@pGoYsFkI`FuEpRy_@|g@iLlp@gIvBcUyRbAyJ_KEeV_]gLgGiNe}@yFmM|J}LeJiDoAoH{Uh@}BgT{Hk@qLcOja@aZsPyXgDyOzKLt@kN_ScXoAuTp@oYxN}LxQ}CgNm_AjJuCtj@cn@bh@sI~C{NnWmEjCiIhHWpDqHde@A~X_Nv]hO`S`Sda@aGfL`LGxEwLdQ`N~e@iT`k@XhEdDaBkC|Z~Jr_@}Sp_@~D`ReFg@qEjLiTsNeAwG}Ht@{BhFGt]lJtOxJfE`D|J`R|Hle@kTzPrY~ZmLlPpEbMqGxJeQxYqM~\\zNb\\uE|PlX~DoIlGnArGaHbQmw@nHcM"
);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var minX, minY, maxX, maxY;
arr.forEach((p, i) => {
  if (i === 0) {
    // if first point
    minX = maxX = p[1];
    minY = maxY = p[0];
  } else {
    minX = Math.min(p[1], minX);
    minY = Math.min(p[0], minY);
    maxX = Math.max(p[1], maxX);
    maxY = Math.max(p[0], maxY);
  }
});
// now get the map width and heigth in its local coords
const mapWidth = maxX - minX;
const mapHeight = maxY - minY;
const mapCenterX = (maxX + minX) / 2;
const mapCenterY = (maxY + minY) / 2;

// to find the scale that will fit the canvas get the min scale to fit height or width
const scale = Math.min(canvas.width / mapWidth, canvas.height / mapHeight);

// Now you can draw the map centered on the cavas
ctx.beginPath();
arr.forEach(p => {
  ctx.lineTo(
    (p[1] - mapCenterX) * scale + canvas.width / 2,
    (p[0] - mapCenterY) * scale + canvas.height / 2
  );
});
ctx.stroke();

// console.log(util.inspect(arr, {depth: null}));
