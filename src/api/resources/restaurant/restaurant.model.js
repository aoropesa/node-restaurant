import mongoose from 'mongoose';

export const schema = {
  address: {
    building: {
        type: String,
        unique: true,
        required: true
    },
    coord:{
        type: Number,
        unique: true
    },
    street:{
        type: String,
        required: true
    },
    zipcode:{
        type: String,
        required: true
    },
  },
  borough:{
      type: String,
      required: true
  },
  cuisine:{
      type: String,
      required: true
  },
  grades:{
      date:{
          $date:{
              type: Number,
              required: true
          },
          grade:{
              type: String,
              required: true
          },
          score:{
              type: Number,
              required: true
          }
      }
  },
  name:{
      type: String,
      required: true
  },
  restaurant_id:{
      type: String,
      unique: true,
      required: true
  }
};

const restaurantSchema = new mongoose.Schema(schema);

export const Restaurant = mongoose.model('restaurant', restaurantSchema);

/* {
    "address": {
       "building": "1007",
       "coord": [ -73.856077, 40.848447 ],
       "street": "Morris Park Ave",
       "zipcode": "10462"
    },
    "borough": "Bronx",
    "cuisine": "Bakery",
    "grades": [
       { "date": { "$date": 1393804800000 }, "grade": "A", "score": 2 },
       { "date": { "$date": 1378857600000 }, "grade": "A", "score": 6 },
       { "date": { "$date": 1358985600000 }, "grade": "A", "score": 10 },
       { "date": { "$date": 1322006400000 }, "grade": "A", "score": 9 },
       { "date": { "$date": 1299715200000 }, "grade": "B", "score": 14 }
    ],
    "name": "Morris Park Bake Shop",
    "restaurant_id": "30075445"
  } */


  