import os
from flask import Flask, send_file
app = Flask(__name__, static_url_path="", static_folder="build")


APP_ROOT = os.path.dirname(os.path.realpath(__file__))


@app.route('/api/morgan')
def morgan():
    return 'Hello morgan'

@app.route('/api/nort')
def nort():
    return 'Hello nort'

@app.errorhandler(404)
def serve(e):
    return send_file(os.path.join(APP_ROOT, 'build/index.html'))

if __name__ == '__main__':
    app.run(debug=False)