# Web-Services-with-Python-and-React
## Web Services With Python, React, Nodejs and RabbitMQ

# About
This project demonstrates the use of RabbitMQ message boker to
forward events from python to nodejs which is the rendered in
real-time using websocket api and react framework.

## Requirements

- Nodejs version 6 minimum
- Python version 3.6
- RabbitMQ on localhost and default port
- Browser with websocket support (Chrome vs 65.0)

## Build Sender

- Set the apropraite environment
- Install dependencies `pip install -r requirements.txt`
- Run aplication `python send.py`
- Navigate browser to `localhost:5000`

## Build Receiver

- Install node dependencies `npm install`
- Build react application `npm build`
- Start receiver `npm start`
- Navigate browser to `localhost:3000`
