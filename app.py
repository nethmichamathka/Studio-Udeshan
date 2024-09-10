from flask import Flask, render_template

app = Flask(__name__)

# Route for homepage
@app.route('/')
def home():
    return render_template('index.html')

# Route for services page
@app.route('/services')
def services():
    return render_template('services.html')

if __name__ == "__main__":
    app.run(debug=True)
