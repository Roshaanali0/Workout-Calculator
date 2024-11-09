import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Stack,
} from "@chakra-ui/react";
const WorkoutForm = () => {
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault(); 
    const workout = { reps, load, title };
    try {
      const response = await fetch("/api/workouts", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(workout),
      });
      const data = await response.json();
      if (data) {
        setError(null);
        console.log("Success, new data has been added.");
        setLoad("");
        setReps("");
        setTitle("");
        window.location.reload(); // Refresh the page
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.log("Error Submitting Form" + error.message);
    }
  };

  return (
    <div>
      <form className="create" onSubmit={submitHandler}>
        <Container className="formcontrol">
          <FormControl isRequired >
            <FormLabel color="red">New Workout</FormLabel>
            <Stack>
              <Input
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                value={title}
                size="lg"
                foucsBorderColor="red"
                _placeholder={{ opacity: 0.5, color: "red" }}
                className='input'
              />
              <Input
                foucsBorderColor="red"
                placeholder="Reps"
                onChange={(e) => setReps(e.target.value)}
                type="number"                className='input'

                value={reps}
                size="lg"
                _placeholder={{ opacity: 0.5, color: "red" }}
              />
              <Input
                foucsBorderColor="red"                className='input'

                placeholder="Load"
                onChange={(e) => setLoad(e.target.value)}
                type="number"
                value={load}
                _placeholder={{ opacity: 0.5, color: "red" }}
                size="lg"
              />
              <Button type="submit" colorScheme="red">
                Submit
              </Button>
            </Stack>
            {error && <div className="error">{error}</div>}
          </FormControl>
        </Container>
      </form>
    </div>
  );
};

export default WorkoutForm;
