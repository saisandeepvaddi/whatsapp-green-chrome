chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.todo === "showPageAction") {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
      },
      function(tabs) {
        chrome.pageAction.show(tabs[0].id);
      }
    );
  }
});

chrome.commands.onCommand.addListener(function(command) {
  console.log("Command: ", command);

  if (command === "toggle_chat_window") {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
      },
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { toggle: "toggleChatWindow" });
      }
    );
  }

  if (command === "add_seperate_window") {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
      },
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          addWindow: "addSeparateWindow"
        });
      }
    );
  }
});
