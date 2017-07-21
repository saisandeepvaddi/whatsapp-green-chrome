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

function setStrictLanguage() {
  $("div.input").on("keydown", function(e) {
    $("button.compose-btn-send").css("visibility", "hidden");

    if (e.which === 13) {
      e.preventDefault();
      if ($(this).text().includes("sandeep")) {
        var answer = confirm(
          "This message contains name Sandeep. Do you want to proceed?"
        );
        if (answer) {
          $(".compose-btn-send").click();
        } else {
          $(this).empty();
          return;
        }
      } else {
        $(".compose-btn-send").click();
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
      $("div.input").css("color", "green");
      setStrictLanguage();
      if (!isChatListPanelLocked) {
        $(".chatlist-panel").css("pointer-events", "none");
      } else {
        $(".chatlist-panel").css("pointer-events", "auto");
      }
      isChatListPanelLocked = !isChatListPanelLocked;
    }
  });
});
