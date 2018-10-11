# Ecommerce Bakery API :cake:
The api acts as a mediator between our front-end and database.

## DB Setup and Start Instructions
In the seed-db directory you'll find the setup.sh file. This file runs
a bash script to seed/put data into mongodb.  Now that our front end is
requesting and is dependent on real data, we need to make sure we can provide
it.

*Note*: Your db needs to be running in order to seed it.
- `mongod` in your terminal will start mongodb

*Note*: In order to run the seed script the correct permission need to be set
the setup.sh file.
- `chmod 740 /path/to/setup.sh` will enable execution rights to the file
- `/path/to/setup.sh` will run the setup script.

Should see a console output similar to:
```
2018-10-11T00:17:50.289-0400	connected to: localhost
2018-10-11T00:17:50.296-0400	imported 6 documents
```
Once thats set start the api!
- `npm i`
- `npm start`

### Package Documentation
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [PM2](http://pm2.keymetrics.io/)
