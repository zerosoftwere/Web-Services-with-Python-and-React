import sys
import signal

import pika
from datetime import datetime

import json

connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()
channel.queue_declare('post')

def post_handler(ch, method, properties, body):
    print('[%r] - %r' % (datetime.now().timestamp(), json.loads(body.decode('utf-8'))))

def sigterm_handler(sigtype, frame):
    print('Closing connection to rabbit')
    channel.stop_consuming()
    connection.close()
    sys.exit(0)

if __name__ == '__main__':
    channel.basic_consume(post_handler, queue='post', no_ack=True)
    print('[*] - Waiting for messages. To exit press CTRL+C')
    signal.signal(signal.SIGINT, sigterm_handler)
    channel.start_consuming()
