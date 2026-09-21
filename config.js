const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VUXZOiOhD9L3nFWkAQ0aqpusiXqOA36NzahwgRohAwBBS3/O9bODsz+3B3a+5b0km6T59zOj8AyXGJpqgBwx+goLiGDLVL1hQIDMGoOh4RBR0QQQbBEJi6K4lkNPBraK+nvNbP7Xq5Xs7qTB9z3fjEJ9Prnm6t/i5/AY8OKKpDisO/JLw7nnNqbFLa99nc1sUR4S5cNFAl90xf8fZYB/7aVjy2weELeLQZIaaYxGaRoAxRmE5Rs4CYfg3+2ZYmMBK56nCxq6nF9xxv4xtGjVejW3eWoV3I25qUKjfb/Br8dL/YvMop59/uvYl+3lF/EFmWRmwfXprV3TB9qAbWLkSx+Qa/xDFBkRMhwjBrvsz71I2Fy5hb1jtuEFb39QAuF/HEmCqIBCjbVs6k53HQ7cpd92vAVeMS7qTqOinjpNi83rczI5mYt2C+C9G5XCZj2Nvee9ltIci/A1/Qd6+c/w/vjnFR5xvumuWOd+/x4sluAt00u06IGY36vL5yYd005z75IvyucrOcKCBV96DI8mmWQbt6rerx3MP7aCOM4Ygz+ZwPDEP7hA9ZRf+GMlvWMgq1UA17elFmKNAiV0rkQoVzI/aPZAcT636/J+fD1PVOFo4NLb4s1WDKurVs1E7DSvHMl3aej6/ddMrN+tksub48OzqjxonAUHx0AEUxLhmFDOfkGevLHQCjeo1CitiTXkAKJguDWS5e9DQ4wK2H5yjbuujVYP2DSC0r5BcKarRcdl5ABxQ0D1FZomiMS5bTxkVlCWNUguG/3zuAoBt7E64tp4pSBxwxLdmWVEWaw+hd1o9TGIZ5Rdi6IaHeLhAFQ+EzjBjDJC5bJisCaZjgGukJZCUYHmFaoo8eEUURGDJaoY+51fOopX6pyuZoNdqBDsiekuCoVVWS+0JfkLtiT1WHkvJP+e3a5oVF8Y0gBjogfd7riaIo9CWxN1CErtJebOOPD4RtwggxiNMSDIG+mLuK7JqmO5/e2Na2NTPW9FgDnx29m+ONfLpypLWy1+6+sePIye/7ksJPx4mSr269/Qax09WLVzSXxfLlP5KAIQiufmSszup2f7lbUr3yNyQw+FdZr9FkdlrjDE8kP+hJo518dNFtLClFZHs6bPwgtldOM3B7SLxItXPLIr2++tPR2Tm1TuqACNU4RL8Xc8hhYyX863o3MGtCabYPVpqnhocjL4+tw3Ex4ByrYMtTf4fCorKibt8Lrl6+2S74JDOnkE2ayqILzTeJ680ute5xOH6z7XNs0l/fFX4aqtWq3R4xek4/ga2Cf9DkHW9rLeHR+e3pr2/kD6M4gsLaE6pMc8WlyBeyiMSIq5tERhczRIEp0b1q7E2ozL0DeDy+d0CRQnbMaQaGABdJThDoAJpXrVMdcsz/UkvXSsdYxnrbbwpLpn26f4MzVDKYFe2UDgRBVNWB8PgJ1CFtYTUHAAA=",
    PREFIX: getConfig("PREFIX") || ".",
    CHATBOT: getConfig("CHATBOT") || "on",
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "DESTINYMD",
    MODE: getConfig("MODE") || process.env.MODE || "public",
    REPO: process.env.REPO || "https://github.com/Destinychi5/KHAN-MD-CHIEF",
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "2347070421588",
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "DESTINY",
    DEV: process.env.DEV || "2347070421588",
    DEVELOPER_NUMBER: '2347070421588@s.whatsapp.net',

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*DESTINYMD VIEWED YOUR STATUS 🤖*",
    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσᴜ ∂σɴт нανє ᴘєʀᴍɪѕѕɪᴏɴ 📵*",

    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
    STICKER_NAME: process.env.STICKER_NAME || "DESTINYMD",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",

    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    MENTION_REPLY: process.env.MENTION_REPLY || "false",
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/7zfdcq.jpg",

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true",
    ANTI_CALL: process.env.ANTI_CALL || "false",
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_VV: process.env.ANTI_VV || "true",
    DELETE_LINKS: process.env.DELETE_LINKS || "false",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same",
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ DESTINY*",
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    AUTO_BIO: process.env.AUTO_BIO || "false",
    WELCOME: process.env.WELCOME || "false",
    GOODBYE: process.env.GOODBYE || "false",
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
};
