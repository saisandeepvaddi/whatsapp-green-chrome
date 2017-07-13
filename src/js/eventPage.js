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
  if (request.messageCount) {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
      },
      function(tabs) {
        console.log("Badge Count: ", request.messageCount);
      }
    );
  }

  if (request.theme) {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
      },
      function(tabs) {
        console.log("Asking to insert");

        chrome.tabs.insertCSS(tabs[0].id, { file: "test.css" });
      }
    );
  }
});

chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { toggle: "toggleChatWindow" });
    }
  );
});


