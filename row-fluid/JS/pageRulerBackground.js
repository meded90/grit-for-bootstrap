var PageRuler = {

    tabs:	{},

    load:	function(tabId, noRequest) {
        console.log('load');
        this.tabs[tabId].active = true;

        chrome.browserAction.setIcon({
            path:	'img/icon-16-a.png',
            tabId:	tabId
        });
    },

    unload:	function(tabId, noRequest) {
        console.log('unload');
        this.tabs[tabId].active = false;
        chrome.browserAction.setIcon({
            path:	'img/icon-16.png',
            tabId:	tabId
        });

    }
};

PageRuler.listeners = {};

PageRuler.listeners.browserAction = {

    clicked:function (tab) {

        console.log('click');
        if (!PageRuler.tabs[tab.id]) {
            console.log('PageRuler.tabs[tab.id] ');
            PageRuler.tabs[tab.id] = {
                loaded:false,
                active:false
            };
        }

        if (!PageRuler.tabs[tab.id].loaded) {

            PageRuler.load(tab.id);
            console.log('add');
            chrome.tabs.executeScript(
                null,
                {
                    file:"./add.js"
                },
                function () {
                }

            );
            PageRuler.tabs[tab.id].loaded = true;
            PageRuler.load(tab.id);
        }
        else {
            console.log('del');
            chrome.tabs.executeScript(
                null,
                {
                    file:"./remuve.js"
                },
                function () {
                    PageRuler.tabs[tab.id].loaded = false;
                    PageRuler.unload(tab.id);
                }
            );



        }


    }


};

PageRuler.listeners.tabs = {

    removed:function (tabId, removeInfo) {

        if (PageRuler.tabs[tabId]) {
            PageRuler.tabs[tabId] = {
                loaded:false,
                active:false
            };
        }

    },

    updated:function (tabId, changeInfo, tab) {

        if (PageRuler.tabs[tabId]) {
            delete PageRuler.tabs[tabId];
            console.log('end')

        }

    }

};

chrome.browserAction.onClicked.addListener(PageRuler.listeners.browserAction.clicked);
chrome.tabs.onRemoved.addListener(PageRuler.listeners.tabs.removed);
chrome.tabs.onUpdated.addListener(PageRuler.listeners.tabs.updated);

