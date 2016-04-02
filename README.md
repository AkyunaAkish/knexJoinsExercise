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

* Now that you have ran your migration file and seed files, you can change your '/' route in routes/index.js to use an innerjoin to bring together all of the plant/gardener combinations into one array of objects with knex.

```
router.get('/', function(req, res, next) {
  knex('plants').innerJoin('gardeners', 'plants.gardener_id', 'gardeners.gardener_id')
  .then(function(results){
    res.render('index', {plantsAndGardeners: results});
  })
});
```
