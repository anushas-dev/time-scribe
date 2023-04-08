from flask import Flask, request, jsonify, render_template
from jinja2 import Environment, PackageLoader, select_autoescape

app = Flask(__name__, template_folder='templates', static_folder='staticFiles')


# Define a route for a basic homepage
@app.route('/', endpoint='index')
def index():
    return render_template('index.html')

@app.route('/about', endpoint='about')
def index():
    return render_template('about.html')

@app.route('/contact', endpoint='contact')
def index():
    return render_template('contact.html')

@app.route('/home', endpoint='home')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=80)
