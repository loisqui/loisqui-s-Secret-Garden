# app.py

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# 配置 SQLite 数据库连接，数据库文件为 messages.db
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///messages.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# 定义 Message 模型
class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), default='Anonymous')
    message = db.Column(db.String(255))

# 创建数据库表
db.create_all()

@app.route('/post_message', methods=['POST'])
def post_message():
    data = request.get_json()

    # 获取留言内容
    message_content = data.get('message')

    # 在数据库中创建新留言
    new_message = Message(message=message_content)
    db.session.add(new_message)
    db.session.commit()

    return jsonify({'status': 'success'})

@app.route('/get_messages', methods=['GET'])
def get_messages():
    # 从数据库获取所有留言
    messages = Message.query.all()

    # 将留言转为字典格式
    messages_dict = [{'username': message.username, 'message': message.message} for message in messages]

    return jsonify({'messages': messages_dict})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

 },
 "nbformat": 4,
 "nbformat_minor": 5
}
