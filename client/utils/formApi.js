const axios = require("axios");

const config = {
  method: "POST",
  headers: {
    "content-type": "multipart/form-data"
  },
  body: `You have a new query from ${name} phone: ${phone} address: ${address} email: ${email} message: ${message}`
};
