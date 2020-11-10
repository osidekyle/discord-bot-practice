require("dotenv").config()

const {Client}=require("discord.js")


const client=new Client();

client.on('ready', ()=>{
    console.log(`${client.user.username} has logged in`)
})


client.on('message',(message)=>{
    console.log(`${message.author.tag} has sent the message "${message.content}"`)
    if(message.content==="hello"){
        message.reply("hello there!")
    }
})


client.login(process.env.DISCORDJS_BOT_TOKEN)