module.exports = {
    config: {
        name: "sticker",
        version: "1.0",
        credits: "Quýt",
        description: "Test lệnh",
        tag: "bot",
        usage: "",
        countDown: 1000,
        role: 3,
    },
    

   
    onRun: async ({ api, event }) => {
        const categorizedCommands = new Map();
    
        for (const [name, command] of global.commands) {
          const category = command.config.Category || "Khác";
          if (!categorizedCommands.has(category)) {
            categorizedCommands.set(category, []);
          }
          categorizedCommands.get(category).push(name);
        }
    
        const commandList = [];
        for (const [category, commands] of categorizedCommands) {
          commandList.push(`${category}: ${commands.join(", ")}`);
        }
    
        const response =
          commandList.length > 0
            ? commandList.join("\n")
            : "Hiện không có lệnh nào.";
        api.sendMessage(
          `Danh sách lệnh có thể sử dụng: \n${response}`,
          event.threadId,
          event.type
        );
      }
};