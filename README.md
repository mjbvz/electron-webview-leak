Demonstrates electron webview leaking

**Bug**
Webview appears to be leak

**Steps to reproduce**

1. `npm install`
1. `npm start`
1. On page, wait for webview to disapear.
1. Take memory snapshot
1. Notice that a `MyWebview` object is still around
