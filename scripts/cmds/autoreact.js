€cmd install module.exports = {
    config: {
        name: "autoreact",
		      version: "1.0",
	       	author: "Loid Butter",
		      countDown: 5,
	       	role: 0,
		      shortDescription: "",
	       	longDescription: "",
		       category: "dont know ",
    },
	onStart: async function (){},
	onChat: async function ({ event ,api}) {
		if (event.body.toLowerCase().indexOf("prefix") !== -1) return api.setMessageReaction("🌟", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("cool") !== -1) return api.setMessageReaction("😎", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("salut") !== -1) return api.setMessageReaction("👀", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("bye") !== -1) return api.setMessageReaction("😐", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("bonjour") !== -1) return api.setMessageReaction("🤧", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("🔥") !== -1) return api.setMessageReaction("🌟", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("🌟") !== -1) return api.setMessageReaction("🔥", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("😆") !== -1) return api.setMessageReaction("😆", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("😂") !== -1) return api.setMessageReaction("😆", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("🤣") !== -1) return api.setMessageReaction("😆", event.messageID,event.threadID)
    
   	if (event.body.toLowerCase().indexOf("😡") !== -1) return api.setMessageReaction("😒", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("😑") !== -1) return api.setMessageReaction("😬", event.messageID,event.threadID)

		if (event.body.toLowerCase().indexOf("😡") !== -1) return api.setMessageReaction("❤😑", event.messageID,event.threadID)

		if (event.body.toLowerCase().indexOf("junior") !== -1) return api.setMessageReaction("🌟", event.messageID,event.threadID)

    		if (event.body.toLowerCase().indexOf("ok") !== -1) return api.setMessageReaction("😶", event.messageID,event.threadID)

        		if (event.body.toLowerCase().indexOf("junior") !== -1) return api.setMessageReaction("😳", event.messageID,event.threadID)

        		if (event.body.toLowerCase().indexOf("naruto") !== -1) return api.setMessageReaction("😁", event.messageID,event.threadID)

        		if (event.body.toLowerCase().indexOf("naruto") !== -1) return api.setMessageReaction("😎", event.messageID,event.threadID)

        		if (event.body.toLowerCase().indexOf("kurama") !== -1) return api.setMessageReaction("🔥", event.messageID,event.threadID)

        		if (event.body.toLowerCase().indexOf("help") !== -1) return api.setMessageReaction("😮", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("help") !== -1) return api.setMessageReaction("😳", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("prefix ") !== -1) return api.setMessageReaction("😖", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("😏") !== -1) return api.setMessageReaction("😏", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("callad") !== -1) return api.setMessageReaction("😮", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("fuck you") !== -1) return api.setMessageReaction("🤬", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("ninja") !== -1) return api.setMessageReaction("👀", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("konoha") !== -1) return api.setMessageReaction("😎", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("😒") !== -1) return api.setMessageReaction("🖕", event.messageID,event.threadID)
  
    if (event.body.toLowerCase().indexOf("tu") !== -1) return api.setMessageReaction("😖", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("a") !== -1) return api.setMessageReaction("😮", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("noti") !== -1) return api.setMessageReaction("😏", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("azertyuiopmlkjhgfdsqwxcvbn") !== -1) return api.setMessageReaction("😎", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("je") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("a z e r t y u i o p q s d f g h j k l m n b v c x w") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("bot") !== -1) return api.setMessageReaction("🤩", event.messageID,event.threadID)
    
  }
};
