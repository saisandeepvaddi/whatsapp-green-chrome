function applyTheme(theme) {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    function(tabs) {
      chrome.tabs.insertCSS(tabs[0].id, { file: "themes/" + theme + ".css" });
    }
  );
}

$(function() {
  // chrome.storage.sync.get("theme", function(currentTheme) {
  //   applyTheme(currentTheme.theme);
  // });
  $("#apply-theme").on("click", function() {
    var newTheme = $("#theme").val();
    chrome.storage.sync.set({ theme: newTheme });
    chrome.storage.sync.get("theme", function(currentTheme) {
      applyTheme(currentTheme.theme);
    });
  });
});











// Write all your code above this line. This will reload popup js page in developer tools -> sources when you reload extension from chrome://extensions.
// To avoid executing location.reload(true) in Inspect console to make popup.js appear in developer tools sources
var reload = (function() {
  var executedAlready = false;
  return function() {
    if (!executedAlready) {
      location.reload(true);
      executedAlready = true;
    }
  };
})();
