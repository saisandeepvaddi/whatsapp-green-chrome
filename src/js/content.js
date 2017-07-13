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
  var winCount = 0;
  var chatWindows = [];
  var unreadCount = $(".chatlist-panel").find(".unread-count");
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.toggle === "toggleChatWindow") {
      if (!isSidebarClosed) {
        closeSidebar();
      } else {
        showSidebar();
      }
      isSidebarClosed = !isSidebarClosed;
    }

    if (request.addWindow === "addSeparateWindow") {
      console.log("Asking to add separate window");
      // var win = $("#main").clone(true, true).addClass(winCount + 1);
      $(".chatlist-panel").css("pointer-events", "none");
    }
  });
});
