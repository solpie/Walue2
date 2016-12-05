"""
config
"""
import os
serverConf = {"port": 80,
              "isDev": True,
              "path": '.',
              "views": [],
              "reqHeaders": [], "resHeaders": []}
serverConf["path"] = os.path.dirname(__file__)
if serverConf["path"] == "":
    serverConf["path"] = os.path.realpath(".")
print("server root:", serverConf["path"])

import configparser

config = configparser.RawConfigParser()

def loadConf():
    config.read(os.path.join(serverConf["path"], '.cfg'))
    serverConf["isDev"] = config.get('server', 'isDev') == '1'
    serverConf["port"] = int(config.get('server', 'port'))
    serverConf["reqHeaders"] = str(
        config.get('server', 'reqHeaders')).split(",")
    serverConf["resHeaders"] = str(
        config.get('server', 'resHeaders')).split(",")
    print("serverConf:", serverConf)
    serverConf["views"] = ["admin", "walue"]
loadConf()

"""
web server
"""
import eventlet
from eventlet import wsgi

from flask import Flask, render_template, request, make_response

app = Flask(__name__, static_url_path='')
app.config['SECRET_KEY'] = 'secret!'
route = app.route


@route('/')
def index():
    return render_template('index.html')
"""
proxy
"""
import requests


@route('/proxy', methods=['GET', 'POST'])
def proxy():
    url = request.args.get('url', '')

    req_headers = dict()
    for h in serverConf["reqHeaders"]:
        if h in request.headers:
            req_headers[h] = request.headers[h]

    if request.method == "GET":
        r = requests.get(url, headers=req_headers)

    if request.method == "POST":
        # print(request.json)
        r = requests.post(url, json=request.json, headers=req_headers)
    res = make_response(r.content)

    res_headers = dict()
    for h in serverConf["resHeaders"]:
        res_headers[h] = r.headers[h]
        # if 'image' in res_headers["Content-Type"]:
        #     encoded_string = b"data:image/png;base64," + \
        #         base64.b64encode(r.content)
        #     return encoded_string
    res.headers = res_headers
    return res


@route('/<viewname>')
@route('/<viewname>/')
def view(viewname):
    if viewname in serverConf["views"]:
        return render_template(viewname + '.html')
    return viewname

if __name__ == '__main__':
    if serverConf["isDev"]:
        app.run(host="0.0.0.0", debug=True, port=serverConf["port"])
    else:
        wsgi.server(eventlet.listen(('0.0.0.0', serverConf["port"])), app)
