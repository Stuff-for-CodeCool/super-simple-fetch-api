from flask import Flask, render_template, jsonify, request

app = Flask(__name__)


@app.get("/")
def index():
    return render_template("index.html")


@app.get("/data")
def get_data():
    return jsonify(
        {"ala": "bala"},
    )


@app.post("/data")
def insert_data():
    value = request.json.get("value")
    return jsonify(
        {"message": f"Value '{value}' inserted into database"},
    )


if __name__ == "__main__":
    app.run(debug=True)
