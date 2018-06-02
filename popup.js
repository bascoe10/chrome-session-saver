let save = document.getElementById('save');
let restore = document.getElementById('restore');


save.onclick = function(element) {
  chrome.tabs.query({currentWindow: true}, function(tabs) {
    let tabs_to_store = tabs.map(t => t.url);
    chrome.storage.sync.set({tabs1: tabs_to_store}, function() {
      console.log(tabs_to_store);
      console.log("Tabs saved");
    });
  });
};

restore.onclick = function(element) {
  chrome.storage.sync.get('tabs1', function(data) {
    console.log(data.tabs1);
    for(i=0; i<data.tabs1.length; i++){
      console.log(data.tabs1[i]);
      chrome.tabs.create({url: data.tabs1[i]});
    }
  });
  console.log('Tabs restored')
};
