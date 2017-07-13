chrome.runtime.sendMessage({
  todo: "showPageAction"
});

$(document).ready(function() {
  var isSidebarClosed = false;
  var unreadCount = $(".chatlist-panel").find(".unread-count");
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.toggle === "toggleChatWindow") {
      if (!isSidebarClosed) {
        $(".chatlist-panel").css("display", "none");
        $("#main").css("width", "100%");
        $("#main").css("height", "100%");
      } else {
        $(".chatlist-panel").css("display", "flex");
      }
      isSidebarClosed = !isSidebarClosed;
    }
  });
});
