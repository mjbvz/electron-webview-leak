//@ts-check

class MyWebview {

    constructor() {
        this.webview = document.createElement('webview');
        this.webview.partition = 'newpart';
        this.webview.src = 'https://example.com'

        document.body.appendChild(this.webview);

        this.didStartLoading = () => {
            const contents = this.webview.getWebContents();
            if (!contents) {
                return;
            }

            contents.session.webRequest.onBeforeRequest((details, callback) => {
                console.log('on-before')
                return callback({});
            });
        }

        this.webview.addEventListener('did-start-loading', this.didStartLoading, false);

        setTimeout(() => {
            this.webview.removeEventListener('did-start-loading', this.didStartLoading, false);
            document.body.removeChild(this.webview);
        }, 3000)
    }
}

new MyWebview();