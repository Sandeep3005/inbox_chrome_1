InboxSDK.load(1, 'sdk_test_chrome_01_4b38dd1d68').then(function(sdk){

    // the SDK has been loaded, now do something with it!
    sdk.Compose.registerComposeViewHandler(function(composeView){

      // a compose  view has come into existence, do something with it!
      console.log(composeView);
      composeView.addButton({
        title: "My Nifty Button!",
        iconUrl: 'https://example.com/foo.png',
        onClick: function(event) {
          event.composeView.insertTextIntoBodyAtCursor('Hello World!');
        },
      });

    });

  });