import React from 'react';
import { Box, Text, SimpleGrid, Image, Flex, Button } from '@chakra-ui/react'
import { Icon } from '@iconify/react';


function CardHome({_id, title, category, text, updated}) {

  return (
    <Box w='100%' bg="white" p={2} shadow="lg" py={4}>
        <Flex marginTop='5px'>
            <Text  fontWeight='bold'>{title}</Text>
        </Flex>
        <Flex w="100%" justifyContent="center">
          <Text>{text}</Text>
        </Flex>
        <Flex justifyContent='center' flexDirection='column' fontSize='12px' px={2}>
        <Text color='#00A000' fontSize='17px' fontWeight='bold'>Published</Text>
            <Text color='#a6a4a4'>{updated}</Text>
        </Flex>        
        <Flex px={2} pt={4}>

        </Flex>
    </Box>

  );
}

export default CardHome;