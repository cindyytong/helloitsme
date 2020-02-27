const mongoose = require("mongoose");
const User = require("../models/User");
const Story = require("../models/Story");
const Section = require("../models/Section");

Section.collection.drop();
Story.collection.drop();
User.collection.drop();


const cindy = new User({
  handle: "cindytong",
  email: "tongcindyy@gmail.com",
  password: "test123"
});

const blue = new User({
  handle: "blue",
  email: "heycindytong@gmail.com",
  password: "test123"
});

const alex = new User({
  handle: "alexander",
  email: "tongsalex@gmail.com",
  password: "test123"
});

cindy.save();
blue.save();
alex.save();

const anotherOne = new Story({
  title: "Another One",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla. Sem nulla pharetra diam sit amet nisl suscipit. Et netus et malesuada fames ac turpis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Ut diam quam nulla porttitor massa id neque. Tellus elementum sagittis vitae et leo duis ut diam quam. Proin sagittis nisl rhoncus mattis rhoncus. Fringilla ut morbi tincidunt augue interdum velit euismod in. Purus non enim praesent elementum. Semper risus in hendrerit gravida rutrum quisque non tellus. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Mollis nunc sed id semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Diam ut venenatis tellus in metus vulputate eu scelerisque. Nunc congue nisi vitae suscipit tellus. Vitae suscipit tellus mauris a diam maecenas.",
    image: '../frontend/public/story_images/another_one.jpg',
    creator: cindy._id
});

anotherOne.save();

const beginnings = new Story({
  title: "New Beginnings",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla. Sem nulla pharetra diam sit amet nisl suscipit. Et netus et malesuada fames ac turpis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Ut diam quam nulla porttitor massa id neque. Tellus elementum sagittis vitae et leo duis ut diam quam. Proin sagittis nisl rhoncus mattis rhoncus. Fringilla ut morbi tincidunt augue interdum velit euismod in. Purus non enim praesent elementum. Semper risus in hendrerit gravida rutrum quisque non tellus. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Mollis nunc sed id semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Diam ut venenatis tellus in metus vulputate eu scelerisque. Nunc congue nisi vitae suscipit tellus. Vitae suscipit tellus mauris a diam maecenas.",
  image: "../frontend/public/story_images/beginnings.jpg",
  creator: cindy._id
});

beginnings.save();

const calm = new Story({
  title: "Calm",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla. Sem nulla pharetra diam sit amet nisl suscipit. Et netus et malesuada fames ac turpis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Ut diam quam nulla porttitor massa id neque. Tellus elementum sagittis vitae et leo duis ut diam quam. Proin sagittis nisl rhoncus mattis rhoncus. Fringilla ut morbi tincidunt augue interdum velit euismod in. Purus non enim praesent elementum. Semper risus in hendrerit gravida rutrum quisque non tellus. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Mollis nunc sed id semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Diam ut venenatis tellus in metus vulputate eu scelerisque. Nunc congue nisi vitae suscipit tellus. Vitae suscipit tellus mauris a diam maecenas.",
  image: "../frontend/public/story_images/calm.jpg",
  creator: cindy._id
});

calm.save();

const cityLight = new Story({
  title: "City Light",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla. Sem nulla pharetra diam sit amet nisl suscipit. Et netus et malesuada fames ac turpis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Ut diam quam nulla porttitor massa id neque. Tellus elementum sagittis vitae et leo duis ut diam quam. Proin sagittis nisl rhoncus mattis rhoncus. Fringilla ut morbi tincidunt augue interdum velit euismod in. Purus non enim praesent elementum. Semper risus in hendrerit gravida rutrum quisque non tellus. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Mollis nunc sed id semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Diam ut venenatis tellus in metus vulputate eu scelerisque. Nunc congue nisi vitae suscipit tellus. Vitae suscipit tellus mauris a diam maecenas.",
  image: "../frontend/public/story_images/city_light.jpg",
  creator: cindy._id
});

cityLight.save();


const here = new Story({
  title: "Here",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla. Sem nulla pharetra diam sit amet nisl suscipit. Et netus et malesuada fames ac turpis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Ut diam quam nulla porttitor massa id neque. Tellus elementum sagittis vitae et leo duis ut diam quam. Proin sagittis nisl rhoncus mattis rhoncus. Fringilla ut morbi tincidunt augue interdum velit euismod in. Purus non enim praesent elementum. Semper risus in hendrerit gravida rutrum quisque non tellus. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Mollis nunc sed id semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Diam ut venenatis tellus in metus vulputate eu scelerisque. Nunc congue nisi vitae suscipit tellus. Vitae suscipit tellus mauris a diam maecenas.",
  image: "../frontend/public/story_images/here.jpg",
  creator: cindy._id
});

here.save();


const lastSummer = new Story({
  title: "Last Summer",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla. Sem nulla pharetra diam sit amet nisl suscipit. Et netus et malesuada fames ac turpis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Ut diam quam nulla porttitor massa id neque. Tellus elementum sagittis vitae et leo duis ut diam quam. Proin sagittis nisl rhoncus mattis rhoncus. Fringilla ut morbi tincidunt augue interdum velit euismod in. Purus non enim praesent elementum. Semper risus in hendrerit gravida rutrum quisque non tellus. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Mollis nunc sed id semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Diam ut venenatis tellus in metus vulputate eu scelerisque. Nunc congue nisi vitae suscipit tellus. Vitae suscipit tellus mauris a diam maecenas.",
  image: "../frontend/public/story_images/last_summer.jpg",
  creator: cindy._id
});

lastSummer.save();

const lateNights = new Story({
  title: "Late Nights",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla. Sem nulla pharetra diam sit amet nisl suscipit. Et netus et malesuada fames ac turpis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Ut diam quam nulla porttitor massa id neque. Tellus elementum sagittis vitae et leo duis ut diam quam. Proin sagittis nisl rhoncus mattis rhoncus. Fringilla ut morbi tincidunt augue interdum velit euismod in. Purus non enim praesent elementum. Semper risus in hendrerit gravida rutrum quisque non tellus. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Mollis nunc sed id semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Diam ut venenatis tellus in metus vulputate eu scelerisque. Nunc congue nisi vitae suscipit tellus. Vitae suscipit tellus mauris a diam maecenas.",
  image: "../frontend/public/story_images/late_nights.jpg",
  creator: cindy._id
});

lateNights.save();

const moon = new Story({
  title: "Moon",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla. Sem nulla pharetra diam sit amet nisl suscipit. Et netus et malesuada fames ac turpis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Ut diam quam nulla porttitor massa id neque. Tellus elementum sagittis vitae et leo duis ut diam quam. Proin sagittis nisl rhoncus mattis rhoncus. Fringilla ut morbi tincidunt augue interdum velit euismod in. Purus non enim praesent elementum. Semper risus in hendrerit gravida rutrum quisque non tellus. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Mollis nunc sed id semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Diam ut venenatis tellus in metus vulputate eu scelerisque. Nunc congue nisi vitae suscipit tellus. Vitae suscipit tellus mauris a diam maecenas.",
  image: "../frontend/public/story_images/moon.jpg",
  creator: cindy._id
});

moon.save();

const roomView = new Story({
  title: "Room with a View",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla. Sem nulla pharetra diam sit amet nisl suscipit. Et netus et malesuada fames ac turpis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Ut diam quam nulla porttitor massa id neque. Tellus elementum sagittis vitae et leo duis ut diam quam. Proin sagittis nisl rhoncus mattis rhoncus. Fringilla ut morbi tincidunt augue interdum velit euismod in. Purus non enim praesent elementum. Semper risus in hendrerit gravida rutrum quisque non tellus. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Mollis nunc sed id semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Diam ut venenatis tellus in metus vulputate eu scelerisque. Nunc congue nisi vitae suscipit tellus. Vitae suscipit tellus mauris a diam maecenas.",
  image: "../frontend/public/story_images/room_with_view.jpg",
  creator: blue._id
});

roomView.save();

const you = new Story({
  title: "You",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla. Sem nulla pharetra diam sit amet nisl suscipit. Et netus et malesuada fames ac turpis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Ut diam quam nulla porttitor massa id neque. Tellus elementum sagittis vitae et leo duis ut diam quam. Proin sagittis nisl rhoncus mattis rhoncus. Fringilla ut morbi tincidunt augue interdum velit euismod in. Purus non enim praesent elementum. Semper risus in hendrerit gravida rutrum quisque non tellus. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Mollis nunc sed id semper. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Diam ut venenatis tellus in metus vulputate eu scelerisque. Nunc congue nisi vitae suscipit tellus. Vitae suscipit tellus mauris a diam maecenas.",
  image: "../frontend/public/story_images/you.jpg",
  creator: cindy._id
});

you.save();
