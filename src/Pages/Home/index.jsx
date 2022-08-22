import React, {useEffect, useState} from 'react'
import api from '../../Api'
import { Tabs, TabList, Tab, InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import { Box, Heading, SimpleGrid , Spinner, Flex, Link  } from '@chakra-ui/react'
import CardHome from '../../Components/CardHome/CardHome';
import { Icon } from '@iconify/react';

export default function Home() {
    const [data, setData] = useState()
    const [category, setCategory] = useState()
    const [unitCategory, setUnitCategory] = useState()
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

    let timeout

    const getData = () =>{
      setLoading(true)
      api.get((unitCategory ? `news/category/${unitCategory}` : 'news/')+ (search ? `?search=${search}` : '' )).then((res) =>{ setData(res.data); setLoading(false)})
    }

    const getCategory = () =>{
      api.get('category/').then((res) => setCategory(res.data))
    }

    useEffect(()=>{
      getCategory()
    },[])
    useEffect(()=>{
      clearTimeout(timeout)
      timeout = setTimeout(() => getData(), 1000)
      return () => clearTimeout(timeout)
    },[search, unitCategory])

    

  return (
    <Box  w="100%" h="100%" p={{sm:1, md:2, lg:4}} px={40}>
        <Box>
            <Heading textAlign="center" paddingTop={0} py={4} pb={6}>
                NEWS
            </Heading> 
           <Tabs size='lg'>
              <TabList>
                <Tab>All</Tab>
                {category?.map((res) =>(<Tab onClick={() => setUnitCategory(res._id)}>{res.type}</Tab>))}
                <InputGroup width='450px' marginLeft='auto'>
                    <Input bg='white' placeholder='Search' size='md' color='black' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <InputRightElement  children={<Icon icon="bi:search" color='black'/>} />
                </InputGroup>
              </TabList>
           { data && !loading 
            ?  <SimpleGrid columns={{sm:1, md:3, lg:4, xl:5}} gap={8} columnGap={8}>
                  {data?.map((item)=>(<Link _hover={{textDecoration:'none'}} href={`/editNews/${item._id}`}><CardHome {...item}/></Link>))}
               </SimpleGrid>     
            : <Flex w="100%" justifyContent="center"><Spinner color="#ff6500"/></Flex>
            }
            </Tabs>
        </Box> 
    </Box>
  )
}
