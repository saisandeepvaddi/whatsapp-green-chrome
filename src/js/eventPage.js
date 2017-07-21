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
  if (command === "toggle_chat_window") {
    console.log("Toggle");

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

  if (command === "lock_chatlist_panel") {
    console.log("Lock");

    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
      },
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          lockChatListPanel: "lockChatListPanel"
        });
      }
    );
  }
});
