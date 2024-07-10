const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349160830703";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_53_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNCxcbiAgICAgICAgNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDksXG4gICAgICAgIDE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg5LFxuICAgICAgICAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk2LFxuICAgICAgICA0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNixcbiAgICAgICAgNTksXG4gICAgICAgIDQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrZ0I4OUhRSUQrS05KQzVaTk5NWjhlczA2SHFTYUllU21YbmFRdXExWW1VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHcGhkNzNzVFEzMmpJeVNxMFBxbElBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc4ZmM0YTI0LTAwODUtNDk0NS05MmMwLTk3MDRiYjMwNGEwYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICAyMjAsXG4gICAgICAyMDQsXG4gICAgICAyMTYsXG4gICAgICAyMTksXG4gICAgICA4MCxcbiAgICAgIDExMyxcbiAgICAgIDE3NyxcbiAgICAgIDExNixcbiAgICAgIDIwMCxcbiAgICAgIDE1MSxcbiAgICAgIDIwMixcbiAgICAgIDE2MixcbiAgICAgIDIwNixcbiAgICAgIDMzLFxuICAgICAgMjA3LFxuICAgICAgNjEsXG4gICAgICAxODQsXG4gICAgICAxNCxcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNyxcbiAgICAgIDksXG4gICAgICAyMjAsXG4gICAgICAyMDUsXG4gICAgICAyMTgsXG4gICAgICAxOTEsXG4gICAgICAxOTAsXG4gICAgICAxNjYsXG4gICAgICA4NSxcbiAgICAgIDQ3LFxuICAgICAgNzcsXG4gICAgICAxMzYsXG4gICAgICAxMzAsXG4gICAgICAxNjksXG4gICAgICAyMzMsXG4gICAgICAxMzAsXG4gICAgICA4NyxcbiAgICAgIDIzLFxuICAgICAgODQsXG4gICAgICA3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3Q1A0TEpXQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2MDgzMDcwMzo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJPWlogS0hBUFRBSU4gIENPVVRVUkVcIixcbiAgICBcImxpZFwiOiBcIjEwNjc0NzM2ODg2NTk5NDo1NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKckY4aWdRcGJHN3RBWVlCaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJIL0pSYkpEY3YvbUJtNnJOZnJLQ1Z3WTNRdkFCeDkrL2RyRHZWQ2poRVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWWhlSUZuWWkvVzgvMUg4dUhZUjhrcENXenQyczUrTHREajBjN1lPNXdsYTVtQU1URlM2U29zQWdKYTlHeGhOc2NjOEY5Nm5vL29MTjYyMURZRkZ5Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOWRralRlbFRUOGhoMW1RZExsSXRKVHpabllyZzMwWU5VSXJCeFNBczE4UnFmQWc0SVhnMVlJR3dDL1FaY3R3YlRtNnVXN0xLaXNDRE1qQlhWNkttalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2MDgzMDcwMzo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjM3NjA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRG9XXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEb1cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnSnkwWkZsTmdQb2NLZWpVREcvaXFJenh6bGk0QXMwWTJWelNWa3dQQ2xVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg1NzYyNzEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg1NDE3NjMxMzBcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
