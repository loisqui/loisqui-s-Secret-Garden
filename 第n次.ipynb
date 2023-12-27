{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "09bf67f9",
   "metadata": {},
   "outputs": [],
   "source": [
    "!pip install Flask-SQLAlchemy\n",
    "!pip install Flask Flask-CORS\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "d5800d5b",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " * Serving Flask app '__main__'\n",
      " * Debug mode: off\n"
     ]
    },
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.\n",
      " * Running on all addresses (0.0.0.0)\n",
      " * Running on http://127.0.0.1:5000\n",
      " * Running on http://10.171.135.159:5000\n",
      "Press CTRL+C to quit\n"
     ]
    }
   ],
   "source": [
    "from flask import Flask, request, jsonify\n",
    "from flask_cors import CORS\n",
    "import time\n",
    "\n",
    "app = Flask(__name__)\n",
    "CORS(app)\n",
    "\n",
    "messages = []\n",
    "new_year_timestamp = int(time.mktime(time.strptime(\"2024-01-01 00:00:00\", \"%Y-%m-%d %H:%M:%S\")))\n",
    "\n",
    "@app.route('/post_message', methods=['POST'])\n",
    "def post_message():\n",
    "    data = request.get_json()\n",
    "    message = data.get('message')\n",
    "\n",
    "    if '敏感词' in message:\n",
    "        return jsonify({'status': 'error', 'message': '留言包含敏感词'})\n",
    "\n",
    "    messages.append({'username': 'Anonymous', 'message': message})\n",
    "    return jsonify({'status': 'success'})\n",
    "\n",
    "@app.route('/get_messages', methods=['GET'])\n",
    "def get_messages():\n",
    "    return jsonify({'messages': messages})\n",
    "\n",
    "if __name__ == '__main__':\n",
    "    app.run(host='0.0.0.0', port=5000)\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "4cc0b58b",
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3 (ipykernel)",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.9.13"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
