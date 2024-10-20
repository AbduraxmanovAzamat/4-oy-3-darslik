// 1-10 masalalar

// 1 - masala

// let hafta_kunlari = +prompt("Hafta kunini kiriting")

// switch (hafta_kunlari) {

//         case 1:
//         console.log("Dushanba");

//         break;


//         case 2:
//         console.log("Seshanba");

//         break;

//         case 3:
//         console.log("Chorshanba");

//         break;

//         case 4:
//             console.log("Payshanba");

//             break;
//             case 5:
//         console.log("Juma");

//         break;

//          case 6:
//             console.log("Shanba");

//             break;

//     case 7:
//                 console.log("Yakshanba");

//                 break;
//     default:
//         console.log("Bunday hafta kuni yo'q")
//         break;
// }

// 2-masala

// let k = +prompt("Baho raqamini kiriting")
// switch (k) {

//         case 1:
//         console.log("Yomon");

//         break;


//         case 2:
//         console.log("qoniqarsiz");

//         break;

//         case 3:
//         console.log("qoniqarli");

//         break;

//         case 4:
//             console.log("yaxshi");

//             break;
//             case 5:
//         console.log("a'lo");

//         break;
//     default:
//         console.log("Bunday baho yo'q")
//         break;
// }


// 3-masala

// let oy = +prompt("Oy raqamini kiriting")

// switch (oy) {

//         case 1:
//         case 2:
//         case 3:
//         console.log("Qish fasli");

//         break;

//         case 4:
//         case 5:
//         case 6:
//         console.log("Bahor fasli");

//         break;

//         case 7:
//         case 8:
//         case 9:
//         console.log("Yoz fasli");

//         break;

//         case 10:
//         case 11:
//         case 12:
//         console.log("Kuz fasli");

//         break;
//     default:
//         console.log("Bunday fasl yo'q")
//         break;
// }


// 4-masala

// let oy_kunlari = +prompt("Oy kunini kiriting")

// switch (oy_kunlari) {

//         case 1:
//         console.log("Yanvar 31 kun");

//         break;

//         case 2:
//         console.log("Fevral 28 kun");

//         break;

//         case 3:
//         console.log("Mart 31 kun");

//         break;

//         case 4:
//         console.log("Aprel 30 kun");

//         break;

//         case 5:
//         console.log("May 30 kun");

//         break;

//         case 6:
//         console.log("Iyun 31 kun");

//         break;

//         case 7:
//         console.log("Iyul 30 kun");

//         break;

//         case 8:
//         console.log("Avgust 31 kun");

//         break;

//         case 9:
//         console.log("Sentyabr 30 kun");

//         break;

//         case 10:
//         console.log("Oktyabr 31 kun");

//         break;

//         case 11:
//         console.log("Noyabr 30 kun");

//         break;

//         case 12:
//         console.log("Dekabr 31 kun");

//         break;

//     default:
//         console.log("Bunday oy va kun yo'q")
//         break;
// }


// 5-masala

// let a = +prompt("a")
// let b = +prompt("b")
// let amal = + prompt("amalni kiriting 1_+  2_-  3_:  4_*")

// switch (amal) {
//     case 1:

//         console.log(a + b);
//         break;

//     case 2:

//         console.log(a - b);
//         break;
//     case 3:
//         console.log(a / b);
//         break;
//     case 4:

//         console.log(a * b);
//         break;

//     default:
//         console.log("Bunday amal yo'q")
//         break;
// }


// 6-masala

// let birlik = +prompt("Kesmaning birligini kiriting 1-ditsimetr, 2-kilometr, 3-metr, 4-millimetr, 5-santimetr")
// let uzunligi = +prompt("kesma uzunligini kiriting")

// let ditsimetr = uzunligi/10;
// let kilometr = uzunligi*1000;
// let metr = uzunligi*1;
// let millimetr = uzunligi/1000;
// let santimetr = uzunligi/100;


// switch (birlik) {
//     case 1:
//         alert(ditsimetr + " metr")
//         break;
//         case 2:
//         alert(kilometr + " metr")
//         break;
//         case 3:
//         alert(metr + " metr")
//         break;
//         case 4:
//         alert(millimetr + " metr")
//         break;
//         case 5:
//         alert(santimetr + " metr")
//         break;

//     default:
//         alert("Bunday birlik yo'q")
//         break;

// }





// 7-masala

// let birlik = +prompt("Og'irlik birligini kiriting: 1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5-senter")
// let ogirlik = +prompt("og'irlik qiymatini kiriting")

// let kilogramm = ogirlik*1;
// let milligramm = ogirlik/1000000;
// let gramm = ogirlik/1000;
// let tonna = ogirlik*1000;
// let sentner = ogirlik*100;


// switch (birlik) {
//     case 1:
//         alert(kilogramm + " kilogramm")
//         break;
//         case 2:
//         alert(milligramm + " kilogramm")
//         break;
//         case 3:
//         alert(gramm + " kilogramm")
//         break;
//         case 4:
//         alert(tonna + " kilogramm")
//         break;
//         case 5:
//         alert(sentner + " kilogramm")
//         break;

//     default:
//         alert("Bunday birlik yo'q")
//         break;

// }

//  8-masala

// let kun = +prompt("kun sanasini kirgizing")
// let oy = +prompt("oy raqamini kiriting")
// let amal = true

// switch (oy) {
//     case 1: // Yanvar
//     case 3: // Mart
//     case 5: // May
//     case 7: // Iyul
//     case 8: // Avgust
//     case 10: // Oktyabr
//     case 12: // Dekabr
//         if (kun < 1 || kun > 31) amal = false;
//         break;

//     case 4: // Aprel
//     case 6: // Iyun
//     case 9: // Sentyabr
//     case 11: // Noyabr
//         if (kun < 1 || kun > 30) amal = false;
//         break;

//     case 2: // Fevral
//         if (kun < 1 || kun > 28) amal = false;
//         break;

//     default:
//         amal = false;
// }

// if (amal) {
//     console.log(kun + '-kun', oy + '-oy');
// } else {
//     alert("Noto'g'ri sana kiritdingiz!");
// }



// 9-masala

// let kun = +prompt('kun sanasini kirgizing')
// let oy = +prompt('oy raqamini kiriting')
//     let keyingi_kun = kun;
//     let keyingi_oy = oy;

//     switch (oy) {
//         case 1: // Yanvar
//         case 3: // Mart
//         case 5: // May
//         case 7: // Iyul
//         case 8: // Avgust
//         case 10: // Oktyabr
//         case 12: // Dekabr
//             if (kun === 31) {
                
//                 keyingi_oy = (oy === 12) ? 1 : oy + 1;
//             } else {
//                 keyingi_kun++;
//             }
//             break;

//         case 4: // Aprel
//         case 6: // Iyun
//         case 9: // Sentyabr
//         case 11: // Noyabr
//             if (kun == 30) {
            
//                 keyingi_oy++;
//             } else {
//                 keyingi_kun++;
//             }
//             break;

//         case 2: // Fevral
//             if (kun == 28) {
            
//                 keyingi_oy++;
//             } else {
//                 keyingi_kun++;
//             }
//             break;

//         default:
//             console.log("Noto'g'ri oy!");
            
//     }

//     console.log(kun+ ' kun' , oy+' oy');
