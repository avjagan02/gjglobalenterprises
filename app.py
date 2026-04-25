import json
from flask import Flask, render_template, request

app = Flask(__name__, static_folder='.', static_url_path='')

with open('config.json', 'r', encoding='utf-8') as f:
    config = json.load(f)


@app.route('/health')
def health():
    return 'OK'


@app.route('/')
def index():
    return render_template('index.html', config=config)


@app.route('/contact', methods=['GET'])
def contact():
    return render_template('contact.html', config=config)


@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name', '')
    email = request.form.get('email', '')
    message = request.form.get('message', '')
    return render_template('submit.html', config=config, name=name, email=email, message=message)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7000, debug=True)
