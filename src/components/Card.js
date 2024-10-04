import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
  <VStack backgroundColor='white' borderRadius={12} boxSize='lg' pb={0}>
    <Image src={imageSrc} borderRadius={12}/>
    <VStack p={4} align='left'>
      <Heading as='h2' size='md' color='black'>{title}</Heading>
      <Text color='grey'>{description}</Text>
      <HStack color='black'>
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size='1x' />
      </HStack>
    </VStack>
  </VStack>
  );
};

export default Card;
