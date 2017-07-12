chrome.runtime.sendMessage({
  todo: "showPageAction"
});

$(document).ready(function() {
  var isSidebarClosed = false;
  var chatlistPanel = $(".chatlist-panel")[0];
  var unreadCount = $(".chatlist-panel").find(".unread-count");
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log($(chatlistPanel));

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

  setTimeout(function() {
    var unreadCount = $("span.unread-count.icon-meta").get();
    var count = 0;
    for (var i = 0; i < unreadCount.length; i++) {
      var element = $(unreadCount[i]).text();
      console.log("Element: ", i, ": ", element);
      count = count + element;
    }
    console.log("Count: ", Number(count));

    chrome.runtime.sendMessage({
      messageCount: Number(count)
    });
  }, 5000);
});