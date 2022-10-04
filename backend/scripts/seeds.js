var mongoose = require("mongoose");
var db = mongoose.connect(process.env.MONGODB_URI);

require("../models/User");
require("../models/Item");
require("../models/Comment");

var User = mongoose.model("User");
var Item = mongoose.model("Item");
var Comment = mongoose.model("Comment");

const { faker } = require("@faker-js/faker");

var createdComments = [];

const seedData = () => {
  const user = new User();

  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  user.username = faker.internet
    .userName(firstName, lastName)
    .replace(/[^a-zA-Z0-9 ]/g, "");
  user.email = faker.internet.email(firstName, lastName);
  user.setPassword(faker.internet.password());

  user
    .save()
    .then(() => {
      const fakeItem = {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        image: faker.image.image(640, 480, true),
        tagList: [],
      };

      var item = new Item(fakeItem);
      item.seller = user;

      return item
        .save()
        .then(() => {
          const fakeComment = {
            body: faker.commerce.productDescription(),
          };

          var comment = new Comment(fakeComment);
          comment.item = item;
          comment.seller = user;

          return comment.save().then(() => {
            item.comments = item.comments.concat([comment]);
            item
              .save()
              .then(() => {
                console.log("Data has been added");
                createdComments.push(comment);
                if (createdComments.length === 100) {
                  process.exit(0);
                }
              })
              .catch((e) => {
                console.log(e);
              });
          });
        })

        .catch((e) => {
          console.log(e);
        });
    })
    .catch((e) => {
      console.log(e);
    });
};

const loopSeed = () => {
  for (let i = 0; i < 100; i++) {
    seedData();
  }
};

loopSeed();
