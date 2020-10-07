from flask import *
from flask_cors import CORS

from pymongo import MongoClient

from functools import wraps

from bson import json_util
import json
from JSONEncoder import JSONEncoder, MongoEngineJSONEncoder


app = Flask(__name__)
CORS(app)
app.debug=True
app.json_encoder=MongoEngineJSONEncoder

# sql과 비교
# insert, insert_one, insert_many = insert
# find = select
# delete = delete
# update = update

# localhost:5000에서 받아와서 3000에 표시해주는게 fetch
# localhost:3000에서 클릭으로 5000으로 보내주는건 form 활용 (form의 action을 localhost:5000이 아닌 http://127.0.0.1:5000으로 해야할 것)

def use_db(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        client = MongoClient('localhost', 27017)
        db=client['rental_service_react']
        users=db.users
        
        g=f.__globals__
        g['db'] = db
        result = f(*args, **kwargs)
        client.close()

        return result
    return wrap

# test
@app.route('/')
@use_db
def index():
    print(db)
    # books=db.books
    # books.insert_one({"bookname":"siiiiii"})
    return redirect("http://127.0.0.1:3000")

@app.route('/register', methods=['GET', 'POST'])
@use_db
def register():
    users=db.users
    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')
    users.insert_one({"username":username, "email":email, "password":password})
    return redirect(url_for('index'))

@app.route('/login', methods=['GET' , 'POST'])
@use_db
def login():
    users=db.users
    username = request.form.get('username')
    password = request.form.get('password')
    userfind=users.find()
    for i in userfind:
        if i['username'] == username:
            print('로그인 성공')
            return redirect(url_for('index'))
        else:
            print(i['username'])
            print('아니야')
    return redirect(url_for('index'))

@app.route('/fetchtest')
def fetchtest():
    data={'id':{"_id":"1"}, 'title':'this is title' , 'body': 'this is body'}
    return jsonify([data])

@app.route('/userlist')
@use_db
def userlist():
    users=db.users
    userfind=users.find()
    userlist = []
    for i in userfind:
        i = json.loads(json_util.dumps(i))
        userlist.append(i)
    # print('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')
    # print(userlist)
    # print(type(userlist))
    return jsonify(userlist)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port = 5000)