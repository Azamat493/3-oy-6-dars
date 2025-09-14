// 1
/* 
let matn = "hello";
let teskari = "";

for (let i = matn.length - 1; i >= 0; i--) {
    teskari += matn[i];
}
console.log(teskari); 


(matn.length - 1 – matn oxirgi belgidan boshlash uchun.

i >= 0; i-- – indeksni kamaytirib boramiz, ya’ni oxirdan boshigacha.

teskari += matn[i] – har bir belgini teskari matnga qo‘shamiz.

Natija: "olleh")
*/



// 2
/*
let matn = "How are you doing today?";
let sozlar = "";
for (let i = 0; i < matn.length; i++) {
    if (matn[i] === " ") {
        sozlar += ",";
    } else {
        sozlar += matn[i];
    }
}
console.log(sozlar);

let harflar = "";
for (let i = 0; i < matn.length; i++) {
    harflar += matn[i];
    if (i !== matn.length - 1) {
        harflar += ",";
    }
}
console.log(harflar);

(Birinchi sikl: bo‘sh joyni , bilan almashtiramiz → so‘zlar orasida vergul.
Ikkinchi sikl: har bir belgidan keyin vergul qo‘shamiz (i !== matn.length - 
1 bilan oxirgi belgiga vergul qo‘ymaslik).
*/


//3
/*
let matn = "How are you doing today?";
let sozzlarSoni = 0;
for (let i = 0; i < matn.length; i++) {
    if (matn[i] === " " && matn[i-1] !== " " && i !== 0) {
        sozzlarSoni++;
    }
}
if (matn.length > 0) {
    sozzlarSoni++;
}

console.log(sozzlarSoni);


(Bo‘sh joy belgisi " " kelgan joyni hisoblaymiz.
matn[i-1] !== " " – ketma-ket bo‘sh joylar hisoblanmasin.
if (matn.length > 0) – bo‘sh joylardan tashqari oxirgi so‘zni qo‘shamiz.
Natija: 5 ta so‘z.)
*/


//4
/*
let text = "salom dunyo";
let words = text.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
let newText = words.join(" ");
console.log(newText);


(split(" ") – matnni so‘zlarga bo‘lamiz.
words[i][0].toUpperCase() – birinchi harfni katta qilamiz.
words[i].slice(1) – qolgan harflar.
join(" ") – arrayni yana matnga birlashtiramiz.)
*/

//5
/*
let text = "a b c d";
let newText = text.replace(/ /g, "");
console.log(newText);


(replace(/ /g, "") – matndagi barcha bo‘sh joylarni ( ) bo‘sh string ""
 bilan almashtiradi.
/ /g – g – global flag, ya’ni hamma bo‘sh joylarni o‘zgartiradi.)
*/

