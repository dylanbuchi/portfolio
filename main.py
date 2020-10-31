import csv
import os

from pymongo import MongoClient
from flask import Flask, request, redirect
from flask.templating import render_template

app = Flask(__name__)


def write_to_csv_file(data: dict):
    path = os.path.join(os.getcwd(), 'data', 'data.csv')
    with open(path, 'a', newline='') as csv_file:
        email = data['email']
        subject = data['subject']
        message = data['message']

        csv_writer = csv.writer(csv_file,
                                delimiter=',',
                                quotechar='"',
                                quoting=csv.QUOTE_MINIMAL)
        csv_writer.writerow([email, subject, message])


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/<string:page_name>')
def html_page(page_name):
    return render_template(page_name)


@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    if request.method == 'POST':
        data = request.form.to_dict()
        write_to_csv_file(data)
        write_to_database(data)
        return redirect('thank_you.html')
    else:
        return 'error'


def write_to_database(data: dict):
    client = MongoClient(os.getenv('DATABASE'))
    db = client.portfolio
    collection = db.contact
    collection.insert_one(data)
    client.close()


if __name__ == '__main__':
    app.run()
