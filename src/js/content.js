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

function confirmSend(message) {
  var shouldSendMessage = confirm(
    "Confirm message to " +
      $("h2.chat-title .emojitext").text() +
      " \n" +
      message
  );
  return shouldSendMessage;
}

function setConfirmBeforeSending() {
  $("div.input").css("color", "green");
  $("div.input").on("keydown", function(e) {
    $("button.compose-btn-send").css("visibility", "hidden");
    if (e.which === 13) {
      e.preventDefault();
      var message = $(this).text();
      if (confirmSend(message)) {
        $("button.compose-btn-send").click();
      } else {
        return;
      }
    }
  });
}

$(document).ready(function() {
  var isSidebarClosed = false;
  var isChatListPanelLocked = false;
  var winCount = 0;
  var chatWindows = [];

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
      if (!isChatListPanelLocked) {
        $(".chatlist-panel").css("pointer-events", "none");
      } else {
        $(".chatlist-panel").css("pointer-events", "auto");
      }
      isChatListPanelLocked = !isChatListPanelLocked;
    }

    if (request.enableConfirmMessage === "enableConfirmMessage") {
      setConfirmBeforeSending();
    }
  });
});
