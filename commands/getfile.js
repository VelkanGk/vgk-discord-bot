const { MessageAttachment } = require('discord.js');
module.exports.execute = (msg, args) => {

    if (!util.checkAuth(msg)){ 
        util.print(msg,'',`Sorry <@${msg.author.id}>! I can't let you use this command`,'red');
        return; 
    }

    // Remove command
    args.splice(0,1);
    // Join args in a single string
    args = args.join(" ");
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('./config/'+args);
    // Send the attachment in a private message with
    msg.author.send("Here is the file.",attachment);
    // Send confirmation message in server channel
    util.print(msg,'',"I have sent the file as a private message",'green');
}

module.exports.experimental = false;
module.exports.help = {
    name: 'getfile',
    description: 'ADMIN ONLY - Sends a private message with a file from config/',
    usage: "$getfile <file_name>"
}