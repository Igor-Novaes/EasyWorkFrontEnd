import React, {useState} from 'react'
import api from '../../Api'
import { Box, Heading, FormLabel, Input, Button, useToast} from '@chakra-ui/react'

export default function CreateCategory() {
    const [category, setCategory]=  useState()

    const toast = useToast()
    const handleNews = (e) =>{
        e.preventDefault()
        toast({title:'Creating Category', status:'info'})
        api.post('category/create', {
             type:category
        }).then((res) => toast({title:'Category Created', status:'success'})).catch((res) =>toast({title:'Error', description:res.message, status:'error'}))
    }


  return (
    <Box  w="100%" h="100%" p={{sm:1, md:2, lg:4}} px={40} display='flex' justifyContent='center'>
        <Box>
            <Heading textAlign="center" paddingTop={0} py={4} pb={6}>
                Create Category
            </Heading>
            <form onSubmit={handleNews}>
                <Box bg='white' p='10' width='40vw' borderRadius='10px'>
                    <FormLabel fontSize='20px' fontWeight='400' mt='4'>Title</FormLabel>
                    <Input variant='filled' name='category' value={category} onChange={(e) => setCategory(e.target?.value)} />
                    <Box display='flex' justifyContent='flex-end'>
                        <Button bg='black' color='white' border='1px solid black' mt='54'  _hover={{color:'black', backgroundColor:'white'}} variant='solid' type='submit'>
                            Submit
                        </Button>    
                    </Box>              
                </Box>
            </form>
        </Box> 
    </Box>
  )
}
