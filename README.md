# Knex Joins Exercise - Fork and clone this repo

## Setup

* All dependencies should already be in the package.json so simply:

```
$ npm install
$ createdb knex-joins
```

* The migrations file is setup already so just run the migrations:

```
$ knex migrate:latest
```

* The seed files are also set up so run the seed file to populate your tables:

```
$ knex seed:run
```

* The way the schema is set up, the plants in the database will have a foreign key that links the plants to the gardeners who planted them. Check out the migrations file to see how the reference(foreign key) id was set up. This will make it easier to create a join table later on because now the tables have a defined reference to each other.

* Specifically check out this line in the migrations file:

```
table.integer('gardener_id').unsigned().references('gardener_id').inTable('gardeners');
```

* That line will create the foreign key to reference the gardener_id in the gardeners table

* Now that you have ran your migration file and seed files, you can change your '/' route in routes/index.js to use an innerJoin to bring together all of the plant/gardener combinations into one array of objects with knex.

```
router.get('/', function(req, res, next) {
  knex('plants').innerJoin('gardeners', 'plants.gardener_id', 'gardeners.gardener_id')
  .then(function(results){
    res.render('index', {plantsAndGardeners: results});
  })
});
```

* There are many types of joins, though if you don't know what kind of join you need, an innerJoin is generally a good bet. If that doesn't work check out this site to learn more about the specifics of different types of joins: http://www.sql-join.com/

* After you have that all set up, run the server in nodemon and check out localhost:3000 to see if you are populating the table correctly. The gardener "Kaleo" should have the plants "Taro" and "Sugarcane"; "Aleksey" should have "Potato" and "Cabbage".

* Be sure to console.log(results); when creating the innerJoin (inside of the .then function) to see the output you are getting from knex to get an idea of how the innerJoin is bringing your data together.

* Also check out the seed files to see how the data was inserted into each table and how the plants have a reference "gardener_id" to the gardeners in the gardener table.
