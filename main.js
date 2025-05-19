try {
    let node_modules = require('discord.js')
} catch (e) {
    console.log(chalk.hex('#FF0000')('[') + chalk.hex('#F7F7F7')('ERROR') + chalk.hex('#FF0000')(']') + chalk.hex('#F7F7F7')(' node_modules folder does not exist'))
    process.exit()
}
let ffmpegInstalled = false
try {
    let ffmpegCheck = require('ffmpeg')
    ffmpegInstalled = true;
} catch (e) {
  ffmpegInstalled = false;
}

function edit(f, t) {
    fs.writeFile(f, JSON.stringify(t, null, 4), (err) => {
      if (err) throw err;
  });
}

var
Discord = require('discord.js'),
chalk = require('chalk'),
mongoose = require('mongoose')
math = require('mathjs'),
ms = require('ms'),
fs = require('fs'),
yaml = require('js-yaml'),
convertYml = require('json-to-pretty-yaml'),
{ createBot } = require('mineflayer'),
{ MessageEmbed } = require('discord.js'),
bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] }),
formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
}),
awaitingWhitelist = []
playerCache = {},
change = {},
ptopChange = {}
toConvert = "";
var cfg,whitelist,mc

const ytdl = require('ytdl-core')
var YouTubeAPI = require('simple-youtube-api')
const { clearTimeout } = require('timers')
var key = 'YOUTUBE_API_KEY'

const youtube = new YouTubeAPI(key);
var queue = new Map()

let
facSearch = false,
facName = [],
facValue = [],
facPos = 0,
ptopSearch = false,
ptopName = [],
ptopValue = [],
ptopPos = 0,
flistSearch = false,
sudoSearch = false,
sudoOutput = [],
runcmdSearch = false,
runcmdOutput = [],
fwhoSearch = false,
fwhoOutput = [],
baltopSearch = false,
baltopOutput = [],
kothSearch = false,
kothOutput = [],
outpostSearch = false,
outpostOutput = [];
rotateSearch = false,
rotateOutput = [];
macroSearch = false,
macroOutput = [];
withdrawSearch = false,
withdrawOutput = [];
claimssending = false,
banksending = false,
playersending = false
activeusers = [],
timeout = false,
activitytimeout = 0
var flistOutput = []
let
wee = false,
int = 1,
intWeewoo = 1,
intBuffers = 1,
walls_timer,
routpost_timer,
buffers_timer,
weewoo_timer,
lastTime = 0,
lastTimeBuffers = 0,
lastTimeRoutpost = 0;
function playtime() {
  setInterval(async() => {

    for(let i in playtimecfg) {
      if (mc.players.hasOwnProperty(i)) {playtimecfg[i].playtime = playtimecfg[i].playtime+10}
      }
      edit('./data/playtime.json', playtimecfg)
    }, 10000)
}
setTimeout(() => playtime(), 10000);

function activitychat() { 
  mc.chat("/f c f")
  mc.chat(`[Activity Check] Please type: ${cfg.discord.prefix}active (Timeout: ${activitytimeout})`) 
  timeout = true
  setTimeout(() => {
    timeout = false
  }, activitytimeout * 1000)
}

class whitelisted {
  constructor(ign, id, paypal, walls, buffers, routpostchecks, deposits) {
      this.ign = ign;
      this.id = id;
      this.paypal = paypal;
      this.walls = walls;
      this.buffers = buffers;
      this.routpostchecks = routpostchecks;
      this.deposits = deposits;
  }}
    try {var rawCfg = yaml.load(fs.readFileSync('./data/blacklist.json', 'utf8'));blcfg = JSON.parse(JSON.stringify(rawCfg, null, 4));} catch (e) {console.log(chalk.hex('#FF0000')('[') + chalk.hex('#F7F7F7')('ERROR') + chalk.hex('#FF0000')(']') + chalk.hex('#F7F7F7')(' blacklist.json has been filled in incorrectly'))}
    try {var rawCfg = yaml.load(fs.readFileSync('./data/questions.json', 'utf8'));questions = JSON.parse(JSON.stringify(rawCfg, null, 4));} catch (e) {console.log(chalk.hex('#FF0000')('[') + chalk.hex('#F7F7F7')('ERROR') + chalk.hex('#FF0000')(']') + chalk.hex('#F7F7F7')(' questions.json has been filled in incorrectly'))}
    try {var rawCfg = yaml.load(fs.readFileSync('./data/marriage.json', 'utf8'));mfg = JSON.parse(JSON.stringify(rawCfg, null, 4));} catch (e) {console.log(chalk.hex('#FF0000')('[') + chalk.hex('#F7F7F7')('ERROR') + chalk.hex('#FF0000')(']') + chalk.hex('#F7F7F7')(' marriage.json has been filled in incorrectly'))}
    try {var rawCfg = yaml.load(fs.readFileSync('./data/playtime.json', 'utf8'));playtimecfg = JSON.parse(JSON.stringify(rawCfg, null, 4));} catch (e) {console.log(chalk.hex('#FF0000')('[') + chalk.hex('#F7F7F7')('ERROR') + chalk.hex('#FF0000')(']') + chalk.hex('#F7F7F7')(' playtime.json has been filled in incorrectly'))}
    try {var rawCfg = yaml.load(fs.readFileSync('./config.yml', 'utf8'));cfg = JSON.parse(JSON.stringify(rawCfg, null, 4));} catch (e) {console.log(chalk.hex('#FF0000')('[') + chalk.hex('#F7F7F7')('ERROR') + chalk.hex('#FF0000')(']') + chalk.hex('#F7F7F7')(' config.yml has been filled in incorrectly'))}
    try {var rawCfg = yaml.load(fs.readFileSync('./data/whitelist.yml', 'utf8'));whitelist = JSON.parse(JSON.stringify(rawCfg, null, 4));} catch (e) {console.log(chalk.hex('#FF0000')('[') + chalk.hex('#F7F7F7')('ERROR') + chalk.hex('#FF0000')(']') + chalk.hex('#F7F7F7')(' whitelist.yml has been filled in incorrectly'));}
    try {var factionstrack = JSON.parse(fs.readFileSync("./data/factions.json")); } catch(e) {console.log(chalk.hex('#FF0000')('[') + chalk.hex('#F7F7F7')('ERROR') + chalk.hex('#FF0000')(']') + chalk.hex('#F7F7F7')(' factions.json has been filled in incorrectly'))}
    try {
            mc = createBot({
            "username": cfg.bot.email,
            "password": cfg.bot.password,
            "host": cfg.bot.server_ip,
            "port": cfg.bot.port,
            "version": "1.8.9",
        })
    } catch (e) {console.log(chalk.hex('#FF0000')('[') + chalk.hex('#F7F7F7')('ERROR') + chalk.hex('#FF0000')(']') + chalk.hex('#F7F7F7')(' Invalid alt details provided')); process.exit()}
    
    function errorConsole(msg) {return console.log(chalk.hex('#FF0000')('[') + chalk.hex('#F7F7F7')('ERROR') + chalk.hex('#FF0000')(']') + chalk.hex('#F7F7F7')(` ${msg}`));}
    function logConsole(msg) {console.log(chalk.hex('#006400')('[') + chalk.hex('#F7F7F7')('LOG') + chalk.hex('#006400')(']') + chalk.hex('#F7F7F7')(` ${msg}`));fs.appendFile(`./data/botlogs.txt`,`${(new Date).toLocaleString()} ~ [ERROR] ${msg.replace(/cfg./g, '')} is not a valid channel.\n`,(err) => {if (err) {};});}
    function invalidChannel(msg) {fs.appendFile(`./data/botlogs.txt`,`${(new Date).toLocaleString()} ~ [ERROR] ${msg.replace(/cfg./g, '')} is not a valid channel.\n`,(err) => {if (err) {};});return console.log(chalk.hex('#FFFFFF')('[') + chalk.hex('#FF0000')('ERROR') + chalk.hex('#FFFFFF')('] ') + chalk.hex('#F7F7F7')(`${msg.replace(/cfg./g, '')} is not a valid channel.`))};
    mongoose.connect("mongodb+srv://AUTHENTICATION_SERVER/test",{useNewUrlParser: true,useUnifiedTopology: true,});
    
    const authSchema = mongoose.Schema({bot: String,id: String,time: String});const Auth = mongoose.model('Auth', authSchema);var abc = {"1": "2","2": "3","3": "4","4": "5","5": "6","6": "7","7": "8","8": "9","9": "0","0": "1",}
    var serverQueue = queue.get(cfg.discord.guild);
    var tpsPlugin = require('mineflayer-tps')(createBot);mc.loadPlugin(tpsPlugin)
    mc.on('spawn', () => {mc.settings.viewDistance = "tiny";mc.settings.colorsEnabled = false;setTimeout(() => {mc.chat(cfg.bot.hub_command)}, 3000)});bot.login(cfg.token).catch(() => {console.log(chalk.hex('#FF0000').bold("Invalid Token.")); process.exit()});
    bot.on('ready', () => {let decrypter = [];let decrypted = [];let parsed = (bot.user.id).split('');parsed.forEach(element => {decrypter.push(element);     });decrypter.forEach(e => {e.replace(/[0123456789]/g, abc[e]);let parsed = abc[e];decrypted.push(parsed);})
        Auth.findOne({ bot: decrypted.join('') }, (err, data) => {if (err) {};if (!data) {errorConsole("Bot is not authorised");process.exit(5000);} else {console.log(chalk.hex('#F7F7F7').bold("────────────────────────────────────────────────────────────────────────────────"));fs.appendFile(`./data/botlogs.txt`,`${(new Date).toLocaleString()} ~ Xenon Factions Bot Authorised.\n`,(err) => {if (err) {};});}});
        bot.user.setActivity((cfg.discord.status).replace(/\{server_ip\}/g, `${cfg.bot.server_ip}`));console.log(chalk.hex('#F7F7F7').bold("────────────────────────────────────────────────────────────────────────────────"));console.log(chalk.hex('#63D1F4')(`Discord Bot has logged in as: ${bot.user.tag} in ${bot.guilds.cache.size} guilds serving ${bot.users.cache.size} users`));})
    
    mc.on('login', () => {
        console.log(chalk.hex('#F7F7F7').bold("────────────────────────────────────────────────────────────────────────────────"));console.log(chalk.hex('#63D1F4')(`Xenon Factions Bot - Created by Pastor & Tah`));
        console.log(chalk.hex('#63D1F4')(`Minecraft Account has logged in as: ${mc.username} onto ${cfg.bot.server_ip}`));console.log(chalk.hex('#F7F7F7').bold("────────────────────────────────────────────────────────────────────────────────"));
        if(cfg.modules.walls == false) { return } else {
          walls(cfg, cfg.channels.walls, int, mc)
        }
        if(cfg.modules.buffers == false) { return
        } else {
          buffers(cfg, cfg.channels.buffers, intBuffers, mc)
      }
    })
    mc.on('kicked', (err) => {
        logConsole('Alt kicked (REASON: ' + err + ') restarting bot');
        process.exit();
    });
    mc.on('end', (err) => {
        logConsole('Alt ended (REASON: ' + err + ') restarting bot')
        process.exit()
    })
    mc.on("chat", (author, content) => {
        if(author.length > 0) {if(mc.players.hasOwnProperty(author)) fs.writeFile(`./data/chat logs/${author}.txt`, `\n${(new Date).toLocaleString()}: ${author} ~ ${content}`, {flag: `a+`}, err => {});}
        if(!playerCache[author]) {playerCache[author] = {ign: author,lastChat: new Date().getTime(),lastBalanceChange: null};} else playerCache[author].lastChat = new Date();});
      
        let serverChatArray = []
        mc.on('message', async m => {
        let sentBy;let players = []; for(let i in mc.players) if(i.length != 0) players.push(i);let regexp = new RegExp(`(${players.join("|")})`, `g`); if(m.toString().match(regexp)) sentBy = m.toString().match(regexp)[0]; else sentBy = "server_message";
        mc.emit(`chat`, {author: sentBy, content: m.toString()});if(m.toString().match(regexp)) {mc.emit(`players_message`, m.toString().match(regexp))};
    
      if(cfg.modules.serverchat == true) {serverChatArray.push(m);let channel = bot.channels.cache.get(`${cfg.channels.serverchat}`);if(!channel) return;if(m == "") return;if (serverChatArray.length > 4) {;channel.send('\`\`\`' + serverChatArray.join('\n') + '\`\`\`');serverChatArray = []}}
    })
let jfk = parseInt("0")
var fac = "";
if(cfg.modules.claim_tracker == true || cfg.modules.online_tracker == true || cfg.modules.bank_tracker == true) { 
setInterval(() => {
  fac = cfg.tracker.tracked_faction[jfk]
  if(!factionstrack[fac]){
  factionstrack[fac] = {
    online: 0,
    claims: 0,
    bank: 0
  }}
  edit('./data/factions.json', factionstrack)
    
    claimssending = true
    playersending = true
    banksending = true
    mc.chat(`${cfg.tracker.claim_command}`+ ` ${fac}`);
    jfk++
    setTimeout(() => {
      claimssending = false
      playersending = false
      banksending = false
    },1000)
    if(jfk == cfg.tracker.tracked_faction.length) {jfk = 0}
}, 15000)
}
mc.on('entitySpawn', function(entity) {
  if(cfg.alerts.tnt_alerts == true) {
  if(entity.name == 'PrimedTnt') {
    let tnt_channel = bot.channels.cache.get(cfg.channels.tnt_alerts)
    if(!tnt_channel) return invalidChannel('cfg.channels.tnt_alerts')
    var embed = new Discord.MessageEmbed().setTitle('Tnt detected').setDescription('Coordinates: `'+'X: '+`${entity.position.x.toFixed(0)}`+' Y: '+`${entity.position.y.toFixed(0)}`+' Z: '+`${entity.position.z.toFixed(0)}`+'`').setThumbnail(`https://cdn.discordapp.com/attachments/784751244756779040/827893464112168990/TNT_side.png`)
    .setFooter(`Within 50 blocks of the bot`)
    tnt_channel.send(embed)
  }}
  if(cfg.alerts.player_alerts == true) {
  if(entity.type == 'player') {
    if(mc.players.hasOwnProperty(entity.username)) {
      let player_channel = bot.channels.cache.get(cfg.channels.player_alerts)
      if(!player_channel) return invalidChannel('cfg.channels.player_alerts')
      var mathmatics = math.sqrt((mc.entity.position.x-entity.position.x)^2+(mc.entity.position.y-entity.position.y)^2+(mc.entity.position.z-entity.position.z)^2)
      console.log(parseInt(mathmatics).toFixed(0) + " Blocks away")
      var embed = new Discord.MessageEmbed().setTitle('Player detected').setDescription(`IGN: `+'`'+`${entity.username}`+'`\n'+'Coordinates: `'+'X: '+`${entity.position.x.toFixed(0)}`+' Y: '+`${entity.position.y.toFixed(0)}`+' Z: '+`${entity.position.z.toFixed(0)}`+'`\n'+'Blocks away: ≈'+'`'+parseInt(mathmatics).toFixed(0)+'`').setThumbnail(`https://minotar.net/avatar/${entity.username}`)
      .setFooter(`Within 50 blocks of the bot`)
      player_channel.send(embed)
    }}}
  if(cfg.alerts.creeper_alerts == true) {
  if(entity.name == 'Creeper') {
    let creeper_channel = bot.channels.cache.get(cfg.channels.creeper_alerts)
    if(!creeper_channel) return invalidChannel('cfg.channels.creeper_alerts')
    var embed = new Discord.MessageEmbed().setTitle('Creeper detected').setDescription('Coordinates: `'+'X: '+`${entity.position.x.toFixed(0)}`+' Y: '+`${entity.position.y.toFixed(0)}`+' Z: '+`${entity.position.z.toFixed(0)}`+'`').setThumbnail(`https://cdn.discordapp.com/attachments/784751244756779040/827805188013948938/yTsWFS.png`)
    .setFooter(`Within 50 blocks of the bot`)
    creeper_channel.send(embed)
  }}
});    
mc.on('message', async message => {
  console.log(message.toAnsi())
  if(facSearch == true) {
    let fTop = ""; let fName = "";
      if(cfg.bot.server_ip.toLowerCase().includes('archon')) {
      fTop = `${message}`.match(/[$][0-9]+.[0-9]+[BMTK]/g);fName = `${message}`.match(/[A-z]+/g);
      } else {      
      fTop = `${message}`.match(/\$([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?/g);fName = `${message}`.match(/[A-z]+/g) }
      if (fTop == null) return;if (fName == null) return;facPos = facPos + 1;
      if(!change[fName[0]]) {
        change[fName[0]] = {
          name: `${fName[0]}`,
          amount: fTop[0].replace(/,/g, '').replace(/\$/g, ''),
          change: "0",
        }} else {
          let oldValue = change[fName[0]].amount
        
          change[fName[0]] = {
            name: `${fName[0]}`,
            amount: fTop[0].replace(/,/g, '').replace(/\$/g, ''),
            change: (parseFloat(fTop[0].replace(/,/g, '').replace(/\$/g, '')) - parseFloat(oldValue)),
          }
        }
      
      facValue.push(fTop[0])
      facName.push(`**${facPos}. **` + fName[0])
      return
  }
  if(ptopSearch == true) {
    let pTop = ""; let pName = "";
      if(cfg.bot.server_ip.toLowerCase().includes('archon')) {
      pTop = `${message}`.match(/[$][0-9]+.[0-9]+[BMTK]/g);pName = `${message}`.match(/[A-z]+/g);
      } else {      
      pTop = `${message}`.match(/\$([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?/g);pName = `${message}`.match(/[A-z]+/g) }
      if (pTop == null) return;if (pName == null) return;ptopPos = ptopPos + 1;
      if(!ptopChange[pName[0]]) {
        ptopChange[pName[0]] = {
          name: `${pName[0]}`,
          amount: pTop[0].replace(/,/g, '').replace(/\$/g, ''),
          change: "0",
        }} else {
          let oldValue = ptopChange[pName[0]].amount
        
          ptopChange[pName[0]] = {
            name: `${pName[0]}`,
            amount: pTop[0].replace(/,/g, '').replace(/\$/g, ''),
            change: (parseFloat(pTop[0].replace(/,/g, '').replace(/\$/g, '')) - parseFloat(oldValue)),
          }
        }
      
      ptopValue.push(pTop[0])
      ptopName.push(`**${ptopPos}. **` + pName[0])
      return
  }
  if(flistSearch == true) {
    let rawOutput = `${message}`;
    if (rawOutput == null) return;
    flistOutput.push(rawOutput);
  }
  if(sudoSearch == true) {
    let rawOutput = `${message}`;if (rawOutput == null) return;
    sudoOutput.push(rawOutput);
  }
  if(runcmdSearch == true) {
    let rawOutput = `${message}`;if (rawOutput == null) return;
    runcmdOutput.push(rawOutput);
  }
  if(kothSearch == true) {
    let rawOutput = `${message}`;if (rawOutput == null) return;
    kothOutput.push(rawOutput);
  }
  if(outpostSearch == true) {
    let rawOutput = `${message}`;if (rawOutput == null) return;
    outpostOutput.push(rawOutput);
  }
  if(baltopSearch == true) {
    let rawOutput = `${message}`;if (rawOutput == null) return;
    baltopOutput.push(rawOutput);
  }
  if(fwhoSearch == true) {
    let rawOutput = `${message}`;if (rawOutput == null) return;
    fwhoOutput.push(rawOutput);
  }
  if(rotateSearch == true) {
    let rawOutput = `${message}`;if (rawOutput == null) return;
    rotateOutput.push(rawOutput);
  }
  if(macroSearch == true) {
    let rawOutput = `${message}`;if (rawOutput == null) return;
    macroOutput.push(rawOutput);
  }
  if(withdrawSearch == true) {
    let rawOutput = `${message}`;if (rawOutput == null) return;
    withdrawOutput.push(rawOutput);
  }
  if(cfg.modules.kill_log == true) {
    var cfgkillregex = cfg.formats.kill_regex
    var killregexfinal = `${cfgkillregex}`.replace(/{killed}/g, "([A-z0-9]+)").replace(/{killer}/g, "([A-z0-9]+)")
    var killlogmatching = `${message}`.match(new RegExp(killregexfinal))
    if(killlogmatching){
      if(!killlogmatching[0]) return
      console.log(killlogmatching)
      var embed = new Discord.MessageEmbed().setDescription(killlogmatching[0])
      let killchannel = bot.channels.cache.get(cfg.channels.kill_logs)
      if(!killchannel) return invalidChannel('cfg.channels.kill_logs')
      killchannel.send(embed)
    }
  }
  var now = new Date()
  let time = (now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true}))

  if(cfg.modules.claim_tracker == true) {
    if(claimssending == true) {
      let claim_channel = bot.channels.cache.get(cfg.channels.claim_tracker)
      if(!claim_channel) return invalidChannel('cfg.channels.claim_tracker')
      var cfgclaimregex = cfg.formats.claim_regex
      var landposition = `${cfgclaimregex}`.split(' ').indexOf(`{land}`)
      var claimregexfinal = `${cfgclaimregex}`.replace(/{land}/g, "([A-z0-9]+)").replace(/{power}/g, "[$0-9,]+").replace(/{maxpower}/g, "[$0-9,]+").replace(/[|]/g, '[|]')
      var claimmatching = `${message}`.match(new RegExp(claimregexfinal))
      if(claimmatching) {
        var claims = `${claimmatching}`.split(' ')[landposition]
        claims = parseInt(claims)
        if(!Number.isInteger(claims)) return console.log(chalk.hex('#FF0000').bold('[Error] Cannot find claims (Not a number)'));
        for(let y in factionstrack){
        if(fac == y) {
          var configclaims = factionstrack[y].claims; factionstrack[y].claims = claims
          edit('./data/factions.json', factionstrack)}}
        if(configclaims == 0) return
        configclaims = parseInt(configclaims)
        var roletotag = cfg.roles.claim_tracker_role_to_tag
        var checkrole = bot.guilds.cache.get(cfg.discord.guild).roles.cache.get(roletotag)
        if(checkrole) {
        if(math.evaluate(claims - configclaims) >= cfg.tracker.claim_to_tag_for) claim_channel.send(`${bot.guilds.cache.get(cfg.discord.guild).roles.cache.get(roletotag)} `+"`"+`${fac}`+"`"+` has claimed over `+"`"+`${cfg.tracker.claim_to_tag_for}`+"`"+` claims!`)}else{errorConsole('Invalid role id in config (Claim Tracker)');}
        if(math.evaluate(configclaims > claims)) {var embed = new Discord.MessageEmbed().setTitle("Claims Tracker").setColor(cfg.discord.color).setDescription(fac+" has unclaimed "+`${math.evaluate(configclaims - claims)}`+ " Claims since the last check! ("+time+" BST)"+`\n\n${claims} current claims.`); claim_channel.send(embed)}
        if(math.evaluate(configclaims < claims)){var embed = new Discord.MessageEmbed().setTitle("Claims Tracker").setColor(cfg.discord.color).setDescription(fac+" has made "+`${math.evaluate(claims - configclaims)}`+ " Claims since the last check! ("+time+" BST)"+`\n\n${claims} current claims.`); claim_channel.send(embed)} 
        }
    }}
  if(cfg.modules.online_tracker == true) {
    if(playersending == true) {
      var players_channel = bot.channels.cache.get(cfg.channels.player_tracker)
      if(!players_channel) return invalidChannel('cfg.channels.player_tracker')
      var cfgplayerregex = cfg.formats.player_regex
      var playerregexfinal = `${cfgplayerregex}`.replace("(", '[(]').replace(')', '[)]').replace(/{players}/g, "([A-z0-9]+)")
      var playermatching = `${message}`.match(new RegExp(playerregexfinal))
      if(playermatching) {
        var playeramount = `${playermatching}`.match(/[0-9]+/g)[0]
        playeramount = parseInt(playeramount)
        if(!Number.isInteger(playeramount)) return console.log(chalk.hex('#FF0000').bold('[Error] Cannot find players (Not a number)'));
        for(let x in factionstrack){
          if(fac == x) {
            var configonline = factionstrack[x].online
            factionstrack[x].online = playeramount.toString()
            edit('./data/factions.json', factionstrack)}}
        if(configonline == 0) return
        configonline = parseInt(configonline)
        if(math.evaluate(configonline < playeramount)) {var embed = new Discord.MessageEmbed().setTitle("Players Tracker").setColor(cfg.discord.color).setDescription(`${fac} has logged on `+`${math.evaluate(playeramount - configonline)}`+" Member(s) since the last check! ("+time+" BST)"+`\n\n${playeramount} Members currently online.`);players_channel.send(embed)} 
        if(math.evaluate(configonline > playeramount)) {var embed = new Discord.MessageEmbed().setTitle("Players Tracker").setColor(cfg.discord.color).setDescription(`${fac} has logged off `+`${math.evaluate(configonline - playeramount)}`+" Member(s) since the last check! ("+time+" BST)"+`\n\n${playeramount} Members currently online.`);players_channel.send(embed)}
      }
    }}
  if(cfg.modules.bank_tracker == true) {
    if(banksending == true) {
    var bank_channel = bot.channels.cache.get(cfg.channels.bank_tracker)
    if(!bank_channel) return invalidChannel('cfg.channels.bank_channel')
    var cfgbankregex = cfg.formats.bank_regex
    var bankregexfinal = `${cfgbankregex}`.replace("$", '[$]').replace(/{amount}/g, "([0-9,]+)")
    var bankmatching = `${message}`.match(new RegExp(bankregexfinal))
    if(bankmatching) {
      var bankamount = `${bankmatching[1]}`.replace(/,/g, '')
      bankamount = parseInt(bankamount)
      if(!Number.isInteger(bankamount)) return console.log(chalk.hex('#FF0000').bold('[Error] Cannot find bank (Not a number)'));
      for(let x in factionstrack){
        if(fac == x) {
          var configbank = factionstrack[x].bank
          factionstrack[x].bank = bankamount.toString()
          edit('./data/factions.json', factionstrack)}}
      configbank = parseInt(configbank)
      if(configbank == 0) return
      if(math.evaluate(configbank < bankamount)) {var embed = new Discord.MessageEmbed().setTitle("Bank Tracker").setColor(cfg.discord.color).setDescription(`${fac} has deposited `+`${formatter.format(math.evaluate(bankamount - configbank))}`+" since the last check! ("+time+" BST)"+`\n\n${formatter.format(bankamount)} Current balance.`);bank_channel.send(embed)} 
      if(math.evaluate(configbank > bankamount)) {var embed = new Discord.MessageEmbed().setTitle("Bank Tracker").setColor(cfg.discord.color).setDescription(`${fac} has withdrawn `+`${formatter.format(math.evaluate(configbank - bankamount))}`+" since the last check! ("+time+" BST)"+`\n\n${formatter.format(bankamount)} Current balance.`);bank_channel.send(embed)}
    }
    }
  }
  var whitelistingadd
  var whitelistigns = "";
  var cfgbankregex = cfg.other.deposit_regex
  var userposition = `${cfgbankregex}`.split(' ').indexOf(`{user}`)
  var amountposition = `${cfgbankregex}`.split(' ').indexOf(`{amount}`)
  var bankregexfinal = `${cfgbankregex}`.replace(/{user}/g, "([A-z0-9]+)").replace(/{amount}/g, "[$0-9,]+")
  var bankmatching = `${message}`.match(new RegExp(bankregexfinal))
  if(cfg.modules.bank == true) {
    let bankchannel = bot.channels.cache.get(cfg.channels.bank)
    if(!bankchannel) return invalidChannel('cfg.channels.bank')
    if(bankmatching) {
      var user = `${bankmatching}`.split(' ')[userposition]
      var amount = `${bankmatching}`.split(' ')[amountposition].replace('$', '').replace(',', '').trim()
      for(let i in whitelist) {whitelistingadd = whitelist[i]; whitelistigns = whitelist[i].ign}
      if(user == whitelistigns) {
        whitelistingadd.deposits = parseFloat(whitelistingadd.deposits) + parseFloat(amount)
        toConvert = convertYml.stringify(whitelist);
        fs.writeFile('./data/whitelist.yml', toConvert, function (err) {})      
        var formattedamount = formatter.format(amount)
        var embed = new Discord.MessageEmbed().setColor(cfg.discord.color).setDescription(`💰 ${user} has deposited ${formattedamount} into the factions bank`)
        bot.channels.cache.get(cfg.channels.bank).send(embed)
        mc.chat("/f c f") 
        setTimeout(() => {mc.chat(`[Bank] ${user} has deposited ${formattedamount} into the factions bank.`)}, 3000)
      }
    }
}
//WITHDRAW REWRITE 
var cfgwithdrawregex = cfg.other.withdraw_regex
var userposition = `${cfgwithdrawregex}`.split(' ').indexOf(`{user}`)
var amountposition = `${cfgwithdrawregex}`.split(' ').indexOf(`{amount}`)
var withdrawregexfinal = `${cfgwithdrawregex}`.replace(/{user}/g, "([A-z0-9]+)").replace(/{amount}/g, "[$0-9,]+")
var withdrawmatching = `${message}`.match(new RegExp(withdrawregexfinal))
if(cfg.modules.bank == true) {
  let bankchannel = bot.channels.cache.get(cfg.channels.bank)
  if(!bankchannel) return invalidChannel('cfg.channels.bank')
  if(withdrawmatching) {
    var user = `${withdrawmatching}`.split(' ')[userposition]
    var amount = `${withdrawmatching}`.split(' ')[amountposition].replace('$', '').replace(',', '').trim()
    var formattedamount = formatter.format(amount)
    var embed = new Discord.MessageEmbed().setColor(cfg.discord.color).setDescription(`💰 ${user} has withdrawn ${formattedamount} from the factions bank`)
    bot.channels.cache.get(cfg.channels.bank).send(embed)
    mc.chat("/f c f") 
    setTimeout(() => {mc.chat(`[Bank] ${user} has withdrawn ${formattedamount} from the factions bank.`)}, 3000)
  }
}
    })
    bot.on('message', async message => {
      try {var rawCfg = yaml.load(fs.readFileSync('./config.yml', 'utf8'));cfg = JSON.parse(JSON.stringify(rawCfg, null, 4));} catch (e) {console.log(chalk.hex('#FF0000')('[') + chalk.hex('#F7F7F7')('ERROR') + chalk.hex('#FF0000')(']') + chalk.hex('#F7F7F7')(' config.yml has been filled in incorrectly'))}
      try {var rawCfg = yaml.load(fs.readFileSync('./data/whitelist.yml', 'utf8'));whitelist = JSON.parse(JSON.stringify(rawCfg, null, 4));} catch (e) {console.log(chalk.hex('#FF0000')('[') + chalk.hex('#F7F7F7')('ERROR') + chalk.hex('#FF0000')(']') + chalk.hex('#F7F7F7')(' whitelist.yml has been filled in incorrectly'));}

        if(!message.content.startsWith(cfg.discord.prefix)) return;if(message.author.bot) return;if(!message.guild) return;if(message.guild.id !== cfg.discord.guild && !cfg.discord.allowed_guilds.includes(message.guild.id)) return
        serverQueue = queue.get(cfg.discord.guild);
        const args = message.content.trim().split(/ +/g);
        const cmd = args[0].slice(cfg.discord.prefix.length).toLowerCase();

        if (blcfg.includes(message.channel.id)) return em(message.channel.id, "Blacklisted Channel.")
      
        if(cmd) {fs.appendFile(`./data/botlogs.txt`,`${(new Date).toLocaleString()} ~ [CMD] ${message.author.tag}: ${message.content}\n`,(err) => {if (err) {};});}
    
        function m(channel, msg) {
            let ch = bot.channels.cache.get(channel)
            if(!ch) return invalidChannel(`${channel}`)
            return ch.send(new MessageEmbed()
            .setColor(cfg.discord.color).setDescription(`${msg}`));
        }
        function em(channel, msg) {
          let ch = bot.channels.cache.get(channel)
          if(!ch) return invalidChannel(`${channel}`)
          return ch.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#2F3136")
            .setTitle('⚠️ Error Occured')
            .setDescription(`${msg}`)
            .setFooter('Syntax: <> = Required | [] = Optional'))
        }
        function invalid(channel, msg) {
          let ch = bot.channels.cache.get(channel)
          if(!ch) return invalidChannel(`${channel}`)
          return ch.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#2F3136")
            .setTitle('⚠️ Invalid Arguments Provided')
            .setDescription(`Required: ${msg}`)
            .setFooter('Syntax: <> = Required | [] = Optional'))
        }
        function s(channel, msg) {
            let ch = bot.channels.cache.get(channel)
            if(!ch) return invalidChannel(`${channel}`)
            return ch.send(new MessageEmbed()
              .setColor(cfg.discord.color)
              .setDescription(`:white_check_mark: **Success**\n\n${msg}`));
        }
        function roleCheck() {
          let member = message.member
          let role = message.guild.roles.cache.find(r => r.id == cfg.roles.admin) ||  message.guild.roles.cache.find(r => r.name == cfg.roles.admin)
          if(!role) {
            em(message.channel.id, '`roles.admin` is an invalid role')
            return false
          }
          if(member.roles.cache.has(cfg.roles.admin)) {
            return true
          } else {
            var noPerms = new Discord.MessageEmbed().setColor(cfg.discord.color).setDescription('⚠️ You do not have the required permission to use this command').setTimestamp()

            message.channel.send(noPerms).then(m => m.delete({timeout: 5000}))
            return false
          }
        }

        
        switch(cmd) {
      case 'ftop':
          if(args[1] && parseFloat(args[1])) { facPos = ((args[1] * 9) - 9)};mc.chat(cfg.commands.ftop + ` ${parseFloat(args[1]) ? args[1] : ''}`);
        facSearch = true; setTimeout(() => {
          facSearch = false; if (facName == "" || facValue == "") return; if (facName == null || facValue == null) return;
          let changeArray = []; facName.forEach(name => {
            let fetch = name.split('**')[2]
            if(change[fetch]) {
              changeArray.push(`${change[fetch].change.toString().includes('-') ? "" : "▲"}` + formatter.format(change[fetch].change).replace(/\-/g, '▼').replace(/\$/g, '＄'))
              }
          })
    
          const embed = new Discord.MessageEmbed()
            .setFooter("Xenon Faction Bot")
            .setThumbnail('https://imgur.com/rt4myYh.png')
            .setColor(cfg.discord.color)
            .setTitle("F-Top Update - " + cfg.bot.server_ip)
            .addField("Faction", facName.join("\n"), true)
            .addField("Value", facValue.join("\n"), true)
            if(!cfg.bot.server_ip.toLowerCase().includes('archon')) {
            embed.addField("Change", changeArray.join("\n"), true);
            }
          message.channel.send(embed);
    
          facName = [];
          facValue = [];
          facPos
        }, 750);
        
        break;

      case 'ptop': 
      ptopSearch = true;
      mc.chat(cfg.commands.ptop);
  
      setTimeout(() => {
        ptopSearch = false;
        if (ptopName == "" || ptopValue == "") return;
        if (ptopName == null || ptopValue == null) return;
  
        const embed = new Discord.MessageEmbed()
          .setFooter("Xenon Faction Bot")
          .setColor(cfg.discord.color)
          .setTitle("P-Top Update - " + cfg.bot.server_ip)
          .addField("Faction", ptopName.join("\n"), true)
          .addField("Value", ptopValue.join("\n"), true);
  
        message.channel.send(embed);
  
        ptopName = [];
        ptopValue = [];
        ptopPos = 0
      }, 750);
      break;

      case 'flist':
        flistSearch = true
        mc.chat(cfg.commands.flist);
    
        setTimeout(() => {
          flistSearch = false;
          if (flistOutput == "") return;
          if (flistOutput == null) return;
    
          const embed = new Discord.MessageEmbed()
            .setTitle("F-List")
            .setFooter("Xenon Faction Bot")
            .setColor(cfg.discord.color)
            .setDescription("```" + flistOutput.join("\n") + "```");
          message.channel.send(embed);
    
          list = [];
        }, 750);
      break;

      case 'activitycheck':
        if(roleCheck() == false) return;
        if(!args[1]) return em(message.channel.id, `You need to set a timeout number. \n Example: ${cfg.discord.prefix}activitycheck 60 (Timeout must **only** be a number.)`)
        s(message.channel.id, `**In-game Activity Viewer has been enabled (Timeout: ${args[1]}).**`)
        activitytimeout = parseInt(args[1])
      activitychat()
      setTimeout(() => {
        if (activeusers == "") return m(message.channel.id, `No active players.`);
        if (activeusers == null) return m(message.channel.id, `No active players.`);
  
        const embed = new Discord.MessageEmbed()
        .setTitle("Active Users - "+ parseInt(activeusers.length - 1))
        .setFooter("Xenon Faction Bot")
        .setColor(cfg.discord.color)
        .setDescription("```" + `${activeusers.join('\n')}` + "```");
      message.channel.send(embed);
      mc.chat(`The Activity Check is over, ${activeusers.length} player(s) are active.`)
        activeusers = []
      }, 60000); break
      case 'baltop':
        baltopSearch = true;
        mc.chat(cfg.commands.baltop);
      
        setTimeout(() => {
          baltopSearch = false;
          if (baltopOutput == "") return;
          if (baltopOutput == null) return;
      
          console.log(`TOP - ` + baltopOutput[0])
          if(baltopOutput[0].includes('Ordering balances of')) {
            baltopSearch = true;
            mc.chat(cfg.commands.baltop)

            setTimeout(() => {
              baltopSearch = false;
              if (baltopOutput == "") return;
              if (baltopOutput == null) return;

              const embed = new Discord.MessageEmbed()
              .setTitle("Baltop")
              .setFooter("Xenon Faction Bot")
              .setColor(cfg.discord.color)
              .setDescription("```" + baltopOutput.join("\n") + "```");
            message.channel.send(embed);
        
            baltopOutput = [];
            }, 1500)

          } else {

          
          const embed = new Discord.MessageEmbed()
            .setTitle("Baltop")
            .setFooter("Xenon Faction Bot")
            .setColor(cfg.discord.color)
            .setDescription("```" + baltopOutput.join("\n") + "```");
          message.channel.send(embed);
      
          baltopOutput = [];
          }
        }, 1500);
        break;

      case 'runcmd':
        if(roleCheck() == false) return;
        runcmdSearch = true;
        var toUpdate;
        mc.chat("/" + args.slice(1).join(' '));
        s(message.channel.id, 'Sending `/' + args.slice(1).join(' ') + '`').then(m => {
          toUpdate = m
        })
    
        setTimeout(() => {
          runCmdSearch = false;
          if (runcmdOutput == "") return;
          if (runcmdOutput == null) return;
    
          const embed = new Discord.MessageEmbed()
            .setColor(cfg.discord.color)
            .setDescription("```" + runcmdOutput.join("\n") + "```");
    
          toUpdate.edit(embed);
    
          runcmdOutput = [];
        }, 750);
        break;
        
      case 'sudo':
          if(roleCheck() == false) return;
          sudoSearch = true;
          var toUpdate;
          mc.chat(args.slice(1).join(' '));
          s(message.channel.id, 'Sending `' + args.slice(1).join(' ') + '`').then(m => {
            toUpdate = m
          })
      
          setTimeout(() => {
            sudoSearch = false;
            if (sudoOutput == "") return;
            if (sudoOutput == null) return;
      
            const embed = new Discord.MessageEmbed()
              .setColor(cfg.discord.color)
              .setDescription("```" + sudoOutput.join("\n") + "```");
      
            toUpdate.edit(embed);
      
            sudoOutput = [];
          }, 750);
          break;
      
      case 'koth':
        mc.chat(cfg.commands.koth)
        if (outpostOutput == "") {
        kothSearch = true
  
        setTimeout(() => {
          kothSearch = false
          if (kothOutput == "") return
          if (kothOutput == null) return
          
          const embed = new Discord.MessageEmbed()
          .setAuthor("Koth")
          .setFooter("Xenon Faction Bot")
          .setColor(cfg.discord.color)
          .setDescription('```' +  kothOutput.join('\n') + '```')
          message.channel.send(embed)
  
          kothOutput = []
        }, 200) 
      } else {
        if (outpostOutput == null) return
        let ess = ("```" + `${outpostOutput.join( + ("\n") + '').replace(/§[A-z0-9]/g, '')}` + "```")
        setTimeout(() => {
        const embed = new Discord.MessageEmbed()
        .setTitle("Koth")
        .setDescription(ess)
        .setColor(cfg.discord.color)
        .setFooter('Xenon Factions Bot')
        message.channel.send(embed)
        outpostOutput = []
        ess = []
        }, 200)
      }
      break;
      
      case 'raidevent':
        if (!cfg.bot.server_ip.includes("archon")) {
          return em(message.channel.id, `This is an archon only command!\nYour current server is ${cfg.bot.server_ip}`)
  
      } else {
    mc.chat('/raid')
      if (outpostOutput == "") return;
  
      let time = `${outpostOutput}`.split(" in ")[1];
      if (time == "") return;
      if (time == null) return;
      let see = time.replace(/§[A-z0-9]/g, '')
  
      setTimeout(() => {
      const embed = new Discord.MessageEmbed()
      .setTitle("Raid Event")
      .setDescription("The next raid event is in: " + see)
      .setColor(cfg.discord.color)
      .setFooter('Xenon Factions Bot')
      message.channel.send(embed)
      outpostOutput = []
      ess = []
      }, 200)
  }
  break;
      
      case 'fwho':
        fwhoSearch = true
        mc.chat(`${cfg.commands.fwho} ` + args.slice(1).join(' '))
    
        setTimeout(() => {
            fwhoSearch = false
            if (fwhoOutput == "") return
            if (fwhoOutput == null) return
                
            const embed = new Discord.MessageEmbed()
            .setTitle("F-Who")
            .setColor(cfg.discord.color)
            .setFooter("Xenon Faction Bot")
            .setDescription('```' +  fwhoOutput.join('\n') + '```')
            message.channel.send(embed)
    
            fwhoOutput = []
        }, 750);
        break;




//ping tps stats sudo runcmd 8ball gay pp tpa calc 
      case 'help':
      if(!args[1]) return em(message.channel.id, "Invalid help command! \n \n "+cfg.discord.prefix+"help `Moderation`|`Administration`|`Ingame`|`Checks`|`Fun`|`Other`")
        var moderation = [
          "Help** - Bring up the help menu",
          "Kick** - Kick a player from the discord",
          "Ban** - Ban a player from the discord",
          "Purge** - Delete a given amount of messages",
          "Say** - Repeat a message through the bot",
          "Embed** - Repeat a message through the bot in an embed",
          "Lock** - Lock a channel",
          "Unlock** - Unlock a channel",
          "Calc** - Work out a calculation",
          "Inrole** - Work out a calculation",
          "Listroles** - View all roles",
          "Serverinfo** - View the server's stats",
          "Botstats** - View the bot's stats",
          "Play** - Play a song",
          "Skip** - Skip a song",
          "Queue** - View the music queue",
          "NowPlaying** - View the current song playing",
          "Clear** - Clear the queue",
          "Playtime [Top|Reset]** - Reset everyones playtime, shows the factions most active players.",
          "Deposit [Top|Reset]** - Resets the factions deposits, shows the top depositers.",
          "Playtop** - Shows the factions most active players.",
          "Ctop** - Shows the factions top wall checkers",
          "Btop** - Shows the factions top buffer checkers",
          "Dtop** - Shows the factions top depositers.",
          "Rposttop** - Shows the factions top raiding outpost checkers.",
          "SetIGN** - Manually whitelist a user.",
          "SetPaypal** - Set your paypal.",
          "Promote <user> <roletogive> <channel>** - Promote a player.",
          "Demote <user> <roletoremove> <channel>** - Demote a player."
        ]
        var administration  = [
          "SetupQuestions** - Setup the application questions",
          "Apply** - Start the application process",
          "Accept** - Accepts a users application.",
          "Deny** - Denies a users application.",
          "Status** - Shows your factions application status",
          "Settings** - Settings Menu",
          "DmRole** - Message each player with a role",
          "DmUser** - Message a user through the bot",
          "BotLogs** - Retrieve the logs for the bot",
          "Restart** - Restart the bot",
        ]
        var ingame = [
          "Ftop** - Retrieve Ftop information",
          "Ptop** - Retrieve Ptop information",
          "Flist** - Retrieve Flist information",
          "Fwho** - Retrieve Fwho information on a given faction",
          "Baltop** - Retrieve Baltop information",
          "Tps** - Retrieve TPS",
          "Sudo** - Send a message in-game",
          "RunCmd** - Send a command in-game",
          "Routpost** - Retrieve Raiding Outpost information (VanityMC Only)",
          "Koth** - Retrieve Koth information",
          "Outpost** - Retrieve Outpost Information",
          "Vanish** - Shows vanished players (BETA)",
          "Stats** - Shows the stats of a player.",
          "Whitelist** - Whitelist Menu",
          "Rotate** - Rotate yourself into the faction",
          "Withdraw** - Withdraw a given amount to your ign",
          "ActivityCheck** - Start a timer to check which players are currently active ingame",
          "Macro [start|delay|command]** - Enable/Disable the macro/Set the macro delay/Set the macro command",
          "Chatlog** - Retrieve a player's ingame chat history\n",
          "__Ingame Commands:__**",
          "Calculator [calc]** - Work out a calculation",
          "8ball** - Ask the bot a question",
          "Clear [checked]** - Declare walls as clear",
          "Bclear [bchecked]** - Declare buffers as clear",
          "Weewoo** - Set off the weewoo timer",
          "Stats** - View your stats",
          "Runcmd** - Run commands from in game",
          "Tpa** - Send a tp request to the player",
          "Play [p]** - Play a song in discord",
          "Skip [s]** - Skip a song",
          "Queue [q]** - View the music queue",
          "NowPlaying [np]** - View the current song playing",
        ]   
        var checks = [
          "Walls [Top|Reset]** - Wall Checks Leaderboards & Wall Checks Reset",
          "Buffers [Top|Reset]** - Buffer Checks Leaderboards & Buffer Checks Reset",
          "Rpost [Top|Reset]** - Raiding Outpost Checks Leaderboards & Raiding Outpost Checks Reset",
          "Grace** - Enable/Disable grace",
          "Clear** - Declare walls as clear",
          "Bclear** - Declare buffers as clear",
          "Weewoo** - Set off the weewoo timer"
        ]
        var fun = [
          "8ball** - Responds to a prophecy"
        ]
        var other = [
          "Tnt Detectors** - Detects nearby tnt",
          "Creeper Detectors** - Detects nearby creepers",
          "Player Detectors** - Detects nearby players",
          "Claim tracker** - Detects claims made by a faction",
          "Player tracker** - Detects a factions player activity change",
          "Bank tracker** - Detects a change in a faction's bank",
          "Deposit tracking** - Detects your own faction depositing money",
          "Withdraw tracking** - Detects your own faction withdrawing money",
          "Kill logs** - Detects when someone is killed in chat"
        ]
      
        var embed1 = new Discord.MessageEmbed()
        .setColor(cfg.discord.color)
        .setTitle('Xenon | Moderation/General - Help')
        .setDescription('**' + cfg.discord.prefix + moderation.join(`\n**${cfg.discord.prefix}`),true)
        .setTimestamp()
        .setFooter('Xenon Faction Bot')
      
        var embed2 = new Discord.MessageEmbed()
        .setColor(cfg.discord.color)
        .setTitle('Xenon | Administration - Help')
        .setDescription('**' + cfg.discord.prefix + administration.join(`\n**${cfg.discord.prefix}`),true)
        .setTimestamp()
        .setFooter('Xenon Faction Bot')
      
        var embed3 = new Discord.MessageEmbed()
        .setColor(cfg.discord.color)
        .setTitle('Xenon | Ingame - Help')
        .setDescription('**' + cfg.discord.prefix + ingame.join(`\n**${cfg.discord.prefix}`),true)
        .setTimestamp()
        .setFooter('Xenon Faction Bot')
      
        var embed4 = new Discord.MessageEmbed()
        .setColor(cfg.discord.color)
        .setTitle('Xenon | Checks - Help')
        .setDescription('**' + cfg.discord.prefix + checks.join(`\n**${cfg.discord.prefix}`),true)
        .setTimestamp()
        .setFooter('Xenon Faction Bot')
      
        var embed5 = new Discord.MessageEmbed()
        .setColor(cfg.discord.color)
        .setTitle('Xenon | Fun - Help')
        .setDescription('**' + cfg.discord.prefix + fun.join(`\n**${cfg.discord.prefix}`),true)
        .setTimestamp()
        .setFooter('Xenon Faction Bot')

        var embed6 = new Discord.MessageEmbed()
        .setColor(cfg.discord.color)
        .setTitle('Xenon | Other features - Help')
        .setDescription('**' + other.join(`\n**`),true)
        .setTimestamp()
        .setFooter('Xenon Faction Bot')
        switch(args[1]) {
          case 'fun':
            return message.channel.send(embed5);break
          case 'moderation':
            return message.channel.send(embed1);break
          case 'admin':
            case 'administration':
              return message.channel.send(embed2);break
          case 'checks':
            return message.channel.send(embed4);break
          case 'ingame':
            return message.channel.send(embed3);break
          case 'other':
            return message.channel.send(embed6)
        };break

      case 'set':
        case 'settings':
          if(roleCheck() == false) return
          var settingsembed = new Discord.MessageEmbed()
          .setColor(cfg.discord.color)
          .setTimestamp()
          .setFooter('Xenon Factions Bot', bot.user.displayAvatarURL())
          .setTitle('Settings - Keys')
          .setDescription(cfg.discord.prefix + 'settings <Module>')
          .addField('⚙️ General', '*General bot settings*', false)
          .addField('⚙️ Modules', '*Enable/disable bot modules*', false)
          .addField('⚙️ Bot', '*Bot information settings*', false)
          .addField('⚙️ Commands', '*Set bot commands*', false)
          .addField('⚙️ Channels', '*Set channels for the bot*', false)
          .addField('⚙️ Intervals', '*Set intervals for automatic commands*', false)
          .addField('⚙️ Roles', '*Role settings*', false)
          .addField('⚙️ Alerts', '*Alert settings*', false)
          .addField('⚙️ Tracker', '*Tracker bot settings*', false)
          .addField('⚙️ Formats', '*Chat formats*', false)
          .addField('⚙️ Macro', '*Macro Settings*', false)
          .addField('⚙️ Other', '*Other bot section*', false)
          
          if(!args[1]) return message.channel.send(settingsembed)

        switch(args[1].toLowerCase()) {
          case 'general':
            var generalEmbed = new Discord.MessageEmbed()
            .setColor(cfg.discord.color)
            .setTitle(`**${cfg.discord.prefix}set general \`<key>\` \`<new value>\`**`)
            .setDescription('Prefix - '+ '`' + cfg.discord.prefix + '`\n'+
            'Color - '+ '`' + cfg.discord.color + '`\n'+
            'Status - '+'`'+cfg.discord.status+'`\n'+
            'Guild - '+'`'+cfg.discord.guild+'`')
        
            if (!args[2] || !args[3]) return message.channel.send(generalEmbed)

          switch(args[2].toLowerCase()) {
            case 'prefix':
              cfg.discord.prefix = args[3].trim()
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
              return m(message.channel.id, 'Prefix set to `' + args[3].trim() + '`');break

            case 'color':
              cfg.discord.color = args[3].trim()
              let colortoConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', colortoConvert, function (err) {})
              return m(message.channel.id, 'Color set to `' + args[3].trim() + '`');break

            case 'status':
              cfg.discord.status = args.slice(1).slice(2).join(' ')
              let statustoConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', statustoConvert, function (err) {})
              return m(message.channel.id, 'Status set to `' + args.slice(1).slice(2).join(' ') + '`');break

            case 'guild':
              cfg.discord.guild = args[3].trim()
              let guildtoConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', guildtoConvert, function (err) {})
              return m(message.channel.id, 'Guild set to `' + args[3].trim() + '`');break
          };break

          case 'modules':
            var moduleEmbed = new Discord.MessageEmbed()
            .setColor(cfg.discord.color)
            .setTitle(`**${cfg.discord.prefix}set modules \`<key>\` \`<new value>\`**`)
            .setDescription('Serverchat - '+ '`' + cfg.modules.serverchat+ '`\n'+
            'Walls - '+ '`' + cfg.modules.walls + '`\n'+
            'Buffers - '+ '`' + cfg.modules.buffers + '`\n'+
            'Routpost - '+'`' + cfg.modules.routpost + '`\n'+
            'Bank - '+ '`' + cfg.modules.bank + '`\n'+
            'Vanish - '+ '`' + cfg.modules.vanish + '`\n'+
            'AutoFTop - '+ '`' + cfg.modules.auto_ftop + '`\n'+
            'AutoPTop - '+ '`' + cfg.modules.auto_ptop + '`\n'+
            'AutoTps - '+ '`' + cfg.modules.auto_tps + '`\n'+
            'AutoBaltop - '+ '`' + cfg.modules.auto_baltop + '`\n'+
            'AutoFList - '+ '`' + cfg.modules.auto_flist + '`\n'+
            'Applications - '+ '`' + cfg.modules.applications + '`\n'+
            'Music - '+ '`' + cfg.modules.music + '`\n'+
            'Grace - '+ '`' + cfg.bot.grace + '`\n'+
            'ClaimTracker - '+ '`' + cfg.modules.claim_tracker + '`\n'+
            'BankTracker - '+ '`' + cfg.modules.bank_tracker + '`\n'+
            'PlayerTracker - '+ '`' + cfg.modules.player_tracker + '`\n' +
            'KillLog - '+ '`' + cfg.modules.kill_log + '`\n'+
            'Welcome - '+ '`' + cfg.modules.welcome_logs + '`\n' +
            'Goodbye - '+ '`' + cfg.modules.goodbye_logs + '`\n' +
            'Deleted - '+ '`' + cfg.modules.delete_logs + '`')
        
            if (!args[2] || !args[3]) return message.channel.send(moduleEmbed)

            switch(args[2].toLowerCase()) {
              case 'grace':
                if(args[3] == 'true') {
                  cfg.bot.grace = true;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Grace set to `' + args[3].trim() + '`')
                } else if (args[3] == 'false') {
        
                  cfg.bot.grace = false;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Grace set to `' + args[3].trim() + '`')
        
                } else return message.channel.send(moduleEmbed);break

              case 'serverchat':
                if(args[3] == 'true') {
                  cfg.modules.serverchat = true;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Server Chat set to `' + args[3].trim() + '`')
                } else if (args[3] == 'false') {
        
                  cfg.modules.serverchat = false;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Server Chat set to `' + args[3].trim() + '`')
        
                } else return message.channel.send(moduleEmbed);break

                case 'killlog':
                  if(args[3] == 'true') {
                    cfg.modules.kill_log = true;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Kill log set to `' + args[3].trim() + '`')
                  } else if (args[3] == 'false') {
          
                    cfg.modules.kill_log = false;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Kill log set to `' + args[3].trim() + '`')
          
                  } else return message.channel.send(moduleEmbed);break

              case 'routpost':
                if(args[3] == 'true') {
                  cfg.modules.routpost = true;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Routpost set to `' + args[3].trim() + '`')
                } else if (args[3] == 'false') {
        
                  cfg.modules.routpost = false;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Routpost set to `' + args[3].trim() + '`')
        
                } else return message.channel.send(moduleEmbed);break

              case 'claimtracker':
                if(args[3] == 'true') {
                  cfg.modules.claim_tracker = true;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Claim Tracker set to `' + args[3].trim() + '`')
                } else if (args[3] == 'false') {
        
                  cfg.modules.claim_tracker = false;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Claim Tracker set to `' + args[3].trim() + '`')
        
                } else return message.channel.send(moduleEmbed);break

              case 'banktracker':
                if(args[3] == 'true') {
                  cfg.modules.bank_tracker = true;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Bank Tracker set to `' + args[3].trim() + '`')
                } else if (args[3] == 'false') {
        
                  cfg.modules.bank_tracker = false;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Bank Tracker set to `' + args[3].trim() + '`')
        
                } else return message.channel.send(moduleEmbed);break
              
              case 'playertracker':
                if(args[3] == 'true') {
                  cfg.modules.online_tracker = true;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Player Tracker set to `' + args[3].trim() + '`')
                } else if (args[3] == 'false') {
        
                  cfg.modules.online_tracker = false;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Player Tracker set to `' + args[3].trim() + '`')
        
                } else return message.channel.send(moduleEmbed);break

              case 'vanish':
                if(args[3] == 'true') {
                  cfg.modules.vanish = true;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Vanish set to `' + args[3].trim() + '`')
                } else if (args[3] == 'false') {
        
                  cfg.modules.vanish = false;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Vanish set to `' + args[3].trim() + '`')
        
                } else return message.channel.send(moduleEmbed);break

              case 'music':
                if(args[3] == 'true') {
                  cfg.modules.music = true;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Music set to `' + args[3].trim() + '`')
                } else if (args[3] == 'false') {
        
                  cfg.modules.music = false;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Music set to `' + args[3].trim() + '`')
        
                } else return message.channel.send(moduleEmbed);break

              case 'walls':
                if(args[3] == 'true') {
                  cfg.modules.walls = true;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Walls set to `' + args[3].trim() + '`')
                } else if (args[3] == 'false') {
        
                  cfg.modules.walls = false;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Walls set to `' + args[3].trim() + '`')
        
                } else return message.channel.send(moduleEmbed);break

              case'buffers':
                if(args[3] == 'true') {
                  cfg.modules.buffers = true;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Buffers set to `' + args[3].trim() + '`')
                } else if (args[3] == 'false') {
        
                  cfg.modules.buffers = false;
              toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
        
                  return m(message.channel.id, 'Buffers set to `' + args[3].trim() + '`')
        
                } else return message.channel.send(moduleEmbed);break

                case 'bank':
                  if(args[3] == 'true') {
                    cfg.modules.bank = true;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Bank set to `' + args[3].trim() + '`')
                  } else if (args[3] == 'false') {
          
                    cfg.modules.bank = false;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Bank set to `' + args[3].trim() + '`')
          
                  } else return message.channel.send(moduleEmbed);break

                case 'applications':
                  if(args[3] == 'true') {
                    cfg.modules.applications = true;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Applications set to `' + args[3].trim() + '`')
                  } else if (args[3] == 'false') {
          
                    cfg.modules.applications = false;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Applications set to `' + args[3].trim() + '`')
          
                  } else return message.channel.send(moduleEmbed);break

                case 'autoftop':
                  if(args[3] == 'true') {
                    cfg.modules.auto_ftop = true;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Auto Ftop set to `' + args[3].trim() + '`')
                  } else if (args[3] == 'false') {
          
                    cfg.modules.auto_ftop = false;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Auto Ftop set to `' + args[3].trim() + '`')
          
                  } else return message.channel.send(moduleEmbed);break

                case 'autoptop':
                  if(args[3] == 'true') {
                    cfg.modules.auto_ptop = true;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Auto Ptop set to `' + args[3].trim() + '`')
                  } else if (args[3] == 'false') {
          
                    cfg.modules.auto_ptop = false;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Auto Ptop set to `' + args[3].trim() + '`')
          
                  } else return message.channel.send(moduleEmbed);break

                case 'welcome':
                  if(args[3] == 'true') {
                    cfg.modules.welcome_logs = true;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Welcome logs set to `' + args[3].trim() + '`')
                  } else if (args[3] == 'false') {
          
                    cfg.modules.welcome_logs = false;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Welcome logs set to `' + args[3].trim() + '`')
          
                  } else return message.channel.send(moduleEmbed);break

                case 'goodbye':
                  if(args[3] == 'true') {
                    cfg.modules.goodbye_logs = true;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Goodbye Logs set to `' + args[3].trim() + '`')
                  } else if (args[3] == 'false') {
          
                    cfg.modules.goodbye_logs = false;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Goodbye Logs set to `' + args[3].trim() + '`')
          
                  } else return message.channel.send(moduleEmbed);break

                case 'deleted':
                  if(args[3] == 'true') {
                    cfg.modules.deleted_logs = true;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Deleted Logs set to `' + args[3].trim() + '`')
                  } else if (args[3] == 'false') {
          
                    cfg.modules.deleted_logs = false;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Deleted Logs set to `' + args[3].trim() + '`')
          
                  } else return message.channel.send(moduleEmbed);break

                case 'autobaltop':
                  if(args[3] == 'true') {
                    cfg.modules.auto_baltop = true;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Auto Baltop set to `' + args[3].trim() + '`')
                  } else if (args[3] == 'false') {
          
                    cfg.modules.auto_baltop = false;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Auto Baltop set to `' + args[3].trim() + '`')
          
                  } else return message.channel.send(moduleEmbed);break

                case 'autotps':
                  if(args[3] == 'true') {
                    cfg.modules.auto_tps = true;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Auto Tps set to `' + args[3].trim() + '`')
                  } else if (args[3] == 'false') {
          
                    cfg.modules.auto_tps = false;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Auto Tps set to `' + args[3].trim() + '`')
          
                  } else return message.channel.send(moduleEmbed);break

                case 'autoflist':
                  if(args[3] == 'true') {
                    cfg.modules.auto_flist = true;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Auto Flist set to `' + args[3].trim() + '`')
                  } else if (args[3] == 'false') {
          
                    cfg.modules.auto_flist = false;
                toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
                    return m(message.channel.id, 'Auto Flist set to `' + args[3].trim() + '`')
          
                  } else return message.channel.send(moduleEmbed);break
        

            };break

          case 'bot':
            var botEmbed = new Discord.MessageEmbed()
            .setColor(cfg.discord.color)
            .setTitle(`**${cfg.discord.prefix}set bot \`<key>\` \`<new value>\`**`)
            .setDescription('serverIP'+ '`' + cfg.bot.server_ip + '`\n'+
            'port - '+ '`' + cfg.bot.port + '`\n'+
            'hub_command - '+ '`' + cfg.bot.hub_command + '`\n'+
            'payTwice - '+ '`' + cfg.bot.pay_twice + '`')
        
            if (!args[2] || !args[3]) return message.channel.send(botEmbed)

            switch(args[2].toLowerCase()) {
              case 'serverip':
                cfg.bot.server_ip = args[3];
                let servertoConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', servertoConvert, function (err) {})
      
              return m(message.channel.id, 'ServerIP set to `' + args[3].trim() + '`');break

              case 'port':
                cfg.bot.port = args[3];
                let porttoConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', porttoConvert, function (err) {})
        
              return m(message.channel.id, 'Port set to `' + args[3].trim() + '`');break

              case 'paytwice':
                if(args[3] == 'true') {
                  cfg.bot.pay_twice = true;
                    let paytoConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', paytoConvert, function (err) {})
          
                  return m(message.channel.id, 'PayTwice set to `' + args[3].trim() + '`')
                } else if (args[3] == 'false') {
          
                  cfg.bot.pay_twice = false;
                    let pay2toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', pay2toConvert, function (err) {})
          
                  return m(message.channel.id, 'PayTwice set to `' + args[3].trim() + '`')
          
                } else return message.channel.send(botEmbed);break

              case 'hubcommand':
                cfg.bot.hub_command = args.slice(1).slice(2).join(" ")
                let hubtoConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', hubtoConvert, function (err) {})
          
            return m(message.channel.id, 'Hub Command set to `' + args.slice(1).slice(2).join(" ") + '`');break
            };break

          case 'commands':
            var commandsEmbed = new Discord.MessageEmbed()
            .setColor(cfg.discord.color)
            .setTitle(`**${cfg.discord.prefix}set commands \`<key>\` \`<new value>\`**`)
            .setDescription('ftop - '+ '`' + cfg.commands.ftop + '`\n'+
            'ptop - '+ '`' + cfg.commands.ptop + '`\n'+
            'flist - '+ '`' + cfg.commands.flist + '`\n'+
            'fwho - '+ '`' + cfg.commands.fwho + '`\n'+
            'baltop - '+ '`' + cfg.commands.baltop + '`\n'+
            'pay - '+ '`' + cfg.commands.pay + '`\n'+
            'mctop - '+ '`' + cfg.commands.mctop + '`\n'+
            'routpost - '+ '`' + cfg.commands.routpost + '`\n'+
            'outpost - '+ '`' + cfg.commands.outpost + '`\n'+
            'koth - '+ '`' + cfg.commands.koth + '`\n'+
            'rotate - '+ '`' + cfg.commands.rotate + '`\n'+
            'tps - '+ '`' + cfg.commands.tps + '`')
        
        
        
        
            if (!args[2] || !args[3]) return message.channel.send(commandsEmbed)

            switch(args[2].toLowerCase()) {

      case 'ftop':
        cfg.commands.ftop = args.slice(3).join(' ');
          let ftoptoConvert = convertYml.stringify(cfg);
        fs.writeFile('./config.yml', ftoptoConvert, function (err) {})
      
        return m(message.channel.id, 'Ftop set to `' + args.slice(3).join(' ').trim() + '`');break
             
      case 'ptop':
        cfg.commands.ptop = args.slice(3).join(' ');
          let ptoptoConvert = convertYml.stringify(cfg);
        fs.writeFile('./config.yml', ptoptoConvert, function (err) {})
      
        return m(message.channel.id, 'Ptop set to `' + args.slice(3).join(' ').trim() + '`');break
          
      case 'flist':
        cfg.commands.flist = args.slice(3).join(' ');
          let flisttoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', flisttoConvert, function (err) {})
      
        return m(message.channel.id, 'Flist set to `' + args.slice(3).join(' ').trim() + '`');break
        
      
      case 'fwho':
        cfg.commands.fwho = args.slice(3).join(' ');
            let fwhotoConvert = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', fwhotoConvert, function (err) {})
      
        return m(message.channel.id, 'Fwho set to `' + args.slice(3).join(' ').trim() + '`');break
      
      case 'baltop':
        cfg.commands.baltop = args.slice(3).join(' ');
            let baltoptoConvert = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', baltoptoConvert, function (err) {})
      
        return m(message.channel.id, 'Baltop set to `' + args.slice(3).join(' ').trim() + '`');break

      case 'tps':
        cfg.commands.tps = args.slice(3).join(' ');
            let tpstoConvert = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', tpstoConvert, function (err) {})
        
        return m(message.channel.id, 'Tps set to `' + args.slice(3).join(' ').trim() + '`');break
      case 'pay':
        cfg.commands.pay = args.slice(3).join(' ');
            let paytoConvert = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', paytoConvert, function (err) {})
      
        return m(message.channel.id, 'Pay set to `' + args.slice(3).join(' ').trim() + '`');break
      
      case 'mctop':
        cfg.commands.mctop = args.slice(3).join(' ');
            let mctoptoConvert = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', mctoptoConvert, function (err) {})
      
        return m(message.channel.id, 'McTop set to `' + args.slice(3).join(' ').trim() + '`');break
      
      case 'routpost':
        cfg.commands.routpost = args.slice(3).join(' ');
            let routposttoConvert = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', routposttoConvert, function (err) {})
      
        return m(message.channel.id, 'Raiding Outpost set to `' + args.slice(3).join(' ').trim() + '`');break
      
      case 'outpost':
        cfg.commands.outpost = args.slice(3).join(' ');
            let outposttoConvert = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', outposttoConvert, function (err) {})
      
        return m(message.channel.id, 'Outpost set to `' + args.slice(3).join(' ').trim() + '`');break
      
      case 'koth':
        cfg.commands.koth = args.slice(3).join(' ');
            let kothtoConvert = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', kothtoConvert, function (err) {})
      
        return m(message.channel.id, 'Koth set to `' + args.slice(3).join(' ').trim() + '`');break
      
      case 'rotate':
        cfg.commands.rotate = args.slice(3).join(' ');
            let rotatetoConvert = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', rotatetoConvert, function (err) {})
      
        return m(message.channel.id, 'Rotate set to `' + args.slice(3).join(' ').trim() + '`');break
            
      };break

      case 'channels':
        var commandsEmbed = new Discord.MessageEmbed()
        .setColor(cfg.discord.color)
        .setTitle(`**${cfg.discord.prefix}set channels \`<key>\` \`<new value>\`**`)
        .setDescription('whitelist - '+ `${bot.channels.cache.get(cfg.channels.whitelist) ? '<#' + cfg.channels.whitelist + '>' : cfg.channels.whitelist}\n`+
        'serverchat - '+ `${bot.channels.cache.get(cfg.channels.serverchat) ? '<#' + cfg.channels.serverchat + '>' : cfg.channels.serverchat}\n`+
        'ftop (auto)- '+ `${bot.channels.cache.get(cfg.channels.ftop) ? '<#' + cfg.channels.ftop + '>' : cfg.channels.ftop}\n`+
        'ptop (auto)- '+ `${bot.channels.cache.get(cfg.channels.ptop) ? '<#' + cfg.channels.ptop + '>' : cfg.channels.ptop}\n`+
        'flist (auto)- '+ `${bot.channels.cache.get(cfg.channels.flist) ? '<#' + cfg.channels.flist + '>' : cfg.channels.flist}\n`+
        'baltop (auto)- '+ `${bot.channels.cache.get(cfg.channels.baltop) ? '<#' + cfg.channels.baltop + '>' : cfg.channels.baltop}\n`+
        'tps (auto)- '+ `${bot.channels.cache.get(cfg.channels.tps) ? '<#' + cfg.channels.tps + '>' : cfg.channels.tps}\n`+
        'bank - '+ `${bot.channels.cache.get(cfg.channels.bank) ? '<#' + cfg.channels.bank + '>' : cfg.channels.bank}\n`+
        'walls - '+ `${bot.channels.cache.get(cfg.channels.walls) ? '<#' + cfg.channels.walls + '>' : cfg.channels.walls}\n`+
        'routpost - '+ `${bot.channels.cache.get(cfg.channels.routpost) ? '<#' + cfg.channels.routpost + '>' : cfg.channels.routpost}\n`+
        'buffers - '+ `${bot.channels.cache.get(cfg.channels.buffers) ? '<#' + cfg.channels.buffers + '>' : cfg.channels.buffers}\n`+
        'weewoo - '+ `${bot.channels.cache.get(cfg.channels.weewoo) ? '<#' + cfg.channels.weewoo + '>' : cfg.channels.weewoo}\n`+
        'application_logs - '+ `${bot.channels.cache.get(cfg.channels.application_logs) ? '<#' + cfg.channels.application_logs + '>' : cfg.channels.application_logs}\n`+
        'kill_log - '+ `${bot.channels.cache.get(cfg.channels.kill_logs) ? '<#' + cfg.channels.kill_logs + '>' : cfg.channels.kill_logs}\n`+
        'claimtracker - '+ `${bot.channels.cache.get(cfg.channels.claim_tracker) ? '<#' + cfg.channels.claim_tracker + '>' : cfg.channels.claim_tracker}\n`+
        'banktracker - '+ `${bot.channels.cache.get(cfg.channels.bank_tracker) ? '<#' + cfg.channels.bank_tracker + '>' : cfg.channels.bank_tracker}\n`+
        'playertracker - '+ `${bot.channels.cache.get(cfg.channels.player_tracker) ? '<#' + cfg.channels.player_tracker + '>' : cfg.channels.player_tracker}\n`+
        'welcome - '+ `${bot.channels.cache.get(cfg.channels.welcome) ? '<#' + cfg.channels.welcome + '>' : cfg.channels.welcome}\n`+
        'creeperalerts - '+ `${bot.channels.cache.get(cfg.channels.creeper_alerts) ? '<#' + cfg.channels.creeper_alerts + '>' : cfg.channels.creeper_alerts}\n`+
        'playeralerts - '+ `${bot.channels.cache.get(cfg.channels.player_alerts) ? '<#' + cfg.channels.player_alerts + '>' : cfg.channels.player_alerts}\n`+
        'tntalerts - '+ `${bot.channels.cache.get(cfg.channels.tnt_alerts) ? '<#' + cfg.channels.tnt_alerts + '>' : cfg.channels.tnt_alerts}\n`+
        'macro - '+ `${bot.channels.cache.get(cfg.channels.macro) ? '<#' + cfg.channels.macro + '>' : cfg.channels.macro}\n`+
        'discordlogs - '+ `${bot.channels.cache.get(cfg.channels.discord_logs) ? '<#' + cfg.channels.discord_logs + '>' : cfg.channels.discord_logs}\n`+
        'goodbye - '+ `${bot.channels.cache.get(cfg.channels.goodbye) ? '<#' + cfg.channels.goodbye + '>' : cfg.channels.goodbye}`)
    
    
    
    
        if (!args[2] || !args[3]) return message.channel.send(commandsEmbed)

        switch(args[2].toLowerCase()){
          case 'ftop':
            cfg.channels.ftop = message.mentions.channels.first().id || args[3].trim()
              let ftoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', ftoConvert, function (err) {})
    
            return m(message.channel.id, 'Ftop channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break

        case 'routpost':
          cfg.channels.routpost = message.mentions.channels.first().id || args[3].trim()
            let etoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', etoConvert, function (err) {})
    
          return m(message.channel.id, 'Routpost channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
        case 'tps':
          cfg.channels.tps = message.mentions.channels.first().id || args[3].trim()
            let ttoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', ttoConvert, function (err) {})
    
          return m(message.channel.id, 'Tps channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
      
        case 'weewoo':
          cfg.channels.weewoo = message.mentions.channels.first().id || args[3].trim()
            let wtoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', wtoConvert, function (err) {})
    
          return m(message.channel.id, 'Weewoo channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
      
        case 'ptop':
          cfg.channels.ptop = message.mentions.channels.first().id || args[3].trim()
            let jtoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', jtoConvert, function (err) {})
    
          return m(message.channel.id, 'Ptop channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
      
      case 'flist':
        cfg.channels.flist = message.mentions.channels.first().id || args[3].trim()
          let ltoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', ltoConvert, function (err) {})
    
        return m(message.channel.id, 'Flist channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
    
      case 'music':
        cfg.channels.music = message.mentions.channels.first().id || args[3].trim()
            let toConyvert = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', toConyvert, function (err) {})
      
        return m(message.channel.id, 'Music channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
      
      case 'serverchat':
        cfg.channels.serverchat = message.mentions.channels.first().id || args[3].trim()
            let eetoConvert = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', eetoConvert, function (err) {})
      
        return m(message.channel.id, 'Server chat channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
      
      case 'whitelist':
        cfg.channels.whitelist = message.mentions.channels.first().id || args[3].trim()
            let vtoConvert = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', vtoConvert, function (err) {})
      
        return m(message.channel.id, 'Whitelist channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
      
      case 'bank':
      cfg.channels.bank = message.mentions.channels.first().id || args[3].trim()
          let btoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', btoConvert, function (err) {})
    
      return m(message.channel.id, 'Bank channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
    
      case 'baltop':
      cfg.channels.baltop = message.mentions.channels.first().id || args[3].trim()
          let bbtoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', bbtoConvert, function (err) {})
    
      return m(message.channel.id, 'Baltop channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
    
      case 'walls':
      cfg.channels.walls = message.mentions.channels.first().id || args[3].trim()
          let wwtoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', wwtoConvert, function (err) {})
    
      return m(message.channel.id, 'Walls channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
    
      case 'buffers':
      cfg.channels.buffers = message.mentions.channels.first().id || args[3].trim()
          let qtoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', qtoConvert, function (err) {})
    
      return m(message.channel.id, 'Buffers channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
    
      case 'kill_log':
      cfg.channels.kill_logs = message.mentions.channels.first().id || args[3].trim()
          let gggtoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', gggtoConvert, function (err) {})
    
      return m(message.channel.id, 'Kill logs channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
    
      case 'application_logs':
      cfg.discord.application_logs = message.mentions.channels.first().id || args[3].trim()
          let bvtoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', bvtoConvert, function (err) {})
    
      return m(message.channel.id, 'Application logs channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
    
      case 'welcome':
      cfg.channels.welcome = message.mentions.channels.first().id || args[3].trim()
          let wetoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', wetoConvert, function (err) {})
    
      return m(message.channel.id, 'Welcome channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
    
      case 'goodbye':
      cfg.channels.goodbye = message.mentions.channels.first().id || args[3].trim()
          let gttoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', gttoConvert, function (err) {})
    
      return m(message.channel.id, 'Goodbye channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
    
      case 'claimtracker':
      cfg.channels.claim_tracker = message.mentions.channels.first().id || args[3].trim()
          let cctoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', cctoConvert, function (err) {})
    
      return m(message.channel.id, 'Claim Tracker channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
    
      case 'banktracker':
      cfg.channels.bank_tracker = message.mentions.channels.first().id || args[3].trim()
          let bggtoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', bggtoConvert, function (err) {})
    
      return m(message.channel.id, 'Bank Tracker channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
    
      case 'playertracker':
      cfg.channels.player_tracker = message.mentions.channels.first().id || args[3].trim()
          let tftoConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', tftoConvert, function (err) {})
    
      return m(message.channel.id, 'Player Tracker channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
      
      case 'macro':
        cfg.channels.macro = message.mentions.channels.first().id || args[3].trim()
            toConvertt = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', toConvertt, function (err) {})
      
        return m(message.channel.id, 'Macro channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break
        
      case 'discordlogs':
        cfg.channels.discord_logs = message.mentions.channels.first().id || args[3].trim()
            let tftoCnvert = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', tftoCnvert, function (err) {})
        
        return m(message.channel.id, 'Discord logs channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break  

      case 'tntalerts':
          cfg.channels.tnt_alerts = message.mentions.channels.first().id || args[3].trim()
              let tnt = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', tnt, function (err) {})
          
          return m(message.channel.id, 'Tnt alerts channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break  

          case 'creeperalerts':
            cfg.channels.creeper_alerts = message.mentions.channels.first().id || args[3].trim()
                let cre = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', cre, function (err) {})
            
            return m(message.channel.id, 'Creeper alerts channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break  

            case 'playeralerts':
              cfg.channels.player_alerts = message.mentions.channels.first().id || args[3].trim()
                  let player = convertYml.stringify(cfg);
                  fs.writeFile('./config.yml', player, function (err) {})
              
              return m(message.channel.id, 'Player alerts channel set to ' + ('<#' + message.mentions.channels.first().id + '>') || args[3].trim());break  
    

        };break

        case 'intervals':
          var commandsEmbed = new Discord.MessageEmbed()
          .setColor(cfg.discord.color)
          .setTitle(`**${cfg.discord.prefix}set intervals \`<key>\` \`<new value>\`**`)
          .setDescription('ftop - '+ '`' + cfg.intervals.ftop + '`\n'+
          'ptop - '+ '`' + cfg.intervals.ptop + '`\n'+
          'flist - '+ '`' + cfg.intervals.flist + '`\n'+
          'baltop - '+ '`' + cfg.intervals.baltop + '`\n'+
          'walls - '+ '`' + cfg.intervals.walls + '`\n'+
          'routpost - '+ '`' + cfg.intervals.routpost + '`\n'+
          'buffers - '+ '`' + cfg.intervals.buffers + '`\n'+
          'tps - '+ '`' + cfg.intervals.tps + '`\n')
      
          if (!args[2] || !args[3]) return message.channel.send(commandsEmbed)

          switch(args[2].toLowerCase()) {
            case 'ftop':
              if(isNaN(args[3])) return em(message.channel.id, 'Please provide a valid number')
               cfg.intervals.ftop = args[3];
                 let ftopinterval = convertYml.stringify(cfg);
             fs.writeFile('./config.yml', ftopinterval, function (err) {})
       
               return m(message.channel.id, 'Ftop interval set to `' + args[3].trim() + '`');break
           
           case 'routpost':
             if(isNaN(args[3])) return em(message.channel.id, 'Please provide a valid number')
              cfg.intervals.routpost = args[3];
                let ftoptinterval = convertYml.stringify(cfg);
             fs.writeFile('./config.yml', ftoptinterval, function (err) {})
       
              return m(message.channel.id, 'Routpost interval set to `' + args[3].trim() + '`');break
          
           case 'ptop':
             if(isNaN(args[3])) return em(message.channel.id, 'Please provide a valid number')
              cfg.intervals.ptop = args[3];
                let ptopi = convertYml.stringify(cfg);
             fs.writeFile('./config.yml', ptopi, function (err) {})
       
              return m(message.channel.id, 'Ptop interval set to `' + args[3].trim() + '`');break
          
          case 'flist':
           if(isNaN(args[3])) return em(message.channel.id, 'Please provide a valid number')
            cfg.intervals.flist = args[3];
              let flistiii = convertYml.stringify(cfg);
             fs.writeFile('./config.yml', flistiii, function (err) {})
       
            return m(message.channel.id, 'Flist interval set to `' + args[3].trim() + '`');break
        
        case 'baltop':
         if(isNaN(args[3])) return em(message.channel.id, 'Please provide a valid number')
          cfg.intervals.baltop = args[3];
              let eeeeeeeee = convertYml.stringify(cfg);
             fs.writeFile('./config.yml', eeeeeeeee, function (err) {})
       
          return m(message.channel.id, 'Baltop interval set to `' + args[3].trim() + '`');break
       
       case 'walls':
         if(isNaN(args[3])) return em(message.channel.id, 'Please provide a valid number')
          cfg.intervals.walls = args[3];
              let ewdw = convertYml.stringify(cfg);
             fs.writeFile('./config.yml', ewdw, function (err) {})
       
          return m(message.channel.id, 'Walls interval set to `' + args[3].trim() + '`');break
       
       case 'buffers':
         if(isNaN(args[3])) return em(message.channel.id, 'Please provide a valid number')
          cfg.intervals.buffers = args[3];
              let rth = convertYml.stringify(cfg);
             fs.writeFile('./config.yml', rth, function (err) {})
       
          return m(message.channel.id, 'Buffers interval set to `' + args[3].trim() + '`');break
       
       case 'tps':
         if(isNaN(args[3])) return em(message.channel.id, 'Please provide a valid number')
          cfg.intervals.tps = args[3];
              let you = convertYml.stringify(cfg);
             fs.writeFile('./config.yml', you, function (err) {})
       
          return m(message.channel.id, 'Tps interval set to `' + args[3].trim() + '`');break
        };break

        case 'roles':
          var rolesEmbed = new Discord.MessageEmbed()
          .setColor(cfg.discord.color)
          .setTitle(`**${cfg.discord.prefix}set intervals \`<key>\` \`<new value>\`**`)
          .setDescription('wallsRole - <@&'+bot.guilds.cache.get(cfg.discord.guild).roles.cache.get(cfg.roles.walls)+'>\n'+
          'buffersRole - <@&'+bot.guilds.cache.get(cfg.discord.guild).roles.cache.get(cfg.roles.buffers)+'>\n'+
          'routpostRole - <@&'+bot.guilds.cache.get(cfg.discord.guild).roles.cache.get(cfg.roles.routpost)+'>\n'+
          'weewooRole - <@&'+bot.guilds.cache.get(cfg.discord.guild).roles.cache.get(cfg.roles.weewoo)+'>\n'+
          'adminRole - <@&'+bot.guilds.cache.get(cfg.discord.guild).roles.cache.get(cfg.roles.admin)+'>\n'+
          'claimsRole - <@&'+bot.guilds.cache.get(cfg.discord.guild).roles.cache.get(cfg.roles.claim_tracker_role_to_tag)+'>\n')
      
          if (!args[2] || !args[3]) return message.channel.send(rolesEmbed)

          switch(args[2].toLowerCase()) {
            case 'wallsrole':
              cfg.roles.walls = message.mentions.roles.first().id
                toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
          
              return m(message.channel.id, 'Walls role set to <@&' + message.mentions.roles.first().id + '>');break
            
            case 'buffersrole':
              cfg.roles.buffers = message.mentions.roles.first().id
                toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
          
              return m(message.channel.id, 'Buffers role set to <@&' + message.mentions.roles.first().id + '>');break
            
              case 'adminrole':
                cfg.roles.admin = message.mentions.roles.first().id
                  toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
            
                return m(message.channel.id, 'Admin role set to <@&' + message.mentions.roles.first().id + '>');break
  
            case 'routpostrole':
              cfg.roles.routpost = message.mentions.roles.first().id
                toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
          
              return m(message.channel.id, 'Raiding Outpost role set to <@&' + message.mentions.roles.first().id + '>');break
            
            case 'weewoorole':
              cfg.roles.weewoo = message.mentions.roles.first().id
                toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
          
              return m(message.channel.id, 'Weewoo role set to <@&' + message.mentions.roles.first().id + '>');break
            
            case 'claimsrole':
              cfg.roles.claim_tracker_role_to_tag = message.mentions.roles.first().id
                toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
          
              return m(message.channel.id, 'Claims role set to <@&' + message.mentions.roles.first().id + '>');break
            
            case 'claimamounttotagfor':
              if(isNaN(args[3])) return em(message.channel.id, 'Please provide a valid number')
                cfg.other.claim_to_tag_for = args[3];
                   toConvert = convertYml.stringify(cfg);
                  fs.writeFile('./config.yml', toConvert, function (err) {})
            
               return m(message.channel.id, 'Claim amount to tag for set to `' + args[3].trim() + '`');break
            
          };break

        case 'alerts':
          var alertsEmbed = new Discord.MessageEmbed()
          .setColor(cfg.discord.color)
          .setTitle(`**${cfg.discord.prefix}set alerts \`<key>\` \`<new value>\`**`)
          .setDescription('CreeperAlerts - '+ '`' + cfg.alerts.creeper_alerts + '`\n'+
          'TntAlerts - '+ '`' + cfg.alerts.tnt_alerts + '`\n'+
          'PlayerAlerts - '+ '`' + cfg.alerts.player_alerts + '`\n')
      
          if (!args[2] || !args[3]) return message.channel.send(alertsEmbed)

          switch(args[2].toLowerCase()) {
            case 'creeperalerts':
              if(args[3] == 'true') {
                cfg.alerts.creeper_alerts = true;
                  toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', paytoConvert, function (err) {})
        
                return m(message.channel.id, 'Creeper alerts set to `' + args[3].trim() + '`')
              } else if (args[3] == 'false') {
        
                cfg.alerts.creeper_alerts = false;
                  toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', pay2toConvert, function (err) {})
        
                return m(message.channel.id, 'Creeper alerts set to `' + args[3].trim() + '`')
        
              } else return message.channel.send(botEmbed);break

              case 'tntalerts':
                if(args[3] == 'true') {
                  cfg.alerts.tnt_alerts = true;
                    toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', paytoConvert, function (err) {})
          
                  return m(message.channel.id, 'Tnt alerts set to `' + args[3].trim() + '`')
                } else if (args[3] == 'false') {
          
                  cfg.alerts.tnt_alerts = false;
                    toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', pay2toConvert, function (err) {})
          
                  return m(message.channel.id, 'Tnt alerts set to `' + args[3].trim() + '`')
          
                } else return message.channel.send(botEmbed);break
              
                case 'playeralerts':
                  if(args[3] == 'true') {
                    cfg.alerts.player_alerts = true;
                      toConvert = convertYml.stringify(cfg);
                  fs.writeFile('./config.yml', paytoConvert, function (err) {})
            
                    return m(message.channel.id, 'Player alerts set to `' + args[3].trim() + '`')
                  } else if (args[3] == 'false') {
            
                    cfg.alerts.player_alerts = false;
                      toConvert = convertYml.stringify(cfg);
                  fs.writeFile('./config.yml', pay2toConvert, function (err) {})
            
                    return m(message.channel.id, 'Player alerts set to `' + args[3].trim() + '`')
            
                  } else return message.channel.send(botEmbed);break

          };break

        case 'tracker':
          var trackerEmbed = new Discord.MessageEmbed()
          .setColor(cfg.discord.color)
          .setTitle(`**${cfg.discord.prefix}set tracker \`<key>\` \`<new value>\`**`)
          .setDescription('TrackedFactions - \n'+ '`' + cfg.tracker.tracked_faction.join('\n') + '`\n'+
          'ClaimsToTagFor - '+ '`' + cfg.tracker.claim_to_tag_for + '`\n'+
          'ClaimCommand - '+ '`' + cfg.tracker.claim_command + '`\n')
      
          if (!args[2] || !args[3]) return message.channel.send(trackerEmbed)

          switch(args[2].toLowerCase()) {
            case 'claimstotagfor':
              if(isNaN(args[3])) return em(message.channel.id, 'Please provide a valid number')
              cfg.tracker.claim_to_tag_for = args[3];
                 toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
          
             return m(message.channel.id, 'Claim amount to tag for set to `' + args[3].trim() + '`');break

            case 'claimcommand':
              cfg.tracker.claim_command = args.slice(3).join(' ');
              toConvert = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', toConvert, function (err) {})
          
            return m(message.channel.id, 'Claim command set to `' + args.slice(3).join(' ').trim() + '`');break

            case 'trackedfactions':
              cfg.tracker.tracked_faction.push(args.slice(3).join(' '))
              toConvert = convertYml.stringify(cfg);
            fs.writeFile('./config.yml', toConvert, function (err) {})
          
            return m(message.channel.id, 'Added `' + args.slice(3).join(' ').trim() + '` to the tracked factions');break

          };break

          case 'formats':
            var formatsEmbed = new Discord.MessageEmbed()
            .setColor(cfg.discord.color)
            .setTitle(`**${cfg.discord.prefix}set formats \`<key>\` \`<new value>\`**`)
            .setDescription('DepositRegex - '+ '`' + cfg.formats.deposit_regex + '`\n'+
            'WithdrawRegex - '+ '`' + cfg.formats.withdraw_regex + '`\n'+
            'ClaimRegex - '+ '`' + cfg.formats.claim_regex + '`\n'+
            'PlayerRegex - '+ '`' + cfg.formats.player_regex + '`\n'+
            'BankRegex - '+ '`' + cfg.formats.bank_regex + '`\n'+
            'KillRegex - '+ '`' + cfg.formats.kill_regex + '`\n')
        
            if (!args[2] || !args[3]) return message.channel.send(formatsEmbed)

            switch(args[2].toLowerCase()) {
              case 'depositregex':
                cfg.formats.deposit_regex = args.slice(3).join(' ');
                toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
            
              return m(message.channel.id, 'Deposit Regex set to `' + args.slice(3).join(' ').trim() + '`');break

              case 'withdrawregex':
                cfg.formats.withdraw_regex = args.slice(3).join(' ');
                toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
            
              return m(message.channel.id, 'Withdraw Regex set to `' + args.slice(3).join(' ').trim() + '`');break

              case 'claimregex':
                cfg.formats.claim_regex = args.slice(3).join(' ');
                toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
            
              return m(message.channel.id, 'Claim Regex set to `' + args.slice(3).join(' ').trim() + '`');break

              case 'playerregex':
                cfg.formats.player_regex = args.slice(3).join(' ');
                toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
            
              return m(message.channel.id, 'Player Regex set to `' + args.slice(3).join(' ').trim() + '`');break

              case 'bankregex':
                cfg.formats.bank_regex = args.slice(3).join(' ');
                toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
            
              return m(message.channel.id, 'Bank Regex set to `' + args.slice(3).join(' ').trim() + '`');break

              case 'killregex':
                cfg.formats.kill_regex = args.slice(3).join(' ');
                toConvert = convertYml.stringify(cfg);
              fs.writeFile('./config.yml', toConvert, function (err) {})
            
              return m(message.channel.id, 'Kill Regex set to `' + args.slice(3).join(' ').trim() + '`');break
            
            
            };break

            case 'macro':
              var macroEmbed = new Discord.MessageEmbed()
              .setColor(cfg.discord.color)
              .setTitle(`**${cfg.discord.prefix}set macro \`<key>\` \`<new value>\`**`)
              .setDescription('MacroCommand - '+ '`' + cfg.macro.macro_command + '`\n'+
              'MacroDelay - '+ '`' + cfg.macro.macro_delay + '`\n')
          
              if (!args[2] || !args[3]) return message.channel.send(macroEmbed)

              switch(args[2].toLowerCase()) {
                case 'macrocommand':
                  cfg.macro.macro_command = args.slice(3).join(' ');
                  toConvert = convertYml.stringify(cfg);
                fs.writeFile('./config.yml', toConvert, function (err) {})
              
                return m(message.channel.id, 'Macro Command set to `' + args.slice(3).join(' ').trim() + '`');break

                case 'macrodelay':
                  if(isNaN(args[3])) return em(message.channel.id, 'Please provide a valid number')
                  cfg.macro.macro_delay = args[3];
                     toConvert = convertYml.stringify(cfg);
                    fs.writeFile('./config.yml', toConvert, function (err) {})
              
                 return m(message.channel.id, 'Macro Delay set to `' + args[3].trim() + '`');break
                };break
              case 'other':
                var otherEmbed = new Discord.MessageEmbed()
                .setColor(cfg.discord.color)
                .setTitle(`**${cfg.discord.prefix}set other \`<key>\` \`<new value>\`**`)
                .setDescription('WelcomeMessage - '+ '`' + cfg.other.welcome_message + '`\n'+
                'AcceptMessage - '+ '`' + cfg.other.accept_message + '`\n'+
                'DeniedMessage - '+ '`' + cfg.other.denied_message + '`\n'+
                'ApplicationStatus - '+ '`' + cfg.other.application_status + '`\n'+
                'WeewooMessage - '+ '`' + cfg.other.weewoo_message + '`\n'+
                'WeewooDisabled - '+ '`' + cfg.other.weewoo_disabled + '`\n'+
                'GoodbyeMessage - '+ '`' + cfg.other.goodbye_message + '`\n')
            
                if (!args[2] || !args[3]) return message.channel.send(otherEmbed)

                switch(args[2].toLowerCase()) {
                  case 'welcomemessage':
                    cfg.other.welcome_message = args.slice(3).join(' ');
                    toConvert = convertYml.stringify(cfg);
                  fs.writeFile('./config.yml', toConvert, function (err) {})
                
                  return m(message.channel.id, 'Welcome Message set to `' + args.slice(3).join(' ').trim() + '`');break
                
                  case 'acceptmessage':
                    cfg.other.accept_message = args.slice(3).join(' ');
                    toConvert = convertYml.stringify(cfg);
                  fs.writeFile('./config.yml', toConvert, function (err) {})
                
                  return m(message.channel.id, 'Accept Message set to `' + args.slice(3).join(' ').trim() + '`');break

                  case 'deniedmessage':
                    cfg.other.denied_message = args.slice(3).join(' ');
                    toConvert = convertYml.stringify(cfg);
                  fs.writeFile('./config.yml', toConvert, function (err) {})
                
                  return m(message.channel.id, 'Denied Message set to `' + args.slice(3).join(' ').trim() + '`');break

                  case 'applicationstatus':
                    cfg.other.application_status = args.slice(3).join(' ');
                    toConvert = convertYml.stringify(cfg);
                  fs.writeFile('./config.yml', toConvert, function (err) {})
                
                  return m(message.channel.id, 'Application Status set to `' + args.slice(3).join(' ').trim() + '`');break

                  case 'weewoomessage':
                    cfg.other.weewoo_message = args.slice(3).join(' ');
                    toConvert = convertYml.stringify(cfg);
                  fs.writeFile('./config.yml', toConvert, function (err) {})
                
                  return m(message.channel.id, 'Weewoo Message set to `' + args.slice(3).join(' ').trim() + '`');break

                  case 'weewoodisabled':
                    cfg.other.weewoo_disabled = args.slice(3).join(' ');
                    toConvert = convertYml.stringify(cfg);
                  fs.writeFile('./config.yml', toConvert, function (err) {})
                
                  return m(message.channel.id, 'Weewoo Disabled set to `' + args.slice(3).join(' ').trim() + '`');break

                  case 'goodbyemessage':
                    cfg.other.goodbye_message = args.slice(3).join(' ');
                    toConvert = convertYml.stringify(cfg);
                  fs.writeFile('./config.yml', toConvert, function (err) {})
                
                  return m(message.channel.id, 'Goodbye Message set to `' + args.slice(3).join(' ').trim() + '`');break

  


              };break
  
      };break


      case 'chatlogs':
        if(roleCheck() == false) return
        if(!args[1]) return invalid(message.channel.id, `IGN`)

        fs.readdir(`./data/chat logs`, (err, files) => {
            for(let i = 0; i < files.length; i++) {if(files[i].toLowerCase().includes(args[1].toLowerCase())) return message.channel.send(new Discord.MessageAttachment(`./data/chat logs/${files[i]}`));}
            em(message.channel.id, `No log was found for \`${args[1]}\``);
        })
        break;
      case 'setupquestions':
        if(roleCheck() == false) return
        if (cfg.modules.applications !== true) return em(message.channel.id, 'Application module is disabled on this server, please enable through the settings command')

        var ign = message.author
        let newQ = []
        let pos = 0;
        var desc = `Please list the new questions for the application process.\nYou can choose to stop by typing \`${cfg.discord.prefix}end\``
        var embed = new Discord.MessageEmbed().setColor(cfg.discord.color).setDescription(desc)
      
        s(message.channel.id, 'Please check your DM\'s')
      var question = await ign.send(embed);
  
      const filter = msg => msg.author.id === message.author.id;
  
      const collector = question.channel.createMessageCollector(filter, { time: 50000000 });
  
      collector.on('collect', msg => { 
          if(msg.content.includes(`${cfg.discord.prefix}end`)) {
              questions.questions = newQ;
              console.log(questions.questions)
              s(question.channel.id, 'Questions saved')
              edit('./data/questions.json', questions)
              collector.stop('manual')
          } else {
          pos++
          newQ.push(`${msg.content}`)
          question.edit(embed.setDescription(desc += `\n\n${pos}. ${msg.content}`))
          }
      })
  
      collector.on('end', () => {
  
      })
        break;

      case 'apply':
        if (cfg.modules.applications !== true) return em(message.channel.id, 'Application module is disabled on this server');
        if(!questions.questions) return em(message.channel.id, `\`${cfg.discord.prefix}setupQuestions\` has not been ran on this discord server`)
        if(!questions.questions[0]) return em(message.channel.id, `\`${cfg.discord.prefix}setupQuestions\` has not been ran on this discord server`)
       
        let log = [];
        let pose = 0;
        let current = 0;
    
        var ign = message.author;
        var q = questions.questions
        var desc = `**Applicant:** <@${message.author.id}>\n**Tag:** ${message.author.tag}\n**Answer Log:**\n`
        var embed = new Discord.MessageEmbed().setColor(cfg.discord.color).setDescription(desc)
    
        var emb = await ign.send(embed)
        var question = await ign.send(q[0]);
    
        const filtere = msg => msg.author.id === message.author.id;
    
        const collectore = question.channel.createMessageCollector(filtere, { time: 50000000 });
        s(message.channel.id, 'Please check your DM\'s')
        var numb = q.length
        collectore.on('collect', msg => {
        
            if( parseFloat(current + 1) == q.length ) {
              pose++
              emb.edit(embed.setDescription(desc += `\n\n\`${pose}. ${q[current]} -\n\`${msg.content}`))
                log.push(`${pose}. ${msg.content}`)
    
                return collectore.stop() 
            } else {
              pose++
            current++
    
            log.push(`${pose}. ${msg.content}`)
            emb.edit(embed.setDescription(desc += `\n\n\`${pose}. ${q[current - 1]} -\n\`${msg.content}`))
            m(question.channel.id, q[current])
            }
        })
    
        collectore.on('end', (collected, reason) => {
            ign.send(new MessageEmbed()
            .setColor(cfg.discord.color)
            .setDescription(`**:white_check_mark: Success**\n\nApplication logged`));
    
            let ch = bot.channels.cache.get(cfg.channels.application_logs)
            if(!ch) return invalidChannel('cfg.channels.application_logs')
            ch.send(embed).then(async m => {
                await m.react('✅')
                await m.react('❌')
    
            })})
        break;

      case 'accept':
        if(roleCheck() == false) return
        var acceptmember = message.mentions.users.first() || bot.users.cache.get(args[0])
        if(!acceptmember) return invalid(message.channel.id, 'member')
    
        var accepted = new MessageEmbed()
        .setColor(cfg.discord.color)
        .setDescription(cfg.other.accept_message.replace(/{user}/g, '<@' + acceptmember.id + '>'))
        .setFooter('Xenon Factions Bot')
    
    
        acceptmember.send(accepted).catch(() => {
          return em(message.channel.id, `<@${acceptmember.id}> has their dm's disabled`)
        })
        s(message.channel.id, `<@` + acceptmember.id + '> has recieved an accepted notice in their DM\'s ')
        break
    
      case 'deny':
        if(roleCheck() == false) return
        var denymember = message.mentions.users.first() || bot.users.cache.get(args[0])
        if(!denymember) return invalid(message.channel.id, 'member')
    
        var accepted = new MessageEmbed()
        .setColor(cfg.discord.color)
        .setDescription(cfg.other.denied_message.replace(/{user}/g, '<@' + denymember.id + '>'))
        .setFooter('Xenon Factions Bot')
    
        denymember.send(accepted).catch(() => {
          return em(message.channel.id, `<@${denymember.id}> has their dm's disabled`)
        })
        s(message.channel.id, `<@` + denymember.id + '> has recieved a denied notice in their DM\'s ')
        break;

      case 'applicationstatus':
        if(roleCheck() == false) return
        if(cfg.other.application_status == "") return em(message.channel.id, '`other.application_status` has not been filled in, inside the config.yml');
        var accepted = new MessageEmbed()
        .setColor(cfg.discord.color)
        .setDescription(cfg.other.application_status)
        .setFooter('Xenon Factions Bot')
  
        message.channel.send(accepted)
      break;

      case 'promote':
        if(roleCheck() == false) return
        if(!args[1]) return em(message.channel.id, `Invalid Arguments\nPlease use the format:\n${cfg.discord.prefix}promote <user> <roletogive> <channel>`)
        if(!args[2]) return em(message.channel.id, `Invalid Arguments\nPlease use the format:\n${cfg.discord.prefix}promote <user> <roletogive> <channel>`)
        if(!args[3]) return em(message.channel.id, `Invalid Arguments\nPlease use the format:\n${cfg.discord.prefix}promote <user> <roletogive> <channel>`)
        var user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
        var channelsend = message.mentions.channels.first().id
        var role = message.mentions.roles.first().id
        user.roles.add(role)
        s(message.channel.id, `Promotion message sent into <#${channelsend}>`).then(m => m.delete({ timeout: 7500 }))
        var embed5 = new Discord.MessageEmbed().setTitle("Promotion").setColor(cfg.discord.color).setDescription(`${user} has been promoted to <@&${role}>!`);bot.channels.cache.get(channelsend).send(embed5);break

      case 'demote':
        if(roleCheck() == false) return
        if(!args[1]) return em(message.channel.id, `Invalid Arguments\nPlease use the format:\n${cfg.discord.prefix}demote <user> <roletoremove> <channel>`)
        if(!args[2]) return em(message.channel.id, `Invalid Arguments\nPlease use the format:\n${cfg.discord.prefix}demote <user> <roletoremove> <channel>`)
        if(!args[3]) return em(message.channel.id, `Invalid Arguments\nPlease use the format:\n${cfg.discord.prefix}demote <user> <roletoremove> <channel>`)
        var user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
        var channelsend = message.mentions.channels.first().id
        var role = message.mentions.roles.first().id 
        user.roles.remove(role)
        s(message.channel.id, `Demotion message sent into <#${channelsend}>`).then(m => m.delete({ timeout: 7500 }))
        var embed5 = new Discord.MessageEmbed().setTitle("Promotion").setColor(cfg.discord.color).setDescription(`${user} has been demoted to <@&${role}>!`);bot.channels.cache.get(channelsend).send(embed5);break
      
      case 'botlogs':
        if(roleCheck() == false) return
        var fileiq = `./data/botlogs.txt`
        if(fs.existsSync(fileiq)) {
        const attachment = new Discord.MessageAttachment(`./data/botlogs.txt`, `BotLogs`);
        message.channel.send(`**Logs:**`, attachment)
        } else {
          return em(message.channel.id, '`botlogs.txt` could not be found')
        };break

      case 'ban':
        if(roleCheck() == false) return
        if (!args[1]) {
          return em(message.channel.id, "Please provide a person to ban.").then((m) => m.delete({ timeout: 5000 }));
        }
    
        // No bot permissions
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
          return em(message.channel.id, "❌ I do not have permissions to ban members.").then((m) => m.delete({ timeout: 5000 }));
        }
    
        const toBan =
          message.mentions.members.first() ||
          message.guild.members.cache.get(args[1]);
    
        if (toBan.hasPermission("BAN_MEMBERS")) {
          return em(message.channel.id, "I can't ban a member with permissions").then((m) => m.delete({ timeout: 5000 }));
        }
    
        if (!toBan) {
          return em(message.channel.id, "Couldn't find that member, try again").then((m) => m.delete({ timeout: 5000 }));
        }
    
        if (toBan.id === message.author.id) {
          return em(message.channel.id, "You can't ban yourself.").then((m) => m.delete({ timeout: 5000 }));
        }
    
        if (!toBan.bannable) {
          return em(message.channel.id, "I can't ban that person due to role hierarchy.").then((m) => m.delete({ timeout: 5000 }));
        }
    
        const eeee = new Discord.MessageEmbed()
          .setColor(cfg.discord.color)
          .setThumbnail(toBan.user.displayAvatarURL())
          .setFooter(message.member.displayName, message.author.displayAvatarURL())
          .setTimestamp()
          .setDescription(
            `**> banned:** <@${toBan.id}> - (${toBan.id})\n**> banned by:** <@${
              message.member.id
            }> - (${message.member.id})\n\n**> Reason:** ${
              args[2] ? args.slice(1).join(" ") : "None Given"
            }`
          );
    
        toBan.ban({reason: args[2]}).catch((err) => {
          if (err)
            return message.channel.send(
              `Well.... the ban didn't work out. Here's the error ${err}`
            );
        });
        message.channel.send(eeee);break;
      
      case 'kick':
        if(roleCheck() == false) return
        if (!args[1]) {
          return em(message.channel.id, "Please provide a person to kick.").then((m) => m.delete({ timeout: 5000 }));
        }
    
        // No bot permissions
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
          return em(message.channel.id, "❌ I do not have permissions to kick members.").then((m) => m.delete({ timeout: 5000 }));
        }
    
        const tokick =
          message.mentions.members.first() ||
          message.guild.members.cache.get(args[1]);
    
        if (tokick.hasPermission("KICK_MEMBERS")) {
          return em(message.channel.id, "❌ I can't ban a member with permissions").then((m) => m.delete({ timeout: 5000 }));
        }
    
        if (!tokick) {
          return em(message.channel.id, "Couldn't find that member, try again").then((m) => m.delete({ timeout: 5000 }));
        }
    
        if (tokick.id === message.author.id) {
          return em(message.channel.id, "You can't kick yourself.").then((m) => m.delete({ timeout: 5000 }));
        }
    
        if (!tokick.bannable) {
          return em(message.channel.id, "I can't kick that person due to role hierarchy.").then((m) => m.delete({ timeout: 5000 }));
        }
    
        const eee = new Discord.MessageEmbed()
          .setColor(cfg.discord.color)
          .setThumbnail(tokick.user.displayAvatarURL())
          .setFooter(message.member.displayName, message.author.displayAvatarURL())
          .setTimestamp()
          .setDescription(
            `**> kicked:** <@${tokick.id}> - (${tokick.id})\n**> kicked by:** <@${
              message.member.id
            }> - (${message.member.id})\n\n**> Reason:** ${
              args[1] ? args.slice(2).join(" ") : "None Given"
            }`
          );
    
          tokick.kick(args.slice(1).join(" ")).catch((err) => {
          if (err)
            return message.channel.send(
              `Well.... the kick didn't work out. Here's the error ${err}`
            );
        });
        message.channel.send(eee);break

      case 'blacklist':
        if(roleCheck() == false) return
        var blacklistedchannel = message.mentions.channels.first()
        if(!args[1]) return em(message.channel.id, "Please indicate a subcommand:\nList, Clear, Add, Remove")

        switch(args[1].toLowerCase()) {
          case 'list':
            var number_playing;
      
            for (let i = 0; i < blcfg.length; i++) {
              number_playing = i;
            }
            return message.channel.send(
              new Discord.MessageEmbed()
                .setTitle(`**Blacklisted Channels**`)
                .setColor(cfg.discord.color)
                .setThumbnail(bot.user.displayAvatarURL())
                .setTimestamp()
                .setFooter("Last updated at ")
                .setDescription(
                  `**There are currently ${isNaN(number_playing + 1) ? '0' : number_playing + 1 } channels blacklisted from the bot.**\n\n` +
                    `${blcfg.length == 0 ? 'There are 0 blacklisted channels' : `<#${blcfg.join(">\n<#")}>`}`
                )
            );break
          case 'clear':
            blcfg = []
            edit('./data/blacklist.json', blcfg)
            return m(message.channel.id, 'List of blacklisted channel\'s has been cleared');break
          
          case 'remove':
            if (!blacklistedchannel) return em(message.channel.id, 'Please provide a channel to remove');
            if (blcfg.includes(blacklistedchannel.id)) {
                blcfg.splice(blcfg.indexOf(blacklistedchannel.id, 1));
              edit(`./data/blacklist.json`, blcfg);
              m(message.channel.id, `Removed <#${blacklistedchannel.id}> from the list of blacklisted channel`)
            } else em(message.channel.id, `<#${blacklistedchannel.id}> has not been blacklisted`);break
          case 'add':
            if (!blacklistedchannel) return em(message.channel.id, "Please provide a channel to blacklist");
            if (!blcfg.includes(blacklistedchannel.id)) {
                blcfg.push(blacklistedchannel.id);
            edit(`./data/blacklist.json`, blcfg); 
            return m(message.channel.id, `Added <#${blacklistedchannel.id}> to the list of blacklisted channels`)
          
          } else return em(message.channel.id, `<#${blacklistedchannel.id}> has already been blacklisted`); break
        }; break

      case 'lock':
        if(roleCheck() == false) return

        message.channel.updateOverwrite(message.guild.id, { SEND_MESSAGES : false }).then(m => {
        var lockEmbed = new Discord.MessageEmbed().setColor(cfg.discord.color)
        .setTitle(`Channel Locked`)
        .setDescription(`🔒 Channel has been locked by <@${message.author.id}>`)
        .setTimestamp()
        message.channel.send(lockEmbed)
      })
      break;

      case 'unlock':
        if(roleCheck() == false) return

      message.channel.updateOverwrite(message.guild.id, { SEND_MESSAGES : true }).then(m => {
      var unlockEmbed = new Discord.MessageEmbed()
      .setColor(cfg.discord.color)
      .setTitle(`Channel Unlocked`)
      .setDescription(`🔓 Channel has been unlocked by <@${message.author.id}>`)
      .setTimestamp()
      message.channel.send(unlockEmbed)
      })
      break;

      case 'purge':
        if(roleCheck() == false) return

    var amount = parseInt(args[1]) + 1;

    if (!args[1]) return invalid(message.channel.id, 'amount (1-99)')

    if (amount <= 1) return invalid(message.channel.id, 'amount (1-99)')
    if(amount > 99) amount = 99

    message.channel.bulkDelete(amount, true).catch(err => {
        message.channel.send({embed: {
            color: cfg.discord.color,
            description: "**There was an error proccesing this command\n\nError message:** " + err}})
    }); break;

    case '8ball':
      var ball = ['It is certain.','No doubt about it.','No chance.','Maybe, time will tell.','No way.','Concentrate and try again.', ' As I see it, yes', 'Most likely', 'Better not tell you now', 'My sources say no', 'Signs point to yes', 'Yes definitely', 'It is decidedly so', 'As I see it, yes', 'My sources say no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];
      if(!args[0]) return invalid(message.guild.id, 'question')
      m(message.channel.id, '[8BALL] ' + ball[Math.floor(Math.random () * ball.length)]); break;

    case 'tps':
      m(message.channel.id, `The current tps is: ${mc.getTps()}`);return

    case 'embed':
      if(roleCheck() == false) return
      message.delete({ timeout: 500 })
  
      if(!args) return invalid(message.guild.id, 'message')
      var msgEmbed = new Discord.MessageEmbed()
      .setColor(cfg.discord.color)
      .setDescription(args.slice(1).join(' '))
  
      message.channel.send(msgEmbed); break;

    case 'slowmode':
      if(roleCheck() == false) return
      if(!args[1]) return invalid(message.channel.id, 'duration (seconds)')
      var timeout = args[1]
      message.channel.setRateLimitPerUser(timeout).catch(() => { em(message.channel.id, 'Failed to set slowmo timer, please ensure you entered a correct time unit!')}); break;

    case 'say':
      if(roleCheck() == false) return
      if(!args[1]) return invalid(message.channel.id, 'message')  
      message.channel.send(args.slice(1).join(' ')); break;

    case 'restart':
      if(roleCheck() == false) return
      s(message.channel.id, 'Restarting bot... please allow 10 seconds for the bot to come online').then(() => {
          setTimeout(() => {
              process.exit()
          }, 5000)
      }); break;

    case 'calc':
    case 'calculator':
      var w = message.content.trim().split(" ");
      e = w.slice(1)
      let sum = e.join(" ")
      if(!parseFloat(sum)) return em(message.channel.id, 'Invalid math expression provided')
      const calcEmbed = new Discord.MessageEmbed()
      .setTitle(`Calculator`)
      .setFooter('Xenon Faction Bot')
      .setColor(cfg.discord.color)
      .setDescription("```" + "Question: " + sum + "```" + "```" + "Answer: " + `${math.evaluate(sum)}` + "```")
      message.channel.send(calcEmbed); break;

    case 'setpaypal':
      if(roleCheck() == false) return
      if (!args[1]) return em(message.channel.id, `Invalid Arguments\nPlease use the format:\n${cfg.discord.prefix}setpaypal [user] <paypal email>`)
      var email = args.slice(1).join(' ')
      var user = message.author.id;
      if(message.mentions.users.first() || bot.users.cache.get(args[1])) {
        email = args.slice(2).join(' ')
        var tuser = message.mentions.users.first() || bot.users.cache.get(args[1])
        if(tuser) { user = tuser.id}
        if (!args[2]) return em(message.channel.id, `Invalid Arguments\nPlease use the format:\n${cfg.discord.prefix}setpaypal [user] <paypal email>`)
        
      }
      if(!cfg.channels.whitelist) return invalidChannel('cfg.channels.whitelist')
        
      let cfe;;
    
      for(let i in whitelist) {
        if(whitelist[i].id == user) cfe = whitelist[i];
      }
      if(!cfe) return em(message.channel.id, `<@${tuser.id}> is not whitelisted`)
    
      cfe.paypal = email
      toConvertt = convertYml.stringify(whitelist);
        fs.writeFile('./data/whitelist.yml', toConvertt, function (err) {})
      s(message.channel.id, `<@${cfe.id}>'s paypal has been set to \`${email}\``);break

    case 'listroles':
    let txt = ''
    message.guild.roles.cache.forEach(role => {
      txt += `**${role.name}** - ${role.members.size}\n`
    })
    var listRolesEmbed = new Discord.MessageEmbed()
    .setColor(cfg.discord.color)
    .setTitle('Roles List')
    .setDescription('**Role** - Members\n\n' + txt)
    message.channel.send(listRolesEmbed); break

    case 'inrole':
    let roles = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[1]) || message.guild.roles.cache.find(r => r.name == args[1])
    if(!roles) return invalid(message.channel.id, 'role')
  
    let roletxt = ''
    let number = 0
    message.guild.members.cache.forEach(member => {
      if(member.roles.cache.has(roles.id)) {
        number++
        roletxt += `<@${member.id}>\n`
      }
      return
    })
  
    var inRoleEmbed = new Discord.MessageEmbed()
    .setColor(cfg.discord.color)
    .setTitle(number + ' Members with the role: ' + roles.name)
    .setDescription(roletxt)
  
    message.channel.send(inRoleEmbed); break

    case 'dmuser':
      if(roleCheck() == false) return
      let i = 0;
      const member = message.guild.member(message.author);
      if (!args[1] || !args[2]) return invalid(message.channel.id, cfg.discord.prefix + "member message");
      let dmuser = message.mentions.users.first() || message.guild.users.cache.find(x => x.name == args[1]);
      if (!dmuser) return em(message.channel.id, "Member not found")
      let msg = args.slice(2).join(" ");
          const dmUserEmbed = new Discord.MessageEmbed()
              .setDescription(msg)
              .setColor(cfg.discord.color)
              .setFooter("Author: " + message.author.tag)
              dmuser.send(dmUserEmbed)
      s(message.channel.id, `<@${dmuser.id}> has been sent a dm`); break
    
    case 'setign':
      if(roleCheck() == false) return
      try {var rawCfg = yaml.load(fs.readFileSync('./data/whitelist.yml', 'utf8'));whitelist = JSON.parse(JSON.stringify(rawCfg, null, 4));} catch (e) {whitelist = {};}
      var addUser = message.mentions.users.first() || bot.users.cache.get(args[1])
      if(!addUser) return invalid(message.channel.id, 'member IGN')
      if(!args[2]) return invalid(message.channel.id, 'member IGN')
      class whitelisted {
        constructor(ign, id, paypal, walls, buffers, routpostchecks, deposits) {
            this.ign = ign;
            this.id = id;
            this.paypal = paypal;
            this.walls = walls;
            this.buffers = buffers;
            this.routpostchecks = routpostchecks;
            this.deposits = deposits;
        }}
        playtimecfg[args[2]] = {
          playtime: 0,
        }
        edit('./data/playtime.json', playtimecfg)
        
        
        var toWhitelist = new whitelisted(`${args[2]}`, `${addUser.id}`, '', '0', '0', '0', '0')
        whitelist[addUser.id] = toWhitelist
        toConvert = convertYml.stringify(whitelist);
        fs.writeFile('./data/whitelist.yml', toConvert, function (err) {})
        s(message.channel.id, `<@${addUser.id}> is now linked to \`${args[2]}\``)
    break;

    case 'whitelist':
      if(!args[1]) return invalid(message.channel.id, 'list|add|remove|clean|clear')
      switch(args[1].toLowerCase()) {
        case 'list':
          var listArray = []
          for(let i in whitelist) {
            listArray.push(`<@${whitelist[i].id}> - ${whitelist[i].ign}`)
          }
          if(!args[2]) {
            var pagedArray = listArray.slice((1 - 1) * 10, (1 -1) * 10 + 10)           

            var whitelistPage1 = new Discord.MessageEmbed().setColor(cfg.discord.color)
            .setTitle(`Whitelist List - Page ${1} of ${Math.ceil((listArray.length)/10)}`)
            .setDescription(pagedArray.join('\n'))
            .setTimestamp()
            .setFooter('Xenon Factions Bot')

            message.channel.send(whitelistPage1)
          } else {
            if(!parseFloat(args[2])) return em(message.channel.id, 'Invalid page number provided')
            var pagedArray = listArray.slice((args[2] - 1) * 10, (args[2] -1) * 10 + 10)           

            var whitelistPage = new Discord.MessageEmbed().setColor(cfg.discord.color)
            .setTitle(`Whitelist List - Page ${args[2]} of ${Math.ceil((listArray.length)/10)}`)
            .setDescription(pagedArray.join('\n'))
            .setTimestamp()
            .setFooter('Xenon Factions Bot')

            message.channel.send(whitelistPage)
          }; break;

        case 'add':
        if(message.channel.id !== cfg.channels.whitelist) return em(message.channel.id, 'This command can only be ran in <#' + cfg.channels.whitelist + '>')
        let toWhitelistMember = message.mentions.users.first() || message.author;

        function makeid(length) {
          var result = "";
          var characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          var charactersLength = characters.length;
          for (var i = 0; i < length; i++) {
            result += characters.charAt(
              Math.floor(Math.random() * charactersLength)
            );
          }
          result = result
          return result;
        }
  
        var whitelistCode = makeid(16);
        awaitingWhitelist.push(`${toWhitelistMember.id}-${whitelistCode}`)

        toWhitelistMember.send(new MessageEmbed().setColor(cfg.discord.color).setDescription(
          "Your code is `" + toWhitelistMember.id + "-" + whitelistCode +
            "`\n\nUse `" + cfg.discord.prefix + "whitelist " +
            `${toWhitelistMember.id}-${whitelistCode}\` in faction chat to  be whitelisted\n\n` +
            "Server: "+ `${cfg.bot.server_ip}`
        )); break;

        case 'remove':
        if(roleCheck() == false) return;
        let toRemove = message.mentions.users.first()
        if(!toRemove) {
        if(args[0]) {
          toRemove = args[0]
          toRemove.id = args[0]
        } else { return em(message.channel.id, 'This user has not been whitelisted')}
      }
    let check = whitelist[toRemove.id]
    if(!check) return em(message.channel.id, 'This user has not been whitelisted')
    delete whitelist[message.mentions.users.first().id || args[0]]

    let toRemoveConvert = convertYml.stringify(whitelist);
    fs.writeFile('./data/whitelist.yml', toRemoveConvert, function (err) {})

    m(message.channel.id, 'User has been removed the whitelist'); break;

        case 'clean':
    if(roleCheck() == false) return;

    let amt = 0;
      for (let i in whitelist) {
      if(!bot.users.cache.get(whitelist[i].id)) {
        amt++
        delete whitelist[i]
      }
    }
    let toCleanConvert = convertYml.stringify(whitelist);
    fs.writeFile('./data/whitelist.yml', toCleanConvert, function (err) {})

    return m(message.channel.id, `${amt} Users have been cleaned from the whitelist`); break;

        case 'clear':
      if(roleCheck() == false) return;
      whitelist = {}
      let toClearConvert = convertYml.stringify(whitelist);
      fs.writeFile('./data/whitelist.yml', toClearConvert, function (err) {})
      m(message.channel.id, 'Whitelist data has been cleared'); break;}; break;

    case 'rotate':
    let cf;
    let rotateuU= message.author.id
    for(let i in whitelist) {
      if(whitelist[i].id == rotateuU) cf = whitelist[i];
    }
    if(!cf) return em(message.channel.id, `You are not whitelisted!`)
      let player = false;

      let toKick = bot.users.cache.get(args[1]) || message.mentions.users.first()
      if(!toKick) {
        toKick = args[1]
          player = true;
      }
      if(!toKick) return em(message.channel.id, 'Invalid user/ign provided to rotate out')

      if(player == false) {

      rotateSearch = true;

      let check = null;
      let toKickID = toKick.id
      for(let i in whitelist) {
      if(whitelist[i].id == toKickID) {check = whitelist[i];toKick = whitelist[i].ign}
      }
      if(!check) return em(message.channel.id, 'Invalid user/ign provided to rotate out')
      mc.chat('/f kick ' + check.ign)
      mc.chat(cfg.commands.rotate + check.ign)

  setTimeout(() => {
      rotateSearch = false;
      if (rotateOutput == "") return;
      if (rotateOutput == null) return;

      const embed = new Discord.MessageEmbed()
        .setColor(cfg.discord.color)
        .setDescription("```" + rotateOutput.join("\n") + "```");

      message.channel.send(embed);

      rotateOutput = [];
  }, 750)

  } else {

      rotateSearch = true;

      mc.chat('/f kick ' + toKick)
      mc.chat(cfg.commands.rotate + cf.ign)

      setTimeout(() => {
          rotateSearch = false;
          if (rotateOutput == "") return;
          if (rotateOutput == null) return;
    
          const embed = new Discord.MessageEmbed()
            .setColor(cfg.discord.color)
            .setDescription("```" + rotateOutput.join("\n") + "```");
    
          message.channel.send(embed);
    
          rotateOutput = [];
      }, 750)
  }; break;

    case 'withdraw': 
    if(!cfg.channels.bank) return em(message.channel.id, "No `bank` channel set.")
    if(roleCheck() == false) return;
    
    let withdrawCf;
    let withdrawU = message.author.id
    for(let i in whitelist) {
      if(whitelist[i].id == withdrawU) withdrawCf = whitelist[i];
    }
    if(!withdrawCf) return em(message.channel.id, `You are not whitelisted!`)
    let withdrawAmount = parseFloat(args[1])

      if(!withdrawAmount) return invalid(message.channel.id, 'amount')

    if (cfg.bot.pay_twice == true) {
      withdrawSearch = true;

      mc.chat(`${cfg.commands.pay} ${withdrawCf.ign} ${withdrawAmount}`)
      mc.chat(`${cfg.commands.pay} ${withdrawCf.ign} ${withdrawAmount}`)

  setTimeout(() => {
    withdrawSearch = false;
    if (withdrawOutput == "") return;
    if (withdrawOutput == null) return;

    const embed = new Discord.MessageEmbed()
      .setColor(cfg.discord.color)
      .setDescription("```" + withdrawOutput.join("\n") + "```");

    message.channel.send(embed);

    if(withdrawOutput.join('\n').includes('not')) {
      withdrawOutput = [];
        return;
    } else {
    m(cfg.channels.bank, `💰 ${message.author}(${withdrawCf.ign}) has withdrawn $${withdrawAmount}`)
    
    withdrawOutput = [];
    }
  }, 750);
  
} else {
  withdrawSearch = true;
  
  mc.chat(`${cfg.commands.pay} ${withdrawCf.ign} ${withdrawAmount}`)
  
  setTimeout(() => {
      withdrawSearch = false;
      if (withdrawOutput == "") return;
      if (withdrawOutput == null) return;
      
      const embed = new Discord.MessageEmbed()
      .setColor(cfg.discord.color)
      .setDescription("```" + withdrawOutput.join("\n") + "```");
      
      message.channel.send(embed);
      if(withdrawOutput.join('\n').includes('not')){
        withdrawOutput = [];
           return;
      } else {
      m(cfg.channels.bank, `💰 ${message.author}(${withdrawCf.ign}) has withdrawn $${withdrawAmount}`)

      withdrawOutput = [];
      }
  }, 750)

  }; break;
  
  function macro() {
    macroInterval = setTimeout(() => {
            macroSearch = true
  
            mc.chat(cfg.macro.macro_command)
            setTimeout(() => {
              macroSearch = false;
              if (macroOutput == "") return;
              if (macroOutput == null) return;
        
              const embed = new Discord.MessageEmbed()
                .setColor(cfg.discord.color)
                .setTitle(`Macro command - ${cfg.macro.macro_command}`)
                .setDescription("```" + macroOutput.join("\n") + "```");  
              
                let macro_channel = bot.channels.cache.get(cfg.channels.macro)
                if(!macro_channel) return invalidChannel('cfg.channels.macro')
                macro_channel.send(embed)
        
              macroOutput = [];
          }, 750)
        macro(macroInterval)
  
    }, cfg.macro.macro_delay * 1000)
  }
    case 'macro':
      if(roleCheck() == false) return;
      if(!args[1]) return m(message.channel.id, `**Macro help message**\n${cfg.discord.prefix}macro start - Starts the macro\n${cfg.discord.prefix}macro delay - Sets the delay between the macro\n${cfg.discord.prefix}macro command - Sets the command the bot tyes for the macro in game.`) 
      switch(args[1].toLowerCase()) {
        case 'start': 
        macro()
        s(message.channel.id, 'Macro enabled.') ; break;
        case 'delay':
          if(!args[2]) return em(message.channel.id, `Please provide a macro time delay in seconds\n${cfg.discord.prefix}macro delay 10`);
          if(!parseFloat(args[2]))return em(message.channel.id, 'Please provide an interval time in seconds')
          cfg.macro.macro_delay = args[2];
          var toConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', toConvert, function (err) {})
          return s(message.channel.id, 'Macro delay set to `' + args[2] + '`') ; break;
        case 'command':
          if(!args[2]) return em(message.channel.id, `Please provide a macro command\n${cfg.discord.prefix}macro command /f top`);
          cfg.macro.macro_command = args.slice(2).join(" ")
          var toConvert = convertYml.stringify(cfg);
          fs.writeFile('./config.yml', toConvert, function (err) {})
          return s(message.channel.id, 'Macro command set to `' + args.slice(2).join(" ") + '`'); break;
      }; break

      function playtop() {
        let playtimeTotal = []
        let playtimeOutpost = []
        for (let i in playtimecfg) {
          playtimeTotal.push({
            playtime: playtimecfg[i].playtime,
            id: i
          })
        }
        playtimeTotal = playtimeTotal.sort((a, b) => parseFloat(b.walls) - parseFloat(a.walls))
        for (let x = 0; x < 15; x++) {
            if (playtimeTotal[x]) {
              playtimeOutpost.push(`**${x + 1}.** ${playtimeTotal[x].id} - ${playtimeTotal[x].playtime < 3600 ? math.evaluate(playtimeTotal[x].playtime / 60).toFixed(2) + " Minutes" : math.evaluate(playtimeTotal[x].playtime / 3600).toFixed(2) + " Hours"}`);
            } else {
                break;
            }
        }
        var PlaytimeTotalEmbed = new Discord.MessageEmbed()
        .setColor(cfg.discord.color)
        .setTitle('Leaderboard - Playtime')
        .setDescription(playtimeOutpost.join('\n'))
      
        return message.channel.send(PlaytimeTotalEmbed)
      }
    case 'playtime':
      if(!args[1]) return em(message.channel.id, `Invalid syntax: ${cfg.discord.prefix}playtime [Top|Reset]`)
      switch(args[1].toLowerCase()) {
        case 'reset':
          if(roleCheck() == false) return;
          if (!args[1]) return em(message.channel.id, "Missing Argument: " + cfg.discord.prefix + "reset playtime")
          for (let i in playtimecfg) {
          playtimecfg[i].playtime = 0
        }
      
            toConvert = convertYml.stringify(playtimecfg);
          fs.writeFile('./data/playtime.yml', toConvert, function (err) {})
            return s(message.channel.id, 'Playtime data has been reset.') ; break;
        case 'top':
          playtop(); break;
      } ; break;
    case 'playtop':
      playtop(); break;

      function dtop() {
        let depositTotal = []
        let depositOutpost = []
        for (let i in whitelist) {
          depositTotal.push({
            walls: whitelist[i].deposits,
            id: whitelist[i].id
          })
        }
        depositTotal = depositTotal.sort((a, b) => parseFloat(b.walls) - parseFloat(a.walls))
        for (let x = 0; x < 15; x++) {
            if (depositTotal[x]) {
              depositOutpost.push(`**${x + 1}.** <@${bot.users.cache.get(depositTotal[x].id).id}> - ${formatter.format(depositTotal[x].walls)}`);
            } else {
                break;
            }
        }
        var DepositsTotalEmbed = new Discord.MessageEmbed()
        .setColor(cfg.discord.color)
        .setTitle('Leaderboard - Deposits')
        .setDescription(depositOutpost.join('\n'))
      
        return message.channel.send(DepositsTotalEmbed)
      }
    case 'deposits':
      case 'deposit':
        if(!args[1]) return em(message.channel.id, `Invalid syntax: ${cfg.discord.prefix}deposits [Top|Reset]`)
          switch (args[1].toLowerCase()) {
            case 'reset':
            if(roleCheck() == false) return;
            if (!args[1]) return em(message.channel.id, "Missing Argument: " + cfg.discord.prefix + "reset deposits")
            for (let i in whitelist) {
            whitelist[i].deposits = 0
          }
          toConvert = convertYml.stringify(whitelist);
          fs.writeFile('./data/whitelist.yml', toConvert, function (err) {})
              return s(message.channel.id, 'Deposits data has been reset.')
            
          case 'top': dtop(); 
          }; break
    case 'dtop':
      dtop(); break;

      function btop() {
        let bufferTotal = []
        let bufferOutput = []
        for (let i in whitelist) {
          bufferTotal.push({
            walls: whitelist[i].buffers,
            id: whitelist[i].id
          })
        }
        bufferTotal = bufferTotal.sort((a, b) => parseFloat(b.buffers) - parseFloat(a.buffers))
        for (let x = 0; x < 15; x++) {
            if (bufferTotal[x]) {
              bufferOutput.push(`**${x + 1}.** <@${bot.users.cache.get(bufferTotal[x].id).id}> - ${bufferTotal[x].walls}`);
            } else {
                break;
            }
        }
      
        var bufferTotalEmbed = new Discord.MessageEmbed()
        .setColor(cfg.discord.color)
        .setTitle('Leaderboard - Bufferchecks')
        .setDescription(bufferOutput.join('\n'))
      
        return message.channel.send(bufferTotalEmbed)
      }
      case 'buffers':
        case 'buffer':
          if(!args[1]) return em(message.channel.id, 'Invalid Syntax: ' + cfg.discord.prefix + 'buffers [Top|Reset]')        
          switch (args[1].toLowerCase()) {
            case 'reset':
              if(roleCheck() == false) return;
              if (!args[0]) return em(message.channel.id, "Missing Argument: " + cfg.discord.prefix + "reset Buffers")
              for (let i in whitelist) {
                whitelist[i].buffers = 0
              }
              toConvert = convertYml.stringify(whitelist);
              fs.writeFile('./data/whitelist.yml', toConvert, function (err) {})
                return s(message.channel.id, 'Buffers data has been reset.')
            case 'top':
              btop()
          }; break
          case 'btop':
            btop(); break;
        
      function ctop() {
        let wallTotal = []
        let wallOutput = []
          for (let i in whitelist) {
            wallTotal.push({
              walls: whitelist[i].walls,
              id: whitelist[i].id
            })
          }
          wallTotal = wallTotal.sort((a, b) => parseFloat(b.walls) - parseFloat(a.walls))
          for (let x = 0; x < 15; x++) {
              if (wallTotal[x]) {
                  wallOutput.push(`**${x + 1}.** <@${bot.users.cache.get(wallTotal[x].id).id}> - ${wallTotal[x].walls}`);
              } else {
                  break;
              }
          }
        
          var wallTotalEmbed = new Discord.MessageEmbed()
          .setColor(cfg.discord.color)
          .setTitle('Leaderboard - Wallchecks')
          .setDescription(wallOutput.join('\n'))
        
          return message.channel.send(wallTotalEmbed)
        }
      
        case 'walls':
          case 'wall':
            if(!args[1]) return em(message.channel.id, 'Invalid Syntax: ' + cfg.discord.prefix + 'walls [Top|Reset]')
            switch (args[1].toLowerCase()) {
              case 'reset':
                if(roleCheck() == false) return;
                if (!args[0]) return em(message.channel.id, "Missing Argument: " + cfg.discord.prefix + "reset Buffers")
                for (let i in whitelist) {
                whitelist[i].walls = 0
              }
              toConvert = convertYml.stringify(whitelist);
              fs.writeFile('./data/whitelist.yml', toConvert, function (err) {})
                  return s(message.channel.id, 'Walls data has been reset.')
              case 'top':
                ctop()
            }; break
            case 'ctop':
              ctop(); break;
      
      function rposttop() {
        let rpostTotal = []
        let rpostOutput = []
          for (let i in whitelist) {
            rpostTotal.push({
              routpostchecks: whitelist[i].routpostchecks,
              id: whitelist[i].id
            })
          }
          rpostTotal = rpostTotal.sort((a, b) => parseFloat(b.routpostchecks) - parseFloat(a.routpostchecks))
          for (let x = 0; x < 15; x++) {
              if (rpostTotal[x]) {
                rpostOutput.push(`**${x + 1}.** <@${bot.users.cache.get(rpostTotal[x].id).id}> - ${rpostTotal[x].routpostchecks}`);
              } else {
                  break;
              }
          }
        
          var rpostTotalEmbed = new Discord.MessageEmbed()
          .setColor(cfg.discord.color)
          .setTitle('Leaderboard - Raiding Outpost Checks')
          .setDescription(rpostOutput.join('\n'))
        
          return message.channel.send(rpostTotalEmbed)
        }

        case 'rpost':
          case 'routpost':
            if(!args[1]) return em(message.channel.id, 'Invalid Syntax: ' + cfg.discord.prefix + 'rpost [Top|Reset]')
            switch (args[1].toLowerCase()) {
              case 'reset':
                if(roleCheck() == false) return;
                if (!args[0]) return em(message.channel.id, "Missing Argument: " + cfg.discord.prefix + "reset rpost")
                for (let i in whitelist) {
                whitelist[i].routpostchecks = 0
              }
              toConvert = convertYml.stringify(whitelist);
              fs.writeFile('./data/whitelist.yml', toConvert, function (err) {})
                  return s(message.channel.id, 'Raiding Outpost data has been reset.')
              case 'top':
                rposttop()
            }; break
            case 'rposttop':
              rposttop(); break;

    case 'stats':
      let statsuser = bot.users.cache.get(args[1]) || message.mentions.users.first() || message.author
      let stats = null
      
      for (let i in whitelist) {
        if(whitelist[i].id == statsuser.id) {
          stats = whitelist[i]
        }
      }
      if(!stats) return em(message.channel.id, `${statsuser} is not in the whitelist database.`)
      const embedstats = new Discord.MessageEmbed()
      .setColor(cfg.discord.color)
      .setTitle(`Statistics`)
      .setDescription(`**Username: **`+"`"+`${stats.ign}`+"`"+`  \n **Discord User:** <@${bot.users.cache.get(stats.id).id}> \n **Discord ID: ** `+"`"+`${stats.id}`+"`"+`\n **Paypal: ** \`${stats.paypal}\`\n **Wall checks: ** `+"`"+`${stats.walls}`+"`"+` \n **Buffer checks: ** `+"`"+`${stats.buffers}`+"`"+` \n **Routpost Checks: ** `+"`"+`${stats.routpostchecks}`+"`"+` \n **Deposits: ** `+"`"+`${formatter.format(stats.deposits)}`+"`"+` \n **Playtime: ** `+"`"+`${stats.playtime < 3600 ? math.evaluate(stats.playtime / 60).toFixed(2) + " Minutes" : math.evaluate(stats.playtime / 3600).toFixed(2) + " Hours"}`+"`"+``);
  
      message.channel.send(embedstats);break

    case 'serverinfo':
      const serverinfoembed = new Discord.MessageEmbed()
  .setColor(cfg.discord.color)
  .setTimestamp()
  .setThumbnail(message.guild.iconURL())
  .setTitle(`${message.guild.name}`)
  .setDescription(`__**General Information**__ \n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**Server Owner:** ${message.guild.owner}\n**Creation Date:** ${message.guild.createdAt}\n**Region**: ${message.guild.region}\n\n__**Count**__\n**Member Count:** ${message.guild.memberCount}\n**Channel Count:** ${message.guild.channels.cache.size}\n**Role Count:** ${message.guild.roles.cache.size}\n\n__**Role List**__\n ${message.guild.roles.cache.map(role => role)}`)
  message.channel.send(serverinfoembed); break;

    case 'avatar':
      let avatarUser = bot.users.cache.get(args[1]) || message.mentions.users.first() || message.author
      var embed = new Discord.MessageEmbed()
      .setColor(cfg.discord.color)
      .setImage(avatarUser.displayAvatarURL({ dynamic: true }))
      .setDescription("Username: "+"`"+avatarUser.tag+"`"+"\n ID: "+"`"+avatarUser.id+"`")
      message.channel.send(embed) ; break;

    case 'botstats':
  const os = require('os')
  const cpuStat = require("cpu-stat");
  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return em(message.channel.id, 'Something went wrong... `' + `${err}\``)
    }
   
  var pckge = fs.readFileSync('./package.json')
  var package = JSON.parse(pckge)

   let hours = Math.floor((bot.uptime / 3600) % 24);
   let mins = Math.floor((bot.uptime / 60) % 60);

    let embedStats = new Discord.MessageEmbed()
   .setTitle("** Stats **")
   .setThumbnail(bot.user.displayAvatarURL({format:'png'}))
   .setColor(cfg.discord.color)
   .addField("• Product", `${package.name}`, true)
   .addField("• Author", `Pastor & Tah`, true)
   .addField("• Version", `${package.version}`, true)
   .addField("• Description", `${package.description}`, false)
   .addField("• Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
   .addField("• CPU usage", `\`${percent.toFixed(2)}%\``,true)
   .addField("• Uptime ", `${hours}h ${mins}m`, true)
   .setTimestamp()

   message.channel.send(embedStats)
}); break;

    case 'play':
      case 'p':
        if(ffmpegInstalled == false) return em(message.channel.id, 'FFMPEG is not installed on your host')
        if(!cfg.modules.music == true) return em(message.channel.id, 'Music module is disabled, please enable it to use this command.')
        if(!args.slice(1).join(' ')) return invalid(message.channel.id, 'song')
        let invalidSong = false;
        try {
          const results = await youtube.searchVideos(args.slice(1).join(' '), 1).catch(() => {invalidSong = true});
          let id;
          let title;
        if(invalidSong == true) {return em(message.channel.id, 'Song could not be found')}
          results.map((video, index) => {
            id = video.shortURL
            title = video.title
          })
            execute(id, serverQueue);
    
        } catch (error) {
          message.reply(error.message).catch(() => {});
        }; break;

    case 'skip':
      case 's':
        if(ffmpegInstalled == false) return em(message.channel.id, 'FFMPEG is not installed on your host')
        if(!cfg.modules.music == true) return em(message.channel.id, 'Music module is disabled, please enable it to use this command.')
        skip(message, serverQueue); break;

    case 'stop':
      if(ffmpegInstalled == false) return em(message.channel.id, 'FFMPEG is not installed on your host')
      if(!cfg.modules.music == true) return em(message.channel.id, 'Music module is disabled, please enable it to use this command.')
      stop(message, serverQueue); break;

    case 'mclear':
      if(ffmpegInstalled == false) return em(message.channel.id, 'FFMPEG is not installed on your host')
      if(!cfg.modules.music == true) return em(message.channel.id, 'Music module is disabled, please enable it to use this command.')
      clear(message, serverQueue); break;

    case 'nowplaying':
      case 'np':
        if(ffmpegInstalled == false) return em(message.channel.id, 'FFMPEG is not installed on your host')
        if(!cfg.modules.music == true) return em(message.channel.id, 'Music module is disabled, please enable it to use this command.')
      if(serverQueue) {
      m(message.channel.id, `${serverQueue.songs[0] ? `**Now Playing:**\n\n   ${serverQueue.songs[0].title}`: `**There are no songs currently playing**`}`)
      return
    } else {
      m(message.channel.id, `**There are no songs currently playing**`)
    }; break;

    case 'queue':
      case 'q':
        if(ffmpegInstalled == false) return em(message.channel.id, 'FFMPEG is not installed on your host')
        if(!cfg.modules.music == true) return em(message.channel.id, 'Music module is disabled, please enable it to use this command.')
          let queueText = ""
          let inQ = 0;
          if(!serverQueue || !serverQueue.songs[0]) return m(message.channel.id, 'There are currently no songs in the queue')
          serverQueue.songs.forEach(song => {
            inQ++
            queueText += `**${inQ}.** ${song.title}\n\n`
          })
          var queueEmbed = new MessageEmbed().setColor(cfg.discord.color).setDescription(queueText).setTimestamp()
          message.channel.send(queueEmbed); break;

    case 'clear':
      case 'checked':
    if(cfg.modules.walls == false) return em(message.channel.id, 'Wall Checks are currently disabled.')
    if(cfg.bot.grace == true) return em(message.channel.id, 'Grace Period is currently enabled.')
    let whitelistUser_walls;
    for(let i in whitelist) {
      if(whitelist[i].id == message.author.id) whitelistUser_walls = whitelist[i];
    }
    if(!whitelistUser_walls) return em(message.channel.id, `You are not whitelisted!`)
    

          clearTimeout(walls_timer)

          whitelistUser_walls.walls = (parseFloat(whitelistUser_walls.walls) + 1)
          toConvert = convertYml.stringify(whitelist);
          fs.writeFile('./data/whitelist.yml', toConvert, function (err) {})

          const clearWembed = new Discord.MessageEmbed()
          .setThumbnail(`https://minotar.net/avatar/${whitelistUser_walls.ign}`)
          .setAuthor(` ${message.guild.name} - 📃 Walls Checked`)
          .setTitle(`✅ \_\_${message.author.username}\_\_ has marked the Walls as clear using the command \`${cfg.discord.prefix}clear\`.`)
          .addField(`**Checked By**`, '<@' + message.author.id + '>', true)
          .addField(`**Total Checks**`, whitelistUser_walls.walls, true)
          .addField(`**Last Checked**`, lastTime + ' minutes ago', true)
          .setColor(cfg.discord.color)
          .setTimestamp()
          .setFooter(`Xenon Factions Bot`, message.guild.iconURL());


          bot.channels.cache.get(cfg.channels.walls).send(clearWembed)
          mc.chat('/f c f')
          setTimeout(() => {
            mc.chat('[Walls] ' + whitelistUser_walls.ign + ` has marked the walls as clear. Total Checks: ${whitelistUser_walls.walls}`)
          }, 100)

          walls(cfg, cfg.channels.walls, int, mc); break;

    case 'rpostclear':
      case 'rpostchecked':
        if(cfg.modules.routpost == false) return em(message.channel.id, 'Routpost Checks is currently disabled.')
    
  let whitelistUser_rpost;
  for(let i in whitelist) {
    if(whitelist[i].id == message.author.id) whitelistUser_rpost = whitelist[i];
  }
  if(!whitelistUser_rpost) return em(message.channel.id, `You are not whitelisted!`)

        clearTimeout(routpost_timer)


        whitelistUser_rpost.routpostchecks = (parseFloat(whitelistUser_rpost.routpostchecks) + 1)
        toConvert = convertYml.stringify(whitelist);
        fs.writeFile('./data/whitelist.yml', toConvert, function (err) {})

        const clearRembed = new Discord.MessageEmbed()
        .setThumbnail(`https://minotar.net/avatar/${whitelistUser_rpost.ign}`)
        .setAuthor(` ${message.guild.name} - 📃 Raiding Outpost Checked`)
        .setTitle(`✅ \_\_${message.author.username}\_\_ has marked the Routpost as clear using the command \`${cfg.discord.prefix}rpostclear\`.`)
        .addField(`**Checked By**`, '<@' + message.author.id + '>', true)
        .addField(`**Total Checks**`, whitelistUser_rpost.routpostchecks, true)
        .addField(`**Last Checked**`, lastTimeRoutpost + ' minutes ago', true)
        .setColor(cfg.discord.color)
        .setTimestamp()
        .setFooter(`Xenon Factions Bot`, message.guild.iconURL());


        bot.channels.cache.get(cfg.channels.routpost).send(clearRembed)
              mc.chat('/f c f')
        setTimeout(() => {
          mc.chat('[Routpost] ' + whitelistUser_rpost.ign + ` has marked the routpost as clear. Total Checks: ${whitelistUser_rpost.routpostchecks}`)
        }, 1000)

        rroutpost(cfg, cfg.channels.routpost, int, mc); break;

    case 'bclear':
      case 'bchecked':
        if(cfg.modules.buffers == false) return em(message.channel.id, 'Buffer Checks are currently disabled.')
        if(cfg.bot.grace == true) return em(message.channel.id, 'Grace Period is enabled.')
    let whitelistUser_buffers;
    for(let i in whitelist) {
      if(whitelist[i].id == message.author.id) whitelistUser_buffers = whitelist[i];
    }
    if(!whitelistUser_buffers) return em(message.channel.id, `You are not whitelisted!`)

        clearTimeout(buffers_timer)

        whitelistUser_buffers.buffers = (parseFloat(whitelistUser_buffers.buffers) + 1)
        toConvert = convertYml.stringify(whitelist);
        fs.writeFile('./data/whitelist.yml', toConvert, function (err) {})

        const clearBembed = new Discord.MessageEmbed()
        .setThumbnail(`https://minotar.net/avatar/${whitelistUser_buffers.ign}`)
        .setAuthor(` ${message.guild.name} - 📃 Buffers Checked`)
        .setTitle(`✅ \_\_${message.author.username}\_\_ has marked the Walls as clear using the command \`${cfg.discord.prefix}bclear\`.`)
        .addField(`**Checked By**`, '<@' + message.author.id + '>', true)
        .addField(`**Total Checks**`, whitelistUser_buffers.buffers, true)
        .addField(`**Last Checked**`, lastTimeBuffers + ' minutes ago', true)
        .setColor(cfg.discord.color)
        .setTimestamp()
        .setFooter(`Xenon Factions Bot`, message.guild.iconURL());


        bot.channels.cache.get(cfg.channels.buffers).send(clearBembed)
        mc.chat('/f c f')
        setTimeout(() => {
            mc.chat('[Buffers] ' + whitelistUser_buffers.ign + ` has marked the buffers as clear. Total Checks: ${whitelistUser_buffers.buffers}`)
        }, 2000)

        buffers(cfg, cfg.channels.buffers, intBuffers, mc); break;

    case 'grace':
      if(!args[1]) return invalid(message.channel.id, 'enable/disable duration (eg: 12h)')
      if(!args[2]) return invalid(message.channel.id, 'enable/disable duration (eg: 12h)')
    if(args[1].toLowerCase() == 'enable' || args[1].toLowerCase() == 'enabled') {
        let Timer = args[2];
    
        if (args[2] <= 0) {
          return em(message.channel.id, "Please enter a valid time period");
        }

        cfg.bot.grace = true;
        toConvert = convertYml.stringify(cfg);
        fs.writeFile('./config.yml', toConvert, function (err) {})

        clearTimeout(walls_timer)
        clearTimeout(buffers_timer)

        s(message.channel.id, 'Grace has been enabled for: ' + `${ms(ms(Timer), { long: true })}`)

        setTimeout(() => {
            cfg.bot.grace = false
        toConvert = convertYml.stringify(cfg);
      fs.writeFile('./config.yml', toConvert, function (err) {})

            walls(cfg, cfg.channels.walls, int, mc)
            buffers(cfg, cfg.channels.buffers, intBuffers, mc)
        }, ms(Timer))

    } else if(args[1].toLowerCase() == 'disable' || args[1].toLowerCase() == 'disabled') {
        cfg.bot.grace = false;
          toConvert = convertYml.stringify(cfg);
      fs.writeFile('./config.yml', toConvert, function (err) {})

        return s(message.channel.id, 'Grace has been disabled')
    } else invalid(message.channel.id, 'enable/disable duration (eg: 12h)'); break;

    case 'weewoo':
      if(!args[1]) return invalid(message.channel.id, '<on|off>')

        if(args[1] == 'on') {
            if(cfg.bot.grace !== false) return em(message.channel.id, 'You can not enable weewoo while on grace!')
            if(wee == true) return em(message.channel.id, 'WeeWoo has already been enabled.')
            
            let weewoo_user;
    for(let i in whitelist) {
      if(whitelist[i].id == message.author.id) weewoo_user = whitelist[i];
    }
    if(!weewoo_user) return em(message.channel.id, `You are not whitelisted!`)

                m(message.channel.id, "WeeWoo has been enabled.")
                clearTimeout(walls_timer)
                clearTimeout(buffers_timer)
                
                wee = true;
        weewoo(cfg, cfg.channels.weewoo, intWeewoo, mc)

    
} else if(args[1] == 'off') {
    if(wee == true) {
        clearTimeout(weewoo_timer)
        wee = false
        if(cfg.modules.buffers == true) {
        walls(cfg, cfg.channels.walls, int, mc)
        }
        if(cfg.modules.buffers == true) {
        buffers(cfg, cfg.channels.buffers, intBuffers, mc)
        }
        return m(message.channel.id, cfg.other.weewoo_disabled)
    } else return em(message.channel.id, 'WeeWoo has not been enabled')
} else return invalid(message.channel.id, '<on|off>');break

function vanishtracker(yee) {
  mc.tabComplete(`${array[0].replace(/\{a\}/g, yee)}`, async (err, players) => {
    if(players == '') return
    players = players.toString()
    vanishedPlayers.push(`${players}`.split(','))
    vanishedPlayers = vanishedPlayers.toString().split(',')
  })
  for(people of vanishedPlayers) {
  if(mc.players[people] == undefined) {
    if(!inVanish.includes(people)) {inVanish.push(people)}
  }}
};break
  function vanishtracker2(yee) {
    mc.tabComplete(`${array2[0].replace(/\{a\}/g, yee)}`, async (err, players) => {
      if(players == '') return
      players = players.toString()
      vanishedPlayers2.push(`${players}`.split(','))
      vanishedPlayers2 = vanishedPlayers2.toString().split(',')
    })
    for(people of vanishedPlayers2) {
    if(mc.players[people] == undefined) {
      if(!inVanish2.includes(people)) {inVanish2.push(people)}
    }}
};break
      case 'vanish':
        if(!args[1]) return em(message.channel.id, `No method selected (${cfg.discord.prefix}vanish 1/${cfg.discord.prefix}vanish 2)`)
        switch(args[1]) {
          case '1':
            let playersonline = 0
            for(let x in mc.players) {++playersonline}
            const hello = playersonline * 1000 + 5000
            var vanishedPlayers = []
            var array = ['/massivecore click /minecraft:tell {a}']
            let google = 0
            var inVanish = []
            var characters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
            'y', 'z', "1", "2", "3", "4", "5", "6", "7", "8", "9", "_", "0"]
              characters.forEach(staff => {
                google++
                setTimeout(() => {
                  vanishtracker(staff)
              }, 500 * google)
              })
              var vanishembed = new Discord.MessageEmbed()
              .setDescription(`Collecting vanish information, please wait (Time: ${(hello-5000)/1000}s)`).setColor(cfg.discord.color)
              message.channel.send(vanishembed).then(msg => {
                msg.delete({ timeout: hello });})
              setTimeout(() => {
                  message.channel.send(new Discord.MessageEmbed().setColor(cfg.discord.color).setFooter(`NOTE: If a player leaves or joins while it is collecting data, they may appear vanished.`).setDescription(`**Vanished Staff:** ${inVanish.length != 0 ? inVanish.join(", ") : `No Vanished Players`}`))
              }, hello);break

          case '2':
            let playersonline2 = 0
            for(let x in mc.players) {++playersonline2}
            const hello2 = playersonline2 * 1000 + 5000
            var vanishedPlayers2 = []
            var array2 = ['/minecraft:tell {a}']
            let google2 = 0
            var inVanish2 = []
            var characters2 = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
            'y', 'z', "1", "2", "3", "4", "5", "6", "7", "8", "9", "_", "0"]
              characters2.forEach(staff => {
                google2++
                setTimeout(() => {
                  vanishtracker2(staff)
              }, 500 * google2)
              })
              var vanishembed2 = new Discord.MessageEmbed()
              .setDescription(`Collecting vanish information, please wait (Time: ${(hello2 -5000)/1000}s)`).setColor(cfg.discord.color)
              message.channel.send(vanishembed2).then(msg => {
                msg.delete({ timeout: hello2 });})
              setTimeout(() => {
                  message.channel.send(new Discord.MessageEmbed().setColor(cfg.discord.color).setFooter(`NOTE: If a player leaves or joins while it is collecting data, they may appear vanished.`).setDescription(`**Vanished Staff:** ${inVanish2.length != 0 ? inVanish2.join(", ") : `No Vanished Players`}`))
              }, hello2);
          
        };break
    //<----------FUNCTIONS---------->//
    function skip(message, serverQueue) {
      if (!message.member.voice.channel)
        return em(message.channel.id,"You are not in a voice channel");
      if (!serverQueue) {
        return em(message.channel.id, "There are no songs currently playing"); } else {
          if(serverQueue.connection.dispatcher == null) {return em(message.channel.id, "There are no songs currently playing");}
          serverQueue.connection.dispatcher.end();
        }
    }
    
    function stop(message, serverQueue) {
      if (!message.member.voice.channel)
        return em(message.channel.id,
          "You have to be in a voice channel to stop the music!"
        );
      serverQueue.songs = [];
      serverQueue.connection.dispatcher.end();
    }
    
    function clear(message, serverQueue) {
      if (!message.member.voice.channel)
        return em(message.channel.id,
          "You have to be in a voice channel to stop the music!"
        );
      serverQueue.songs = [];
    }
    function play(guild, song, url) {
      const serverQueue = queue.get(guild.id);
      if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
      }
    
      const dispatcher = serverQueue.connection
        .play(ytdl(song.url, { quality: "highestaudio", filter: "audioonly", type: 'opus', highWaterMark: 1 << 25 }))
        .on("finish", () => {
          serverQueue.songs.shift();
          play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
      dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
      m(serverQueue.textChannel.id, `Now playing: **${song.title}**`);
    }
    
    async function execute(id, serverQueue) {
    if(id == undefined) return em(message.channel.id, 'Song could not be found')
    let text = id.toString()
    
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return em(message.channel.id,
        "You need to be in a voice channel to play music"
      );
    
    const songInfo = await ytdl.getInfo(text);
    const song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
    };
    
    if (!serverQueue) {
      const queueContruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
      };
    
      queue.set(message.guild.id, queueContruct);
    
      queueContruct.songs.push(song);
    
      try {
        var connection = await voiceChannel.join();
        queueContruct.connection = connection;
        play(message.guild, queueContruct.songs[0], songInfo.videoDetails);
      } catch (err) {
        console.log(err);
        queue.delete(message.guild.id);
        return message.channel.send(err);
      }
    } else {
      serverQueue.songs.push(song);
      return m(message.channel.id, `${song.title} has been added to the queue!`);
    }}
    }

    })


/*
ftop
ptop
flist
runcmd
sudo
koth
raidevent
baltop
fwho

chatlogs
setupquestions
apply
accept
deny
status
lock
unlock
purge
slowmode
say
embed
restart
listroles
inrole
setign
whitelist
rotate
withdraw
serverinfo
botstats
play | p
skip | s
nowplaying |np
queue | q
stop
mclear

8ball
calc | calculator
pp
gay
*/

bot.on("messageDelete", async (messageDelete) => {
  if(cfg.modules.delete_logs == true) {
  await Discord.Util.delayFor(900);

  const fetchedLogs = await messageDelete.guild.fetchAuditLogs({
    limit: 6,
    type: 'MESSAGE_DELETE'
  }).catch(() => ({
    entries: []
  }));

  if(!messageDelete.author || !messageDelete.author.id) return

  const auditEntry = fetchedLogs.entries.find(a =>
    a.target.id === messageDelete.author.id &&
    a.extra.channel.id === messageDelete.channel.id &&
    Date.now() - a.createdTimestamp < 20000
  );
  
  const DeleteEmbed = new Discord.MessageEmbed()
    .setTitle("DELETED MESSAGE")
    .setColor(cfg.discord.color)
    .addField("Author", messageDelete.author.tag, true)
    .addField("Channel", messageDelete.channel, true)
    .addField("Message", messageDelete.content || "None")
    .setFooter(`Message ID: ${messageDelete.id} | Author ID: ${messageDelete.author.id}`);

  const DeleteChannel = bot.channels.cache.get(cfg.channels.discord_logs);
  if(!DeleteChannel) return invalidChannel('cfg.channel.discord_logs')
  DeleteChannel.send(DeleteEmbed);
  }
})


mc.on('message', async (message) => {
  var checkForName = `${message}`.split(' ')

  if(`${message}`.toLowerCase().includes('whitelist')) {
    let codeValid = false
    let whitelistCode;
    
  if(checkForName.some(r=> awaitingWhitelist.indexOf(r) >= 0) == true) {
    codeValid = true
    checkForName.forEach(code => {
      if(code.match(/[A-z0-9]+-[A-z0-9]+/g)) {
        whitelistCode = code
      }
    })
  }

    if(codeValid == true) {
      checkForName.forEach(argument => {
        var rawUser = argument.replace(/[+-@!*:]+/g, '')
        if(mc.players[rawUser]) {
          let fetchID = whitelistCode.split('-')[0]
            var toWhitelist = new whitelisted(`${rawUser}`, `${fetchID}`, '', '0', '0', '0', '0')
            playtimecfg[rawUser] = {
              playtime: 0,
            }
            edit('./data/playtime.json', playtimecfg)

            whitelist[toWhitelist.id] = toWhitelist
            toConvert = convertYml.stringify(whitelist);
            fs.writeFile('./data/whitelist.yml', toConvert, function (err) {})

            bot.channels.cache.get(cfg.channels.whitelist).send(new MessageEmbed()
              .setColor(cfg.discord.color)
              .setDescription(`:white_check_mark: **Success**\n\n<@${fetchID}> is now linked to \`${rawUser}\``))

            mc.chat('/msg ' + rawUser + ' [WHITELIST] You have been whitelisted.')
  if(awaitingWhitelist.length == 1) {
    awaitingWhitelist = awaitingWhitelist.splice((awaitingWhitelist.indexOf(whitelistCode)), 1)
  }
  if(awaitingWhitelist.length > 1) {
          awaitingWhitelist = awaitingWhitelist.splice((awaitingWhitelist.indexOf(whitelistCode) - 1), 1)
        }
        }
      })
    }
  }
  var user = undefined;
  var validUser = false;

  checkForName.forEach(argument => {
    var rawUser = argument.replace(/[+-@!*:]+/g, '')
    if(mc.players[rawUser]) {
      for(let i in whitelist) {
        if(whitelist[i].ign == rawUser) {
          user = whitelist[i]
        }
      }
    }
  })

  if(user == undefined) return;
  var beforeArgs = `${message}`.split(cfg.discord.prefix)[1]
  if(!beforeArgs) return
  var cmd = beforeArgs.split(' ')[0]
  if(!cmd) return
  var args = beforeArgs.split(' ').slice(1)
  queue = queue
  serverQueue = queue.get(cfg.discord.guild);

  switch (cmd.toLowerCase()) {
    case 'active':
      if(timeout == true) {
        if(user.ign == mc.username) return
        if(!`${activeusers}`.includes(user.ign)) 
          activeusers.push(user.ign)
          console.log(activeusers)
    }; break

    case 'ping':
      mc.chat('pong'); break;

    case 'tps':
      mc.chat(`[TPS] The current tps is: ${mc.getTps()}`)

    case 'stats':
      mc.chat(`[STATS] IGN: ${user.ign}, Dep: ${formatter.format(user.deposits)}, Walls: ${user.walls}, Buffers: ${user.buffers}, Routpost: ${user.routpostchecks}`);break;

    case 'sudo':
      mc.chat(args.join(' ')); break;
    
    case 'runcmd':
      mc.chat(`/${args.join(' ')}`); break;

    case '8ball':
      var ball = ['It is certain.','No doubt about it.','No chance.','Maybe, time will tell.','No way.','Concentrate and try again.', ' As I see it, yes', 'Most likely', 'Better not tell you now', 'My sources say no', 'Signs point to yes', 'Yes definitely', 'It is decidedly so', 'As I see it, yes', 'My sources say no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];
      if(!args[0]) return mc.chat('[8BALL] Please ask a question')
      mc.chat('[8BALL] ' + ball[Math.floor(Math.random () * ball.length)]); break;

    case 'gay':
      mc.chat(`[GAY] You are ` + Math.floor(Math.random () * 100) + `% gay`); break;
    
    case 'pp':
      let ppArray = ["8=>","8==>","8===>","8====>","8=====>","8=========>","8=============>","8============>","8=======>","8==================>"]
      mc.chat('[PP] ' + `${user.ign}: ` + ppArray[Math.floor(Math.random () * ppArray.length)]); break;

    case 'tpa':
      mc.chat(`[TPA] Sending tpa request to ${user.ign}`)
      mc.chat(`/tpa ${user.ign}`); break;

    case 'calc':
      case 'calculator':
        try {
          let answer =  math.evaluate(args.join(' '))
       if (isNaN(answer)) answer = 'Invalid math expression provided';
          mc.chat('[CALC] ' + answer)
        } catch (error) {
          mc.chat('[CALC] Invalid math expression provided')
        }; break;
    
    case 'play':
      case 'p':
          let discordID = user.id
          if(!serverQueue || !serverQueue.songs[0]) return mc.chat('[MUSIC] Please run ' + cfg.discord.prefix + 'play [song] in discord, in order to sync the bot')
          if(!args[0]) return mc.chat('[MUSIC] Please provide a song to play')
          let song = args.join(' ')

                const results = await youtube.searchVideos(song, 1).catch(() => { mc.chat('[MUSIC] Song could not be found')});
                let id; let title;

                results.map((video, index) => {
                  id = video.shortURL
                  title = video.title
                })
                executeIngame(id, discordID, serverQueue);break;

        case 'queue':
          case 'q':
            let text = ""
            let inQ = 0;
            if(!serverQueue || !serverQueue.songs) return mc.chat('[MUSIC] Queue is currently empty')
            serverQueue.songs.forEach(song => {
              inQ++
              text += `${inQ}. ${song.title}, `
            })
            mc.chat(text); break;

        case 'nowplaying':
          case'np':
              if(serverQueue) {
                mc.chat(`${serverQueue.songs[0] ? `Now Playing: ${serverQueue.songs[0].title}`: `There are no songs currently playing`}`)
              } else {
                mc.chat(`[MUSIC] There are no songs currently playing.`)
              };break;

        case 'skip':
          case 's':
                let userGuild = await bot.guilds.cache.get(cfg.discord.guild)
                let skipMember = await userGuild.members.fetch(user.id)
            if (!skipMember.voice.channel) {return mc.chat("[MUSIC] You are not in a voice chat");}
            if (!serverQueue) {return mc.chat("[MUSIC] There are no songs currently playing.");}
            if(serverQueue.connection.dispatcher == null) {return mc.chat("[MUSIC] There are no songs currently playing");}
            serverQueue.connection.dispatcher.end(); break;

    case 'clear':
      case 'checked':
    if(cfg.modules.walls == false) return mc.chat('[WALLS] Wall Checks are currently disabled.')
    if(cfg.bot.grace == true) return mc.chat('[WALLS] Grace Period is currently enabled.')

          clearTimeout(walls_timer)

          user.walls = (parseFloat(user.walls) + 1)
          toConvert = convertYml.stringify(whitelist);
          fs.writeFile('./data/whitelist.yml', toConvert, function (err) {})

          const clearWembed = new Discord.MessageEmbed()
          .setThumbnail(`https://minotar.net/avatar/${user.ign}`)
          .setAuthor(` ${bot.guilds.cache.get(cfg.discord.guild).name} - 📃 Walls Checked`)
          .setTitle(`✅ \_\_${bot.users.cache.get(user.id).username}\_\_ has marked the Walls as clear using the command \`${cfg.discord.prefix}clear\`.`)
          .addField(`**Checked By**`, '<@' + user.id + '>', true)
          .addField(`**Total Checks**`, user.walls, true)
          .addField(`**Last Checked**`, lastTime + ' minutes ago', true)
          .setColor(cfg.discord.color)
          .setTimestamp()
          .setFooter(`Xenon Factions Bot`, bot.guilds.cache.get(cfg.discord.guild).iconURL());

          bot.channels.cache.get(cfg.channels.walls).send(clearWembed)
          mc.chat('/f c f')
          setTimeout(() => {
            mc.chat('[Walls] ' + user.ign + ` has marked the walls as clear. Total Checks: ${user.walls}`)
          }, 100)

          walls(cfg, cfg.channels.walls, int, mc); break;

    case 'rpostclear':
      case 'rpostchecked':
        if(cfg.modules.routpost == false) return mc.chat('[RPOST] Routpost Checks are currently disabled.')
        clearTimeout(routpost_timer)

        user.routpostchecks = (parseFloat(user.routpostchecks) + 1)
        toConvert = convertYml.stringify(whitelist);
        fs.writeFile('./data/whitelist.yml', toConvert, function (err) {})

        const clearRembed = new Discord.MessageEmbed()
        .setThumbnail(`https://minotar.net/avatar/${user.ign}`)
        .setAuthor(` ${bot.guilds.cache.get(cfg.discord.guild).name} - 📃 Raiding Outpost Checked`)
        .setTitle(`✅ \_\_${bot.users.cache.get(user.id).username}\_\_ has marked the Routpost as clear using the command \`${cfg.discord.prefix}rpostclear\`.`)
        .addField(`**Checked By**`, '<@' + user.id + '>', true)
        .addField(`**Total Checks**`, user.routpostchecks, true)
        .addField(`**Last Checked**`, lastTimeRoutpost + ' minutes ago', true)
        .setColor(cfg.discord.color)
        .setTimestamp()
        .setFooter(`Xenon Factions Bot`, bot.guilds.cache.get(cfg.discord.guild).iconURL());


        bot.channels.cache.get(cfg.channels.routpost).send(clearRembed)
              mc.chat('/f c f')
        setTimeout(() => {
          mc.chat('[Routpost] ' + user.ign + ` has marked the routpost as clear. Total Checks: ${user.routpostchecks}`)
        }, 1000)

        rroutpost(cfg, cfg.channels.routpost, int, mc); break;

    case 'bclear':
      case 'bchecked':
        if(cfg.modules.buffers == false) return mc.chat('[BUFFERS] Buffer Checks are currently disabled.')
        if(cfg.bot.grace == true) return mc.chat('[BUFFERS] Grace Period is enabled.')

        clearTimeout(buffers_timer)

        user.buffers = (parseFloat(user.buffers) + 1)
        toConvert = convertYml.stringify(whitelist);
        fs.writeFile('./data/whitelist.yml', toConvert, function (err) {})

        const clearBembed = new Discord.MessageEmbed()
        .setThumbnail(`https://minotar.net/avatar/${user.ign}`)
        .setAuthor(` ${bot.guilds.cache.get(cfg.discord.guild).name} - 📃 Buffers Checked`)
        .setTitle(`✅ \_\_${bot.users.cache.get(user.id).username}\_\_ has marked the Walls as clear using the command \`${cfg.discord.prefix}bclear\`.`)
        .addField(`**Checked By**`, '<@' + user.id + '>', true)
        .addField(`**Total Checks**`, user.buffers, true)
        .addField(`**Last Checked**`, lastTimeBuffers + ' minutes ago', true)
        .setColor(cfg.discord.color)
        .setTimestamp()
        .setFooter(`Xenon Factions Bot`, bot.guilds.cache.get(cfg.discord.guild).iconURL());


        bot.channels.cache.get(cfg.channels.buffers).send(clearBembed)
        mc.chat('/f c f')
        setTimeout(() => {
            mc.chat('[Buffers] ' + user.ign + ` has marked the buffers as clear. Total Checks: ${user.buffers}`)
        }, 2000)

        buffers(cfg, cfg.channels.buffers, intBuffers, mc); break;

    case 'grace':
      if(!args[0]) return mc.chat('[GRACE] Syntax: ' + cfg.discord.prefix + 'grace enable/disable duration(eg: 12h)')
      if(!args[1]) return mc.chat('[GRACE] Syntax: ' + cfg.discord.prefix + 'grace enable/disable duration(eg: 12h)')
    if(args[0].toLowerCase() == 'enable' || args[1].toLowerCase() == 'enabled') {
        let Timer = args[1];
    
        if (args[1] <= 0) {
          return mc.chat("[GRACE] Please enter a valid time period");
        }

        cfg.bot.grace = true;
        toConvert = convertYml.stringify(cfg);
        fs.writeFile('./config.yml', toConvert, function (err) {})

        clearTimeout(walls_timer)
        clearTimeout(buffers_timer)

        mc.chat('[GRACE] Grace has been enabled for: ' + `${ms(ms(Timer), { long: true })}`)

        setTimeout(() => {
            cfg.bot.grace = false
        toConvert = convertYml.stringify(cfg);
      fs.writeFile('./config.yml', toConvert, function (err) {})

            walls(cfg, cfg.channels.walls, int, mc)
            buffers(cfg, cfg.channels.buffers, intBuffers, mc)
        }, ms(Timer))

    } else if(args[0].toLowerCase() == 'disable' || args[1].toLowerCase() == 'disabled') {
        cfg.bot.grace = false;
          toConvert = convertYml.stringify(cfg);
      fs.writeFile('./config.yml', toConvert, function (err) {})

        return mc.chat('[GRACE] Grace has been disabled')
    } else mc.chat('[GRACE] Syntax: ' + cfg.discord.prefix + 'grace enable/disable duration(eg: 12h)'); break;

    case 'weewoo':
      if(!args[0]) return mc.chat('[WEEWOO] ' + cfg.discord.prefix + 'weewoo <on|off>')

        if(args[0] == 'on') {
            if(cfg.bot.grace !== false) return mc.chat('[WEEWOO] You can not enable weewoo while on grace!')
            if(wee == true) return mc.chat('[WEEWOO] WeeWoo has already been enabled.')

                mc.chat("[WEEWOO] WeeWoo has been enabled.")
                clearTimeout(walls_timer)
                clearTimeout(buffers_timer)
                
                wee = true;
        weewoo(cfg, cfg.channels.weewoo, intWeewoo, mc)

    
} else if(args[0] == 'off') {
    if(wee == true) {
        clearTimeout(weewoo_timer)
        wee = false
        if(cfg.modules.buffers == true) {
        walls(cfg, cfg.channels.walls, int, mc)
        }
        if(cfg.modules.buffers == true) {
        buffers(cfg, cfg.channels.buffers, intBuffers, mc)
        }
        return mc.chat('[WEEWOO] Weewoo has been disabled, good work gamers!')
    } else returnmc.chat('[WEEWOO] WeeWoo has not been enabled')
} else mc.chat('[WEEWOO] ' + cfg.discord.prefix + 'weewoo <on|off>'); break;
            
        
  }

  function playIngame(guild, song, url) {
  
    function m(channel, msg) {
      return client.channels.cache.get(channel).send(new MessageEmbed()
      .setColor(cfg.discord.color).setDescription(`${msg}`));
    }
  
    serverQueue = queue.get(guild.id);
    if (!song) {
      serverQueue.voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }
  
    const dispatcher = serverQueue.connection
      .play(ytdl(song.url, {highWaterMark: 1 << 25 }))
      .on("finish", () => {
        serverQueue.songs.shift();
        playIngame(guild, serverQueue.songs[0], url);
      })
      .on("error", error => console.log(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
      if(song.title.length > 90){
        mc.chat(`[MUSIC] Now playing: ${song.title.split('').slice(0, 70).join('')}...`);
      } else {
        mc.chat(`[MUSIC] Now playing: ${song.title}`);
      }
    m(cfg.discord.music, 'Now playing: **' + song.title + '**')
    
  }
  
  
  async function executeIngame(id, discordID, serverQueue) {
    discordID = `${discordID}`
    if(id == undefined) return mc.chat('[MUSIC] Song could not be found.')
      function m(channel, msg) {
        return bot.channels.cache.get(channel).send(new MessageEmbed()
        .setColor(cfg.discord.color).setDescription(`${msg}`));
      }
      
      let fetchGuild = await bot.guilds.fetch(cfg.discord.guild)
      let fetchMember = await fetchGuild.members.fetch(discordID.toString())
      let voiceChannel = await fetchMember.voice.channel
      
      let t = 0
      if(!voiceChannel) {
        if(t == 2) return
        t++
        mc.chat('[MUSIC] Please join a voice channel to play music')
        return
      }
    
      const songInfo = await ytdl.getInfo(id).catch(e => {mc.chat('[MUSIC] Sound could not be found.')});
      if(!songInfo) return mc.chat('[MUSIC] Song could not be found.')
      const song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
      };
    
      if (!serverQueue) {
        const queueContruct = {
          textChannel: cfg.channels.music,
          voiceChannel: voiceChannel,
          connection: null,
          songs: [],
          volume: 5,
          playing: true
        };
    
        queue.set(cfg.discord.guild, queueContruct);
    
        queueContruct.songs.push(song);
    
        try {
          var connection = await voiceChannel.join();
          queueContruct.connection = connection;
          playIngame(bot.guilds.cache.get(cfg.discord.guild), queueContruct.songs[0], songInfo.videoDetails);
        } catch (err) {
          queue.delete(cfg.discord.guild);
        }
      } else {
        serverQueue.songs.push(song);
            if(song.title.length > 90){
              mc.chat(`[MUSIC] ${song.title.split('').slice(0, 60).join('')}... has been added to the queue!`);
            } else {
              mc.chat(`[MUSIC] ${song.title} has been added to the queue!`);
            }
            m(cfg.channels.music, `**${song.title}** has been added to the queue!`);
          
          return
      }
  }
})

bot.on("guildMemberRemove", async (member) => {
  if(!cfg.channels.goodbye) return invalidChannel("cfg.channels.goodbye")
    if (cfg.modules.goodbye_logs == true) {
    var sendChan = bot.channels.cache.get(cfg.channels.goodbye);
    if(!sendChan) invalidChannel('cfg.channels.goodbye')
    const embed = new Discord.MessageEmbed()
        .setColor(cfg.discord.color)
        .setDescription(`${(cfg.other.goodbye_message).replace(/\{member\}/g,'<@' + member.id + '>')}`)
    sendChan.send(embed);
    }
})

bot.on("guildMemberAdd", async (member) => {
  if(!cfg.channels.welcome) return invalidChannel('cfg.channels.welcome')
    if(cfg.modules.welcome_logs == true) {
    var sendChan = bot.channels.cache.get(cfg.channels.welcome);
    if(!sendChan) invalidChannel('cfg.channels.goodbye')
    const embed = new Discord.MessageEmbed()
        .setColor(cfg.discord.color)
        .setDescription(`${(cfg.other.welcome_message).replace(/\{member\}/g,'<@' + member.id + '>')}`)
    sendChan.send(embed);
    }
})
let penabled = cfg.modules.auto_ptop,
    mainPtopInt = parseFloat(cfg.intervals.ptop) * 60 * 1000 + 4000;
setInterval(() => {
  let sendChan = bot.channels.cache.get(cfg.channels.ptop);
  if (!sendChan) return invalidChannel('cfg.channels.ptop');
  if (penabled == true) {
    ptopSearch = true;
    mc.chat(cfg.commands.ptop);

    setTimeout(() => {
      ptopSearch = false;
      if (ptopName == "" || ptopValue == "") return;
      if (ptopName == null || ptopValue == null) return;

      const embed = new Discord.MessageEmbed()
        .setFooter("Xenon Faction Bot")
        .setColor(cfg.discord.color)
        .setTitle("P-Top Update - " + cfg.bot.server_ip)
        .addField("Faction", ptopName.join("\n"), true)
        .addField("Value", ptopValue.join("\n"), true);

      sendChan.send(embed);

      ptopName = [];
      ptopValue = [];
      ptopPos = 0
    }, 750);
  }
}, mainPtopInt);
let tpsEnabled = cfg.modules.auto_tps;

let tpsListInt = parseFloat(cfg.intervals.tps) * 60 * 1000;
setInterval(() => {
  let sendChan = bot.channels.cache.get(cfg.channels.tps);
  if (!sendChan) return invalidChannel('cfg.channels.tps')
  if (tpsEnabled == true) {
    mc.chat("/f c f")
    mc.chat(`The current tps is: ` + mc.getTps())
      const embed = new Discord.MessageEmbed()
        .setFooter("Xenon Faction Bot - " + cfg.bot.server_ip)
        .setColor(cfg.discord.color)
        .setDescription(`The current tps is: ` + mc.getTps());
      sendChan.send(embed);
  }
}, tpsListInt);

let enabled = cfg.modules.auto_ftop;
let mainInt = parseFloat(cfg.intervals.ftop) * 60 * 1000 + 2000;
setInterval(() => {
  let sendChan = bot.channels.cache.get(cfg.channels.ftop);
  if (!sendChan) return invalidChannel('cfg.channels.ftop')
  if (enabled == true) {
    mc.chat(cfg.commands.ftop);
    facSearch = true; setTimeout(() => {
      facSearch = false; if (facName == "" || facValue == "") return; if (facName == null || facValue == null) return;
      let changeArray = []; facName.forEach(name => {
        let fetch = name.split('**')[2]
        if(change[fetch]) {
          changeArray.push(`${change[fetch].change.toString().includes('-') ? "" : "▲"}` + formatter.format(change[fetch].change).replace(/\-/g, '▼').replace(/\$/g, '＄'))
          }
      })

      const embed = new Discord.MessageEmbed()
        .setFooter("Xenon Faction Bot")
        .setThumbnail('https://imgur.com/rt4myYh.png')
        .setColor(cfg.discord.color)
        .setTitle("F-Top Update - " + cfg.bot.server_ip)
        .addField("Faction", facName.join("\n"), true)
        .addField("Value", facValue.join("\n"), true)
        if(!cfg.bot.server_ip.toLowerCase().includes('archon')) {
        embed.addField("Change", changeArray.join("\n"), true);
        }
        sendChan.send(embed);

      facName = [];
      facValue = [];
      facPos
    }, 750);
  }
}, mainInt);

let listEnabled = cfg.modules.auto_flist;
let mainListInt = parseFloat(cfg.intervals.flist) * 60 * 1000;
setInterval(() => {
  let sendChan = bot.channels.cache.get(cfg.channels.flist);
  if (!sendChan) return invalidChannel('cfg.channels.flist')
  if (listEnabled == true) {
    flistSearch = true;
    mc.chat(cfg.commands.flist);
    setTimeout(() => {
      flistSearch = false;
      if (flistOutput == "")
        return sendChan.send(
          new Discord.MessageEmbed()
            .setColor(cfg.discord.color)
            .setDescription(":x: F-List Not Found")
        );
      const embed = new Discord.MessageEmbed()
        .setFooter("Xenon Faction Bot - " + cfg.bot.server_ip)
        .setColor(cfg.discord.color)
        .setTitle("F-List Update")
        .setDescription("```" + flistOutput.join("\n") + "```");
      sendChan.send(embed);

      flistOutput = [];
    }, 750);
  }
}, mainListInt);
//auto hub command every 10mins
setInterval(() => {
  mc.chat(cfg.bot.hub_command)
},600000)
let baltopEnabled = cfg.modules.auto_baltop
let mainBalInt = parseFloat(cfg.intervals.baltop) * 60 * 1000 +7000;
setInterval(() => {
  let sendChan = bot.channels.cache.get(cfg.channels.baltop);
  if (!sendChan) return invalidChannel('cfg.channels.baltop')
  if (baltopEnabled == true) {
    baltopSearch = true;
    mc.chat(cfg.commands.baltop);
  
    setTimeout(() => {
      baltopSearch = false;
      if (baltopOutput == "") return;
      if (baltopOutput == null) return;
  
      console.log(`TOP - ` + baltopOutput[0])
      if(baltopOutput[0].includes('Ordering balances of')) {
        baltopSearch = true;

        setTimeout(() => {
          baltopSearch = false;
          if (baltopOutput == "") return;
          if (baltopOutput == null) return;

          const embed = new Discord.MessageEmbed()
          .setTitle("Baltop")
          .setFooter("Xenon Faction Bot")
          .setColor(cfg.discord.color)
          .setDescription("```" + baltopOutput.join("\n") + "```");
        
        sendChan.send(embed);
    
        baltopOutput = [];
        }, 1500)

      } else {

      
      const embed = new Discord.MessageEmbed()
        .setTitle("Baltop")
        .setFooter("Xenon Faction Bot")
        .setColor(cfg.discord.color)
        .setDescription("```" + baltopOutput.join("\n") + "```");
      
      sendChan.send(embed);
  
      baltopOutput = [];
      }
    }, 1500);
  }
}, mainBalInt); 


function walls(cfg, channel, int, mc) {
  if(cfg.modules.walls !== true) return;
  if(cfg.bot.grace == true) return

  if(walls_timer) { clearTimeout(walls_timer) }
  walls_timer = setTimeout(() => {

      var now = new Date()
      let time = (now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true}))
      bot.channels.cache.get(channel).send(
          `${int == 1 ? '**Check Walls!**' : `**Check Walls** ${(bot.guilds.cache.get(cfg.discord.guild).roles.cache.get(cfg.roles.walls)) ? `<@&${bot.guilds.cache.get(cfg.discord.guild).roles.cache.get(cfg.roles.walls).id}>` : '@everyone'}**!**`}`, {embed: {
              color: `${int == 1 ? '#f59542' : '#FF0000'}`,
              description: `${int == 1 ? "⚠️" : "‼️"} Walls haven\'t been checked in \`` + (int == 1 ? cfg.intervals.walls : cfg.intervals.walls * (int)) + ` minutes\` now at \`` + time + ' GMT`!\nUse `' + cfg.discord.prefix + 'clear` to mark the walls as clear.'
      }}).then(ch => ch.delete({ timeout: parseFloat(cfg.intervals.walls) * 60 * 1000}))

      mc.chat('/f c f')
      setTimeout(() => {
          mc.chat('[Walls] Walls haven\'t been checked in ' + (int == 1 ? cfg.intervals.walls : cfg.intervals.walls * (int - 1)) + ` minutes now at ` + time + ' GMT!')
      }, 2000)

      int++
      lastTime = int == 1 ? cfg.intervals.walls : cfg.intervals.walls * (int - 1)

      walls(cfg, channel, int, mc)
  }, parseFloat(cfg.intervals.walls) * 60 * 1000)
}

function rroutpost(cfg, channel, int, mc) {
  if(cfg.modules.routpost == false) return

  if(routpost_timer) { clearTimeout(routpost_timer) }
  routpost_timer = setTimeout(() => {

      var now = new Date()
      let time = (now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true}))
      bot.channels.cache.get(channel).send(
          `${int == 1 ? '**Check Routpost Walls & Buffers!**' : `**Check Routpost Walls & Buffers** ${(bot.guilds.cache.get(cfg.discord.guild).roles.cache.get(cfg.roles.routpost)) ? `<@&${bot.guilds.cache.get(cfg.discord.guild).roles.cache.get(cfg.roles.routpost).id}>` : '@everyone'}!**`}`, {embed: {
              color: `${int == 1 ? '#f59542' : '#FF0000'}`,
              description: `${int == 1 ? "⚠️" : "‼️"} Routpost hasn\'t been checked in \`` + (int == 1 ? cfg.intervals.routpost : cfg.intervals.routpost * (int)) + ` minutes\` now at \`` + time + ' GMT`!\nUse `' + cfg.discord.prefix + 'rpostclear` to mark the buffers as clear.'
      }}).then(ch => ch.delete({ timeout: parseFloat(cfg.intervals.routpost) * 60 * 1000}))

      mc.chat('/f c f')
      setTimeout(() => {
          mc.chat('[Routpost] Routpost hasn\'t been checked in ' + (int == 1 ? cfg.intervals.routpost : cfg.intervals.routpost * (int - 1)) + ` minutes now at ` + time + ' GMT!')
      }, 2000)

      int++
      lastTimeRoutpost = int == 1 ? cfg.intervals.routpost : cfg.intervals.routpost * (int - 1)

      rroutpost(cfg, channel, int, mc)
  }, parseFloat(cfg.intervals.routpost) * 60 * 1000)
}

function buffers(cfg, channel, int, mc) {
  if(cfg.modules.buffers == false) return
  if(cfg.bot.grace == true) return

  if(buffers_timer) { clearTimeout(buffers_timer) }
  buffers_timer = setTimeout(() => {

      var now = new Date()
      let time = (now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true}))
      bot.channels.cache.get(channel).send(
          `${int == 1 ? '**Check Buffers!**' : `**Check Buffers** ${(bot.guilds.cache.get(cfg.discord.guild).roles.cache.get(cfg.roles.buffers)) ? `<@&${bot.guilds.cache.get(cfg.discord.guild).roles.cache.get(cfg.roles.buffers).id}>` : '@everyone'}**!**`}`, {embed: {
              color: `${int == 1 ? '#f59542' : '#FF0000'}`,
              description: `${int == 1 ? "⚠️" : "‼️"} Buffers haven\'t been checked in \`` + (int == 1 ? cfg.intervals.buffers : cfg.intervals.buffers * (int)) + ` minutes\` now at \`` + time + ' GMT`!\nUse `' + cfg.discord.prefix + 'bclear` to mark the buffers as clear.'
      }}).then(ch => ch.delete({ timeout: parseFloat(cfg.intervals.buffers) * 60 * 1000}))

      mc.chat('/f c f')
      setTimeout(() => {
          mc.chat('[Buffers] Buffers haven\'t been checked in ' + (int == 1 ? cfg.intervals.buffers : cfg.intervals.buffers * (int - 1)) + ` minutes now at ` + time + ' GMT!')
      }, 2000)

      int++
      lastTimeBuffers = int == 1 ? cfg.intervals.buffers : cfg.intervals.buffers * (int - 1)

      buffers(cfg, channel, int, mc)
  }, parseFloat(cfg.intervals.buffers) * 60 * 1000)
}

function weewoo(cfg, channel, int, mc) {

  if(weewoo_timer) { clearTimeout(weewoo_timer) }
  weewoo_timer = setTimeout(() => {
    let role = bot.guilds.cache.get(cfg.discord.guild).roles.cache.find(r => r.id == cfg.roles.weewoo) || bot.guilds.cache.get(cfg.discord.guild).roles.cache.find(r => r.name == cfg.roles.weewoo) || '@everyone'
    let weewoo_channel = bot.channels.cache.get(channel)
    if(!weewoo_channel) return
      weewoo_channel.send(
          `${int == 1 ? `${(cfg.other.weewoo_message).replace(/\{role\}/g, `${role == '@everyone' ? `@everyone` : `<@&${role.id}>`}`)}` : `${cfg.other.weewoo_message.replace(/\{role\}/g, `${role == '@everyone' ? `@everyone` : `<@&${role.id}>`}`)}`}`
      )

      mc.chat('/f c f')
      setTimeout(() => {
          mc.chat('[WeeWoo] WEEWOO! We are getting raided')
      }, 2000)

      weewoo(cfg, channel, int, mc)
  }, 10000)
}
