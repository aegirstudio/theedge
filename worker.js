export default {
    async fetch(request) {
        let url = new URL(request.url);
        let originUrl = "https://8549af34b1398428a7f667eedc00385e.r2.cloudflarestorage.com" + url.pathname;
        
        let response = await fetch(originUrl, {
            headers: {
                "Origin": "*",
                "Access-Control-Allow-Origin": "*"
            }
        });

        return new Response(response.body, {
            headers: {
                "Content-Type": "application/vnd.apple.mpegurl",
                "Access-Control-Allow-Origin": "*"
            }
        });
    }
};
