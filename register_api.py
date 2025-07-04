import json
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

USERS_FILE = 'users.json'

def load_users():
    if os.path.exists(USERS_FILE):
        with open(USERS_FILE, 'r', encoding='utf-8') as f:
            try:
                return json.load(f)
            except Exception:
                return []
    return []

def save_users(users):
    with open(USERS_FILE, 'w', encoding='utf-8') as f:
        json.dump(users, f, ensure_ascii=False, indent=2)

@app.route('/api/register', methods=['POST'])
def register():
    users = load_users()
    data = request.get_json()
    name = data.get('name', '').strip()
    email = data.get('email', '').strip().lower()
    password = data.get('password', '')
    if not name or not email or not password:
        return jsonify(success=False, message='所有欄位皆必填'), 400
    if len(password) < 8:
        return jsonify(success=False, message='密碼至少需8碼'), 400
    if any(u['email'] == email for u in users):
        return jsonify(success=False, message='此Email已註冊'), 400
    hashed_pw = generate_password_hash(password)
    users.append({'name': name, 'email': email, 'password': hashed_pw})
    save_users(users)
    return jsonify(success=True, message='註冊成功！')

@app.route('/api/users', methods=['GET'])
def get_users():
    users = load_users()
    return jsonify([
        {'name': u['name'], 'email': u['email']} for u in users
    ])

@app.route('/api/login', methods=['POST'])
def login():
    users = load_users()
    data = request.get_json()
    email = data.get('email', '').strip().lower()
    password = data.get('password', '')
    for u in users:
        if u['email'] == email and check_password_hash(u['password'], password):
            return jsonify(success=True, name=u['name'], message='登入成功')
    return jsonify(success=False, message='帳號或密碼錯誤'), 401

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
