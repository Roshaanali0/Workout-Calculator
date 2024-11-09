import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  Text,
  StackDivider,
  Container,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
//importing date-fns
const {formatDistanceToNow} = require("date-fns");


const WorkoutDetails = ({ workout }) => {
  const handleClick = async () => {
    try {
      const response = await fetch("/api/workouts/" + workout._id, {
        method: "DELETE",
      });
      const json = await response.json();
      if (json) {
        console.log("The workout was deleted successfully from the database");
        window.location.reload();
      }else{
        throw new Error("Couldn't delete this record");
      }
    } catch (error) {
      throw new Error("Couldn't delete this record" + error);
    }
  };
  return (
    <div className="parent">
      <SimpleGrid className="child" columns={2} spacingY="20px" spacingX="40px" >
        <Box>
          <Container>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline" 
            >
              <CardHeader position="relative">
                <Heading color='red' size="md">{workout.title}</Heading>
                <Box position="absolute" bottom="0" right="0">
                  <IconButton
                    colorScheme="red"
                    variant="ghost"
                    size="lg"
                    icon={<DeleteIcon />}
                    onClick={handleClick}
                  />
                </Box>
              </CardHeader>

              <CardBody color='red'>
                <Stack  divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Load (kg):
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {workout.load}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Reps
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {workout.reps}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Time
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true})}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Container>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default WorkoutDetails;
