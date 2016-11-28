import os
# print(os.path.realpath(__file__))
# server_path = os.path.realpath(__file__)
server_path = os.path.dirname(__file__)
if server_path =="":
    server_path = os.path.realpath(".")
print("server root:", server_path)
# config
import configparser

config = configparser.RawConfigParser()
config.read(os.path.join(server_path, 'server.cfg'))

server_port = config.get('server', 'port')

# web server
from bottle import get, run, static_file, request, post

@get('/')
def index():
    print("get index")
    return 'running'

static_path = os.path.join(server_path, 'static')
print("static path:", static_path)

@get('/static/<filepath:path>')
def server_static(filepath):
    print(filepath)
    return static_file(filepath, root=static_path)

run(host='0.0.0.0', port=server_port, reloader=True)
