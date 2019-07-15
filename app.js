const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', async () => {
	client.user.setActivity('Pixelbyte Studios Grow', { type: 'WATCHING' });
	console.log('Ready!');
});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'welcome');
	if (!channel) return;
	
	member.addRole('528679607176527885');
	number = 25;
	imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
	channel.send(`Welcome to Pixelbyte Studios, ${member}! Enjoy your stay!`, {files: ["./welcome_1.png"]});
	
	const info = new Discord.RichEmbed()
		.setColor('#0099ff')
		.setTitle('Welcome to Pixelbyte Studios!')
		.setDescription('We really hope you enjoy your stay!')
		.setThumbnail('https://cdn.discordapp.com/attachments/401928722166448132/598305311140610049/pbs.png')
		.addField('Info', 'You can type ~help for a list of commands!')
		.addField('What is this channel meant for?', 'In the pixelbyte studios discord, you can talk about ANYTHING coding related!')
		.addBlankField()
		.addField('Having Issues?', 'We at Pixelbyte Studios want to ensure that you have a enjoyable experience! If you are having issues, DM a Moderator or the Founder and we will try to resolve your issue ASAP!', true)
		.addField('Founders Discord', 'XboxSignOut#1085', true)
		.setTimestamp()
		.setFooter('Pixelbyte Studios 2019', 'https://cdn.discordapp.com/attachments/401928722166448132/598305311140610049/pbs.png');
	
	member.send(info);
});

client.on('guildMemberRemove', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'welcome');
	if (!channel) return;
	
	channel.send(`Farewell, ${member}... Comeback soon!`);
});

client.on('message', async message => 
{
	console.log(message.content);
	const args = message.content.slice(0).split(' ');
	
	if(message.content === '~contact')
	{
		const team = new Discord.RichEmbed()
		.setColor('#0099ff')
		.setTitle('Contact Us')
		.setDescription('You need to contact us?')
		.setThumbnail('https://cdn.discordapp.com/attachments/401928722166448132/598305311140610049/pbs.png')
		.addField('Usage', 'Contact us if you are interested in a partnership or for business!')
		.addBlankField()
		.addField('Email', 'pixelbytegamestudios@gmail.com', true)
		.addField('Discord', 'XboxSignOut#1085', true)
		.setTimestamp()
		.setFooter('Pixelbyte Studios', 'https://cdn.discordapp.com/attachments/401928722166448132/598305311140610049/pbs.png');

		message.channel.send(team);
	}else 
	{
		if(message.content === '~newsboard')
		{
			
			const announcement = new Discord.RichEmbed()
			.setColor('#D64E30')
			.setTitle('Pixelbyte Studios Newsboard')
			.setImage('https://cdn.discordapp.com/attachments/401928722166448132/598369589830615040/newsboard.png')
			.setFooter('Pixelbyte Studios Announcement', 'https://cdn.discordapp.com/attachments/401928722166448132/598305311140610049/pbs.png');
			
			//client.channels.get('593184893450846208').send(announcement);
			message.channel.send(announcement);
		}
		else
		{
			if(message.content === '~notag')
			{
				message.member.removeRole('528679607176527885');
				message.member.addRole('528679532077514772');
				message.channel.send(`There you go, ${message.author}! You will no longer be notified by announcements!`)
			}
			else
			{
				if(message.content === '~tag')
				{
					message.member.removeRole('528679532077514772');
					message.member.addRole('528679607176527885');
					message.channel.send(`There you go, ${message.author}! You will now be notified by announcements!`)
				}
				else
				{
					if(message.content === '~help')
					{
						const announcement = new Discord.RichEmbed()
						.setColor('#D64E30')
						.setTitle('Pixelbyte Studios Help')
						.setDescription('List of commands')
						.setThumbnail('https://cdn.discordapp.com/attachments/401928722166448132/598305311140610049/pbs.png')
						.addField('~contact', 'Show how to contact us!')
						.addField('~newsboard', 'Shows the Pixelbyte Newsboard!')
						.addField('~tag', 'Will give you the Taggable role')
						.addField('~notag', 'Will remove your Taggable role so you are not pinged')
						.setTimestamp()
						.setFooter('Pixelbyte Studios', 'https://cdn.discordapp.com/attachments/401928722166448132/598305311140610049/pbs.png');
						message.channel.send(announcement);
					}
					else
					{
						if(message.content === '~patreon')
						{
						const support = new Discord.RichEmbed()
						.setColor('#D64E30')
						.setTitle('Pixelbyte Studios Patreon')
						.setDescription('Want to support us?')
						.setThumbnail('https://cdn.discordapp.com/attachments/401928722166448132/598305311140610049/pbs.png')
						.addField('You can support us here!', 'https://www.patreon.com/pixelbytestudios')
						.setTimestamp()
						.setFooter('Pixelbyte Studios', 'https://cdn.discordapp.com/attachments/401928722166448132/598305311140610049/pbs.png');
						message.channel.send(support);
						}
					}
				}
			}
		}
	}
});

client.login('NTk4MjgyNjE0ODEzNDkxMjIy.XSUazg.Ci-oW2HlNF_o9Gcj_7fbf5XMIkg');