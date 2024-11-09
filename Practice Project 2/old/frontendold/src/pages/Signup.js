import React, { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// import useSignupHook from "../hooks/signupHook";

const Signup = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const person = { name, email, password };
    try {
      const user = await fetch("/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(person),
      });
      const json = await user.json();
      if (!json) {
        setError(json.error);
      } else  {
        setError(null);
        localStorage.setItem("user", JSON.stringify(json));
        setName("");
        setPassword("");
        setEmail("");

        // window.location.reload();
      }
    } catch (error) {
      console.log("Error Submitting Form" + error.message);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Flex h="100vh" alignItems="center" justifyContent="center">
        <Flex
          flexDirection="column"
          bg={formBackground}
          p={12}
          borderRadius={8}
          boxShadow="lg"
        >
          <Heading mb={6} color={"red"}>
            Log In
          </Heading>
          <Input
            placeholder="Name"
            type="text"
            variant="filled"
            mb={3}
            onChange={(e) => setName(e.target.value)}
            value={name}
            foucsBorderColor="red"
            _placeholder={{ opacity: 0.5, color: "red" }}
          />
          <Input
            placeholder="Email"
            type="email"
            variant="filled"
            mb={3}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            foucsBorderColor="red"
            _placeholder={{ opacity: 0.5, color: "red" }}
          />
          <Input
            placeholder="**********"
            type="password"
            variant="filled"
            mb={6}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            foucsBorderColor="red"
            _placeholder={{ opacity: 0.5, color: "red" }}
          />
          <Button type="submit" colorScheme="red" mb={8}>
            Sign In
          </Button>
          {error && <div className="error">{error}</div>}
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="dark_mode" mb="0">
              Enable Dark Mode?
            </FormLabel>
            <Switch
              id="dark_mode"
              colorScheme="red"
              size="lg"
              onChange={toggleColorMode}
            />
          </FormControl>
        </Flex>
      </Flex>
    </form>
  );
};

export default Signup;
