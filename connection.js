const mongoose = require('mongoose');

async function main(url) {
  return await mongoose.connect(url);
}

module.exports={main}

