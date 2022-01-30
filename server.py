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

# @app.route("/country/<i>")
# def country(i):
#     return render_template("country.html", c = w[int(i)], next = 1+int(i))

# ----------edit data -------------

@app.route("/api/country/<i>", methods=['GET'])
def get(i):
    ret = next((c for c in w if c['id'] == int(i)),None)
    if ret:
        return ret
    return "not found", 404

@app.route("/api/country/<i>", methods = ['DELETE'])
def delete(i):
    global w
    w = [c for c in w if c['id'] != int(i)]
    json.dump(w, open("static/worldl.json","w"))
    return {}

@app.route("/api/country/<i>", methods = ['POST'])
def post(i):
    ret = next((c for c in w if c['id'] == int(i)))
    print(ret)
    payload = request.json
    ret['name'] =payload['name']
    ret['continent'] = payload['continent']
    ret['capital'] = payload['capital']
    ret['area'] = payload['area']
    ret['population'] = payload['population']
    ret['gdp'] = payload['gdp']
    ret['flag'] = payload['flag']
    ret['tld'] = payload['tld']
    json.dump(w, open("static/worldl.json","w"))
    return {}


@app.route("/api/country/", methods = ['PUT'])
def put():
    ret = next((c for c in w))
    print(ret)
    payload = request.get_json()
    print(payload)
    ret['id']=payload['id']
    ret['name'] =payload['name']
    ret['continent'] = payload['continent']
    ret['capital'] = payload['capital']
    ret['area'] = payload['area']
    ret['population'] = payload['population']
    ret['gdp'] = payload['gdp']
    ret['flag'] = payload['flag']
    ret['tld'] = payload['tld']
    w.append(payload)
    json.dump(w, open("static/worldl.json","w"))
    return {}


if __name__ == '__main__':
    app.run(debug=True,port=8500)
    
