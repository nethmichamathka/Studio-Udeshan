from flask import Flask, render_template

app = Flask(__name__)

# Home Page Route
@app.route('/')
def home():
    return render_template('index.html')

# Services Page Route
@app.route('/services')
def services():
    return render_template('services.html')

# About Page Route
@app.route('/about')
def about():
    return render_template('about.html')

# Contact Page Route
@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == "__main__":
    app.run(debug=True)
