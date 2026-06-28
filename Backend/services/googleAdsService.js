import axios from "axios";

const fetchGoogleLeads =
 async()=>{

  try {

    const response =
      await axios.get(

      process.env.GOOGLE_API_URL,

      {

        headers:{

          Authorization:
          `Bearer ${process.env.GOOGLE_ACCESS_TOKEN}`
        }
      }
    );

    return response.data;

  } catch(error){

    throw new Error(
      error.message
    );
  }
};

export default fetchGoogleLeads;

//the below code is used to test with dummy data api

// export default fetchGoogleLeads;

// import axios from "axios";

// const fetchGoogleLeads =
//  async()=>{

//   const response =
//     await axios.get(
//       "https://randomuser.me/api/?results=5"
//     );

//   return response.data.results;
// };

