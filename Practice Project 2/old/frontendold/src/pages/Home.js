import React, { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { Grid, GridItem } from "@chakra-ui/react";
// import Navbar from "../components/Navbar";
import Header from "../components/header";


const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("/api/workouts/");
        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }
        const json = await response.json();
        setWorkouts(json);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <Grid
        templateAreas={`"header header"
        "nav main"
        "nav footer"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'25% 1fr'} // Adjusted to make nav occupy 20% of the page
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl="2"  minH="150px" area={"header"}>
          <Header/>
        </GridItem>
        <GridItem pl="1"  area={"nav"} className='navbar'>
          <WorkoutForm />
        </GridItem>
        <GridItem pl="2"  area={"main"} className='main'>
          <Grid
            templateColumns={`repeat(auto-fill, minmax(550px, 1fr))`}
            gap="5px"
          >
            {workouts &&
              workouts.map((workout, index) => (
                <WorkoutDetails key={index} workout={workout} />
              ))}
          </Grid>
        </GridItem>
        <GridItem pl="2"  area={"footer"}>
          
        </GridItem>
      </Grid>
    </div>
  );
};

export default Home;




// variable ...object
// workout ...workouts
// +1 ...45
// -1 