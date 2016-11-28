import os
# print(os.path.realpath(__file__))
# server_path = os.path.realpath(__file__)
serverConf = {"port": 80, "path": '.',
              "views": [], "reqHeaders": [], "resHeaders": []}

serverConf["path"] = os.path.dirname(__file__)
if serverConf["path"] == "":
    serverConf["path"] = os.path.realpath(".")
print("server root:", serverConf["path"])
# config
import configparser

config = configparser.RawConfigParser()


def loadConf():
    config.read(os.path.join(serverConf["path"], 'server.cfg'))
    serverConf["port"] = config.get('server', 'port')
    serverConf["views"] = config.get('server', 'views')
    serverConf["reqHeaders"] = config.get('server', 'reqHeaders').split(",")
    serverConf["resHeaders"] = config.get('server', 'resHeaders').split(",")
    print("serverConf:", serverConf)

loadConf()
# web server
from bottle import route, get, run, static_file, request, post, template, TEMPLATE_PATH, HTTPResponse

TEMPLATE_PATH.append(os.path.join(serverConf["path"], 'views'))


@get('/')
def index():
    print("get index")
    return 'running'

import requests


# @get('/=>')
# @get('/<param:re:\=\>.+>')
@get('/=>')
@get('/=>/')
@post('/=>')
@post('/=>/')
def proxy():
    if "url" not in request.query.keys():
        return 'no url query'
    url = request.query["url"]
    req_headers = dict()
    for h in serverConf["reqHeaders"]:
        req_headers[h] = request.headers[h]

    if request.method == "GET":
        r = requests.get(url, headers=req_headers)

    if request.method == "POST":
        r = requests.post(url, headers=req_headers)

    res_headers = dict()
    for h in serverConf["resHeaders"]:
        res_headers[h] = r.headers[h]

    print("=>:", url)
    return HTTPResponse(r.content, **res_headers)


@get('/<view_name>')
@get('/<view_name>/')
def views_tpl(view_name):
    print("views:", view_name)
    if view_name not in serverConf["views"]:
        return "can not find view[{0}] in server.cfg".format(view_name)
    else:
        return template(view_name, request.query)

# static
static_path = os.path.join(serverConf["path"], 'static')
print("static path:", static_path)


@get('/static/<filepath:path>')
def server_static(filepath):
    print(filepath)
    return static_file(filepath, root=static_path)

run(host='0.0.0.0', debug=True, port=serverConf["port"], reloader=True)
