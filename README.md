## Hosting react with python

Steps to hosting React with python.

1. set the static folder of your flask to the build folder created by react scripts.

```python
app = Flask(__name__, static_url_path="", static_folder="build")
```

2. Add a catch all route that will send the index.html file from the build folder. I did this with an error handler decorator. 

```python
@app.errorhandler(404)
def serve(e):
    return send_file(os.path.join(APP_ROOT, 'build/index.html'))
```

however this can also be done with a <a href="http://flask.pocoo.org/snippets/57/">catch all route</a>

Now create the production build of the react application.

```bash
npm run build 
```

and start the flask server

```bash
python app.py
```

The react application will now be availabe through flask!!

## additional information
If you are hosting you application from somewhere besides the root of the server you will need to add a homepage property to the package.json. Durring the build process react-scripts will then use this value to replace all instances of `` in the public folder. 

For more information on hosting react application Facebook has created some amazing documentation <a href="https://facebook.github.io/create-react-app/docs/deployment">here</a>