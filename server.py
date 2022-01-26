from flask import Flask, render_template, request
import json

app = Flask(__name__)

w = json.load(open("static/worldl.json"))

@app.route("/")
def index():
    # if request.args['country']:
    #     target = request.args['country']
    #     lst = [c for c in w if c['name'] == target]
    #     if len(lst) > 0:
    #        return render_template("index",c = lst[0]) 
    return render_template("index.html")

@app.route("/country/<i>")
def country(i):
    return render_template("country.html", c = w[int(i)], next = 1+int(i))

if __name__ == '__main__':
    app.run(debug=True)
    
