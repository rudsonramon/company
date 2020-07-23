const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://node-shop:${process.env.PASSWORD}@cluster0-vrvbf.mongodb.net/Consultoria?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

const CompanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

const Company = mongoose.model('Company', { CompanySchema });

module.exports = { CompanySchema, Company };
