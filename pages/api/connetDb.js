const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testDB', 
	{
	 useNewUrlParser: true,
	 useUnifiedTopology: true,
	 useFindAndModify: false
	})
.then(()=>{
	console.log('connected');
	})
.catch((e)=>{
	console.log("Something went wrong", e);
	})

