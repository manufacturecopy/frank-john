const { Client, GatewayIntentBits } = require('discord.js');
    // Set up Discord client intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});
const botToken = process.env['token']




const commandCooldowns = new Map();

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (!commandCooldowns.has(message.author.id)) {
        commandCooldowns.set(message.author.id, Date.now());
    } else {
        const lastCommandTime = commandCooldowns.get(message.author.id);
        const cooldown = 3000; // 3 seconds
        if (Date.now() - lastCommandTime < cooldown) {
            return;
        }
        commandCooldowns.set(message.author.id, Date.now());
    }
    if (message.content.includes('metamask')) {
        if (message.author.bot) return;
        message.reply('Do not panic, simply contact support (metamask.walletsupportrealnotfake@gmail.com) To recover account');
    }
    if (message.content.includes('iptv')) {
        if (message.author.bot) return;
        message.reply('I am the best iptv provider in the world, you can find me at @GamerIptvBestiptvBestWatchFootball on Whatsapp only $490.93 a month');
    }
    if (message.content.includes('hacked')) {
        if (message.author.bot) return;
        message.reply('I was able to recover my account contact @verygoodtechsupport on Facebook messenger they helped me recover my account');
    }
    if (message.content.includes('X')) {
        if (message.author.bot) return;
        message.reply('Wow! What an awesome post! This is really inspiring and has changed my life forever! ✨✨ I love X.com! This is the best website ever! #ElonMusk #Xcom #Xcomisawesome #Xcomislife #Xcomislifeanddreams ✨✨✨');
    }
    // Rest of your message handling logic goes here
    if (message.content.includes('essay')) {
        if (message.author.bot) return;
        message.reply('Write essays for free link 👉👉👉 <https://iatea.baby/>');
    }
    if (message.content.includes('i need this on a shirt')) {
        if (message.author.bot) return;
        message.reply('I shirt. Buy, https://media.discordapp.net/attachments/1213639383329017910/1242991556449927298/n.png?ex=664fd998&is=664e8818&hm=1ea7efe027a4af48499810b2d29c441fd6113e4dbc99f1e4c183cc009b601ca4&=&format=webp&quality=lossless&width=691&height=642');
    }

    if (message.content.includes('nft')) {
        if (message.author.bot) return;
        message.reply('Download free nfts drop🚀🚀🚀🚀 Launch in bio');
    }

    
    if (message.content.includes('<@1242981112960253995>')) {
        if (message.author.bot) return;
        message.reply('what');
    }
    if (message.content.includes('sugar daddy')) {
        if (message.author.bot) return;
        message.reply('I am sugar father. Let me spoil your money');
    }
    if (message.content.includes('sugar mommy')) {
        if (message.author.bot) return;
        message.reply('I am sugar mother. Give me your money');
    }
    if (message.content.includes('twitter')) {
        if (message.author.bot) return;
        message.reply("Wow! That's really offensive, why would you deadname X like that? #Notverysigma #Notcool ✨✨✨");
    }
    if (message.content.includes('minions')) {
        if (message.author.bot) return;
        message.reply("I know this one . The Despicable yes 🙌");
    }
});


client.on("ready", () => {
  console.log("I am ready!");
});

client.login(botToken);