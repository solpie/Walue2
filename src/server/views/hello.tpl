<h1>Hello {{name}}!1</h1>
<p>How are you?</p>
<script src="/static/js/jquery.min.js"></script>
<script src="/static/js/socket.io-1.4.5.min.js"></script>
<script>
       var url1 = '/=>?url=http://api.weilutv.com/1/topic/list'
        console.log("getTopic")
        $.ajax({
            url: url1,
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({ cursor: null }),
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            success: (body) => {
                console.log(body)
            },
            error: (e) => {
                console.log(url1, e)
            }
        });
        var sio = io.connect("/chat")
</script>