import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../Api'
import { Box, Heading, FormLabel, Input, Textarea, RadioGroup, HStack, Radio, Button, background, useToast, Spinner, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, PopoverFooter, ButtonGroup} from '@chakra-ui/react'
import purgeStoredState from 'redux-persist/es/purgeStoredState'

export default function CreateNews() {
    const [data, setData] = useState()
    const [title, setTitle] = useState()
    const [text, setText] = useState()
    const [category, setCategory]=  useState()
    const [loading, setLoading]=  useState(true)
    
    const navigate = useNavigate()
    const {id} = useParams()

    const toast = useToast()
    const handleNews = (e) =>{
        e.preventDefault()
        toast({title:'Creating News', status:'info'})
        api.post('news/create', {
            title,text, type:category
        }).then((res) => toast({title:'News Created', status:'success'})).catch((res) =>toast({title:'Error', description:res.message, status:'error'}))
    }

    const getData = () =>{
      api.get('category/').then((res) => setData(res.data))
    }
    const getNews = () =>{
        setLoading(true)
       if(id) api.get(`news/${id}`).then((res) => {setTitle(res.data?.title);setText(res.data?.text);setCategory(res.data?.type); setLoading(false)})
    }
    const handleUpdate = () =>{
        toast({title:'Update News', status:'info'})
        api.put(`news/${id}`, {
            title,text, type:category
        }).then((res) => toast({title:'News Updated', status:'success'})).catch((res) =>toast({title:'Error', description:res.message, status:'error'}))
    }
    const handleDelete = () =>{
        toast({title:'Deleting', status:'info'})
        api.delete(`news/${id}`).then((res) => {toast({title:'News Deleted', status:'success'}); navigate('/')}).catch((res) =>toast({title:'Error', description:res.message, status:'error'}))
    }
    useEffect(()=>{
      getData()
      getNews()
    },[id])


  return (
    <Box  w="100%" h="100%" p={{sm:1, md:2, lg:4}} px={40} display='flex' justifyContent='center'>
        <Box>
            <Heading textAlign="center" paddingTop={0} py={4} pb={6}>
                Publish a news
            </Heading>
            <form onSubmit={id ? handleUpdate : handleNews}>
                <Box bg='white' p='10' width='40vw' borderRadius='10px'>
                  {  !loading ? <div> 
                        <FormLabel fontSize='20px' fontWeight='400' mt='4'>Title</FormLabel>
                        <Input variant='filled' name='title' value={title} onChange={(e) => setTitle(e.target?.value)} />
                        <FormLabel fontSize='20px' fontWeight='400' mt='4' >Text</FormLabel>
                        <Textarea variant='filled' name='text' value={text} onChange={(e) => setText(e.target?.value)}/>
                        <FormLabel fontSize='20px' fontWeight='400' mt='4'>Category</FormLabel>
                        <RadioGroup name='type' value={category} onChange={(e) => setCategory(e)}>
                            <HStack flexWrap='wrap' gap='4'>
                                {data?.map((res) =>(
                                    <Radio display='flex' value={res._id}>{res.type}</Radio>
                                ))}
                            </HStack>
                        </RadioGroup>
                    </div> : <Spinner />}
                    <Box display='flex' justifyContent='flex-end'>
               <Popover>
                <PopoverTrigger>
                     <Button color='red' _hover={{textDecoration:'underline'}} mt='54' variant='text'>
                         Delete
                     </Button>  
                </PopoverTrigger>
                <PopoverContent>
          <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Are you sure you want to continue with your action?
          </PopoverBody>
          <PopoverFooter display='flex' justifyContent='flex-end'>
            <ButtonGroup size='sm'>
              <Button variant='outline'>Cancel</Button>
              <Button colorScheme='red' onClick={handleDelete}>Delete</Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
                </Popover>
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
