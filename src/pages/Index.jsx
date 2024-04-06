import { Box, Heading, Link, List, ListItem, Text, Container, Flex, Spacer, Icon } from "@chakra-ui/react";
import { FaHackerNewsSquare } from "react-icons/fa";
import { FaUser, FaArrowUp, FaComment } from "react-icons/fa";

const newsItems = [
  {
    title: "The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await",
    domain: "medium.com",
    points: 109,
    author: "johndoe",
    comments: 42,
  },
  // Add more news items here
];

const Index = () => {
  return (
    <Container maxW="container.md">
      <Flex my={4} align="center">
        <Icon as={FaHackerNewsSquare} w={8} h={8} color="orange.500" />
        <Heading ml={2} as="h1" size="md">
          Hacker News
        </Heading>
        <Spacer />
      </Flex>
      <List spacing={2}>
        {newsItems.map((item, index) => (
          <ListItem key={index} p={2} borderBottom="1px" borderColor="gray.200">
            <Link href="#" color="orange.500" fontWeight="bold">
              {item.title}
            </Link>
            {item.domain && (
              <Text as="span" ml={2} fontSize="sm" color="gray.500">
                ({item.domain})
              </Text>
            )}
            <Flex align="center" mt={1} fontSize="sm" color="gray.600">
              <Icon as={FaArrowUp} />
              <Text ml={1}>{item.points} points</Text>
              <Text mx={2}>|</Text>
              <Icon as={FaUser} />
              <Text ml={1}>{item.author}</Text>
              <Text mx={2}>|</Text>
              <Icon as={FaComment} />
              <Text ml={1}>{item.comments} comments</Text>
            </Flex>
          </ListItem>
        ))}
      </List>
      <Box p={4} textAlign="center" borderTop="1px" borderColor="gray.200">
        <Text fontSize="sm">Built with Chakra UI</Text>
      </Box>
    </Container>
  );
};

export default Index;
