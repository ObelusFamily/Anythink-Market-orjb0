//TODO: seeds script should come here, so we'll be able to put some data in our local env
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

require("../models/User");
require("../models/Item");
require("../models/Comment");

var User = mongoose.model("User");
var Item = mongoose.model("Item");
var Comment = mongoose.model("Comment");
const { faker } = require("@faker-js/faker");
const e = require("express");

var createdUsers = [];
var createdItems = [];

const seedUser = (userNumber) => {
  const user = new User();

  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName;

  user.username = faker.internet.userName(firstName, lastName);
  user.username = faker.internet.userName(firstName, lastName);
  user.username = faker.internet.password();

  user
    .save()
    .then(() => {
      console.log(`User number ${userNumber} has been created`);
      createdUsers.push(user);
    })
    .catch((e) => {
      console.log(e);
    });
};

const seedItem = (itemNumber, user) => {
  const fakeItem = {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.image(640, 480, true),
    tagList: [],
  };

  var item = new Item(fakeItem);

  item.seller = user;

  item
    .save()
    .then(() => {
      console.log(`Item number ${itemNumber} has been created`);
      createdItems.push(item);
    })
    .catch((e) => {
      console.log(e);
    });
};

const seedComment = (commentNumber, item, user) => {
  const fakeComment = {
    body: faker.commerce.productDescription(),
  };

  var comment = new Comment(fakeComment);
  comment.item = item;
  comment.seller = user;

  comment.save().then(() => {
    item.comments = item.comments.concat([comment]);
    item
      .save()
      .then(() => {
        console.log(`Comment number ${commentNumber} has been created`);
      })
      .catch((e) => {
        console.log(e);
      });
  });
};

for (let i = 0; i < 100; i++) {
  console.log(i);
}
