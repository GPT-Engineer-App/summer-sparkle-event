import { Box, Container, Heading, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      <Box
        height="100vh"
        backgroundImage="url('/images/sommarminglet-hero.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        textAlign="center"
      >
        <Heading as="h1" size="2xl" mb={4}>
          Sommarminglet
        </Heading>
        <Text fontSize="xl">Uniting Minds for a Better Future</Text>
      </Box>
      <Container maxW="container.md" py={8}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to Sommarminglet</Text>
          <Text>
            Join us for a day of inspiration, networking, and fun as we come together to share ideas and create a better future.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;