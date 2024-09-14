const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_21_09_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDk4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTczLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1LFxuICAgICAgICA0OSxcbiAgICAgICAgNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjksXG4gICAgICAgIDc1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI4LFxuICAgICAgICA3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDU1LFxuICAgICAgICAyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTczLFxuICAgICAgICAzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUzLFxuICAgICAgICA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDMzLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzajI5NnVLT2R4Ly91dVFqMXBTd0NIL1FzU1dYdU80NldSWmNrbnhFcVlFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNjM2MjI4NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE5N0JBNjk2RjJFNTJBNjNBRjBCQUI1QkJBNjlDRjYxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjMyMDA3MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNjM2MjI4NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNEQjU2MEQyMTBBRjQ0Njc2QTlCMzNBNjgyMkM1MkI5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjMyMDA3M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4TUZWdTFfdlFRZVc1OHJHOUxxSzRnXCIsXG4gIFwicGhvbmVJZFwiOiBcImFmMzM4NWIyLWFkNTgtNGFmNS1iYTA5LTFmZTI5MjZlNTAzYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDQ0LFxuICAgICAgMTY5LFxuICAgICAgMTQyLFxuICAgICAgMTkzLFxuICAgICAgNzQsXG4gICAgICA4NSxcbiAgICAgIDE5MyxcbiAgICAgIDkyLFxuICAgICAgNTYsXG4gICAgICAxMjcsXG4gICAgICAxMDksXG4gICAgICAyMjgsXG4gICAgICAyNTEsXG4gICAgICAxNTgsXG4gICAgICAyMjYsXG4gICAgICAxNTMsXG4gICAgICAzOSxcbiAgICAgIDE5LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICAyNDEsXG4gICAgICA4NixcbiAgICAgIDExOSxcbiAgICAgIDg5LFxuICAgICAgMjQ1LFxuICAgICAgMTE2LFxuICAgICAgMTYsXG4gICAgICAyMDEsXG4gICAgICAxNzcsXG4gICAgICAxMzQsXG4gICAgICA2LFxuICAgICAgMjE0LFxuICAgICAgMyxcbiAgICAgIDEyMyxcbiAgICAgIDE2NSxcbiAgICAgIDg4LFxuICAgICAgMjA3LFxuICAgICAgMTA5LFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBLM01XV0hNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDYzNjIyODY5OjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTcyMjc1ODI3MTE2Mzo3MEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJKdWRleCBPbnlla3dlbHVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNL0tqcHNFRU1LYmxyY0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm9Iblk5bS94UGtCM05QWHNyK3AvWGZpMXY2QWtGdGYrZ2p4UmtwUDc2a2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid3k5NTByM0NkK2FWRVR2NEdyMWMvc1dQWkRNaytjSEpoT1VhR25jT1g2bVhuQWVuRVBYSmptM09Rc1dKRHBVbkpvRGMzQnJHeFlQcjMrbG5Fb1FDQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidkpRcy80cW84SjVHR0o1c1llU0Y4eC9BQVBqcFZXUlBXcmVCaUEzeGdRaHpXbFBCVlJ2NXU3dEpwVDJwb0pqbnpzUGEzVFpyVm9MVWlBVGU5NmFsamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MzYyMjg2OTo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjMyMDA3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUR3MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHcwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRThNTGEvTXdrdk8vcSsrYk5tQ2ZPYjlDbmdJTmNIOWhlbEhta0FKVG5tbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTMwNjAzODU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjYzMTczMDMwNzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
