import sys
import signal
import json

from flask import Flask, render_template, request, redirect
import pika

app = Flask(__name__)

print('Connecting to rabbit...')
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()
channel.queue_declare('post')
print('Connection extablished.')

@app.route('/', methods=['GET', 'POST'])
def index():
    """Handles routes to index page"""
    if request.method == 'GET':
        return render_template('index.html')
    elif request.method == 'POST':
        data = {'message': request.form.get('message')}
        channel.basic_publish(
            exchange='',
            routing_key='post',
            body=json.dumps(data)
        )
        return redirect('/')

def sigint_handler(sigtype, frame):
    """Close connection to Rabbit and quit"""
    if not connection.is_closed:
        print('Closing connection to rabbit...')
        connection.close()
        print('Connection closed.')
    sys.exit(0)

if __name__ == '__main__':
    signal.signal(signal.SIGINT, sigint_handler)
    app.run(debug=True)
