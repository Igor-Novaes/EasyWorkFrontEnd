import React from 'react';
import { Tooltip } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import { Box, Text, InputGroup, SimpleGrid, Input, InputRightElement, Link, Flex } from '@chakra-ui/react' 



const CustomLink = ({href, children, target}) => <Link target={target} href={href} _hover={{textDecoration: 'none'}}>{children}</Link>

export default function Header() {
    return (
    <Box bg='#222222' w='100%' h='110px' color='white' direction='row' display='flex' alignItems="center">
        <SimpleGrid columns={2} w='100%' justifyContent='space-between'>
            <CustomLink href="/">    
                <Box display='flex' direction='row' alignItems="center" marginLeft='15px' width='60%'>
                <Icon icon="noto:rolled-up-newspaper" width={100}  border='1px solid red'/>
                    <Text fontSize='40px' fontWeight='bold' fontStyle='italic' marginLeft='10px'>
                        NEWSLETTER
                    </Text>
                </Box>
            </CustomLink>
            <Box display ='flex' alignItems = 'center' justifyContent='flex-end'>
                <CustomLink href='/createNews' >
                    <Tooltip label="Add a news" color='#011627' bg='white' borderRadius='5px'>
                        <Icon icon="mdi:newspaper-plus" width='25px' />
                    </Tooltip>
                </CustomLink>

                <CustomLink href="/createCategory">
                    <Tooltip label="Add a category" color='#011627' bg='white' borderRadius='5px'>
                        <Icon icon="fluent:bookmark-add-24-filled" width='25px' style= {{margin:'0 30px 0 30px'}}/>
                    </Tooltip>
                </CustomLink>
            </Box>
        </SimpleGrid>
    </Box>
  )
}
