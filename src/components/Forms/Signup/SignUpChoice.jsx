import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SignUpChoiceCard = ({ title, image, desc, to, button }) => {
  return (
    <Card w={"60"} mt="8" className="dark:bg-black dark:text-white bg-white">
      <CardBody align="center" justify="center">
        <Avatar src={image} align="center" justify="center" size="2xl" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
        </Stack>
        <br />
        <Text color={"#9ba4b5"} textAlign={"justify"} fontSize={"sm"}>
          {desc}
        </Text>
      </CardBody>
      <Divider />
      <CardFooter align="center" justify="center">
        <Link to={`/${to}`}>
          <Button variant="solid" colorScheme="red">
            {button}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SignUpChoiceCard;
