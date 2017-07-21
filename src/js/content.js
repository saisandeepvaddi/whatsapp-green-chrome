chrome.runtime.sendMessage({
  todo: "showPageAction"
});

function closeSidebar() {
  $(".chatlist-panel").css("display", "none");
  $("#main").css("width", "100%");
  $("#main").css("height", "100%");
}

function showSidebar() {
  $(".chatlist-panel").css("display", "flex");
}

$(document).ready(function() {
  var isSidebarClosed = false;
  var isChatListPanelLocked = false;
  var winCount = 0;
  var chatWindows = [];
  $("div.input").ready(function() {
    $("div.input").css("color", "green");
  });
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.toggle === "toggleChatWindow") {
      if (!isSidebarClosed) {
        closeSidebar();
      } else {
        showSidebar();
      }
      isSidebarClosed = !isSidebarClosed;
    }

    if (request.lockChatListPanel === "lockChatListPanel") {
      $("div.input").css("color", "green");
      if (!isChatListPanelLocked) {
        $(".chatlist-panel").css("pointer-events", "none");
      } else {
        $(".chatlist-panel").css("pointer-events", "auto");
      }
      isChatListPanelLocked = !isChatListPanelLocked;
    }
  });
});
