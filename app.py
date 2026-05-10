from flask import Flask, render_template, request, jsonify, redirect, url_for
from datetime import datetime
import os

app = Flask(__name__)


# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/facilities')
def facilities():
    return render_template('facilities.html')

@app.route('/classes')
def classes():
    return render_template('classes.html')

@app.route('/fees')
def fees():
    return render_template('fees.html')

@app.route('/admission')
def admission():
    return render_template('admission.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)
