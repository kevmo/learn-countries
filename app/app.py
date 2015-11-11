from flask import Flask, render_template, jsonify


app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html'), 200


@app.route('/testing/mock-API')
def mock_API():
    countries = [{"name": "USA", "other": "the United states of AMERICA"},
                 {"name": "Murica", "other": "LOVE IT OR LEAVE IT, BUDDY"},
                 {"name": "GOAT", "other": "THE GREATEST OF ALL TIME"}]

    return jsonify(countries)


if __name__ == '__main__':
    app.run(debug=True)
