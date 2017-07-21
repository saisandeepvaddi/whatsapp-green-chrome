// function confirmMessage(isChecked) {
//   console.log("Sending message");

//   chrome.tabs.query(
//     {
//       // active: true,
//       // currentWindow: true
//     },
//     function(tabs) {
//       console.log(tabs);

//       chrome.tabs.sendMessage(tabs[0].id, { confirmMessage: isChecked });
//     }
//   );
// }

// $(function() {
//   var isConfirmChecked = false;
//   chrome.storage.sync.get("confirmMessage", function(checkbox) {
//     isConfirmChecked = checkbox.confirmMessage || false;
//     $("#confirm-message").prop("checked", isConfirmChecked);
//     confirmMessage(isConfirmChecked);
//   });
//   $("#confirm-message").on("click", function() {
//     var isChecked = $("#confirm-message").prop("checked");
//     chrome.storage.sync.set({ confirmMessage: isChecked });
//     confirmMessage(isChecked);
//   });
// });
