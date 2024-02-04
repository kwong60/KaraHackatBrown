import React, { useState, useEffect } from "react";
import title from "./images/title.png";
import axios from "axios"
import yes from "./images/yes.png";
import no from "./images/no.png";
import logo from "./images/logo.png";
import activities_dict from "./activities_dict.json"


export function Recommendations() {

  const activities_dictionary = {
    plant_city: {
      name: "Plant City",
      location: "334 South Water Street", // ? something like that
      dei: ["Plant-based", "Women-owned"],
      description:
        "Award-winning, chef-driven cuisine at the world’s very first plant-based food hall.",
    },
  };

  console.log(activities_dictionary)

  // const [activitiesDict, setActivitiesDict] = useState({});

  // useEffect(() => {
  //   fetchData(); // Combine both data fetching functions
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const weatherResponse = await axios.post(
  //       "http://localhost:3232/checkweather",
  //       {
  //         withCredentials: true,
  //       }
  //     );

  //     const code = weatherResponse.code;
  //     const text = weatherResponse.text;
  //     console.log(code);
  //     console.log(text);

  //     if (weatherResponse.status === "success") {
  //       try {
  //         const interestsResponse = await axios.post(
  //           "http://localhost:3232/get_interests",
  //           {
  //             withCredentials: true,
  //           }
  //         );

  //         const activitiesDictResponse = await axios.get(
  //           "http://localhost:3232/get_activities_dict"
  //         );
  //         const fetchedActivitiesDict =
  //           activitiesDictResponse.data.activities_dict;

  //         setActivitiesDict(fetchedActivitiesDict);
  //       } catch (error) {
  //         console.log("Failed to get interests or activities_dict");
  //         console.log(error);
  //       }
  //     }
  //   } catch (error) {
  //     console.log("Failed to check weather");
  //     console.log(error);
  //   }
  // };

  return (
    <div className="App">
      <div class="fixed_element">
        <img src={logo} />
      </div>
      <h1>
        <img src={title} />
      </h1>
      <h2>
        Based on both today's <b>SUNNY</b> weather and you and your friends'
        interests,
        <br></br>Here are your suggestions!
      </h2>

      <div className="recommendation">
        <p>
          <b>Name:</b> Plant City
        </p>
        <p>
          <b>Category:</b> Food
        </p>
        <p>
          <b>Location:</b> 334 South Water Street
        </p>
        <p>
          <b>DEI:</b> "Plant-based", "Women-owned"
        </p>
        <p>
          <b>Description:</b>
          "Award-winning, chef-driven cuisine at the world’s very first
          plant-based food hall."
        </p>
      </div>

      <div className="recommendation">
        <p>
          <b>Name:</b> Scentique
        </p>
        <p>
          <b>Category:</b> Entertainment
        </p>
        <p>
          <b>Location:</b> 136 Taunton Ave.
        </p>
        <p>
          <b>DEI:</b> "Women-owned", "Small Business"
        </p>
        <p>
          <b>Description:</b>
          Rhode Island's first Candle Bar & Fragrance Studio! Make a custom
          candle start to finish!
        </p>
      </div>

      <div></div>
      {/*suggestion 1*/}
      {/* <div class="vote_button1">
        <div class="sug1yes">
          <button>
            <img src={yes} />
          </button>{" "}
        </div>
        <div class="sug1no">
          <button>
            <img src={no} />
          </button>{" "}
        </div>
      </div> */}
      <div className="recommendation">
        <p>
          <b>Name:</b> Angelo's Civita Farnese
        </p>
        <p>
          <b>Category:</b> Food
        </p>
        <p>
          <b>Location:</b> 141 Atwells Ave
        </p>
        <p>
          <b>DEI:</b> "Women-owned", "Small Business"
        </p>
        <p>
          <b>Description:</b>
          "Serving Italian comfort food since 1924. Awarded Best Locally Owned
          Family Friendly Restaurant in 2019."
        </p>
      </div>
      <div className="recommendation">
        <p>
          <b>Name:</b> Pick up three pieces of trash
        </p>
        <p>
          <b>Category:</b> Wild Card
        </p>
        <p>
          <b>Location:</b> Anywhere!
        </p>
        <p>
          <b>DEI:</b> None
        </p>
        <p>
          <b>Description:</b>
          Contribute to your community in a simple and meaningful way.
        </p>
      </div>
      {/*sugestion 2*/}
      {/* <div class="vote_button2">
        <div class="sug2yes">
          <button>
            <img src={yes} />
          </button>{" "}
        </div>
        <div class="sug2no">
          <button>
            <img src={no} />
          </button>{" "}
        </div>
      </div> */}
      {/*suggestion 3 */}
      {/* <div class="vote_button3">
        <div class="sug3yes">
          <button>
            <img src={yes} />
          </button>{" "}
        </div>
        <div class="sug3no">
          <button>
            <img src={no} />
          </button>{" "}
        </div>
      </div> */}
    </div>
  );
}
