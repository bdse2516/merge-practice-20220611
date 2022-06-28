from flask import Flask, render_template, request, url_for
from flask_moment import Moment
from datetime import datetime
from pathlib import Path
import uuid

app = Flask(__name__)
moment = Moment(app)

@app.route('/')
def index():
    return render_template('index.html',
                           page_header="page_header",
                           current_time=datetime.utcnow())

if __name__ == "__main__":
    app.run(debug=True)