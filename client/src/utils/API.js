import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  getMatches: function() {
    return new Promise((resolve, reject)=> {
      axios.get("https://randomuser.me/api/?gender=female&results=15").then((res)=> {
        const users = res.data.results;
        const results = users.map((user) => {
          return {
            name: user.name.first,
            age: user.dob.age,
            email: user.email,
            image: user.picture.medium
          }
        })
        resolve(results);
      }).catch((err) => reject(err));
    })
  },

  // Gets all records
  getAllUsers: function() {
    return axios.get("/api/records");
  },
  // gets a record with the given email
  getThisUser: function(q) {
    return axios.get("/api/records", { params: { q: "email:" + q } });
    // return axios.get("/api/records/" + email);
  },
  // Saves an book to the database
  saveNewUser: function(postData) {
    return axios.post("/api/records", postData);
  }
};
