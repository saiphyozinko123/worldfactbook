from flask import Flask, render_template
import json

app = Flask(__name__)

w = json.load(open("worldl.json"))

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/country/<i>")
def country(i):
    return render_template("country.html", c = w[int(i)])

if __name__ == '__main__':
    app.run(debug=True)
