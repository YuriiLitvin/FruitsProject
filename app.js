const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/fruitsDB");

  const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
  });

  const Fruit = mongoose.model("Fruit", fruitSchema);

  const fruit = new Fruit ({
    name: "Apple",
    rating: 8,
    review: "Great fruit!"
  });

  // await fruit.save();
  const personSchema = new mongoose.Schema({
    name: String,
    age: Number
  });

  const Person = mongoose.model("Person", personSchema);

  const person = new Person ({
    name: "John",
    age: 37
  });

  // await person.save();

  const kiwi = new Fruit ({
    name: "Kiwi",
    rating: 10,
    review: "Best fruit ever"
  });

  const orange = new Fruit ({
    name: "Orange",
    rating: 7,
    review: "Not the best fruit ever"
  });

  const banana = new Fruit ({
    name: "Banana",
    rating: 12,
    review: "Best fruit ever for minions"
  });



  // Fruit.insertMany([kiwi, orange, banana],function(err) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Successfully saved all the fruits!");
  //   }
  // });

  Fruit.find(function(err, fruits) {
    if (err) {
      console.log(err);
    } else {
      mongoose.connection.close();
      fruits.forEach(function(fruit) {
        console.log(fruit.name);
      });
      // console.log(fruits);
    }
  });

}
