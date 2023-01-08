import { Container, Image, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

function Tech2() {
  return (
   
       

<Container>
<Tabs defaultIndex={1}>
  <TabPanels>
    <TabPanel>
      <Image
        boxSize='200px'
        fit='cover'
        src='https://cdn.svgporn.com/logos/css-3.svg'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='200px'
        fit='cover'
        src='https://cdn.svgporn.com/logos/javascript.svg'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='200px'
        fit='cover'
        src='https://cdn.svgporn.com/logos/react.svg'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='200px'
        fit='cover'
        src='https://img.icons8.com/color/344/chakra-ui.png'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='200px'
        fit='cover'
        src='https://cdn.svgporn.com/logos/netlify.svg'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='200px'
        fit='cover'
        src='https://cdn.svgporn.com/logos/github-icon.svg'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='200px'
        fit='cover'
        src='https://cdn.svgporn.com/logos/git-icon.svg'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='200px'
        fit='cover'
        src='https://cdn.svgporn.com/logos/nodejs.svg'
      />
    </TabPanel>
  </TabPanels>
  <TabList>
    <Tab>CSS</Tab>
    <Tab>JavaScript</Tab>
    <Tab>ReactJs</Tab>
    <Tab>Chakra UI</Tab>
    <Tab>Netlify</Tab>
    <Tab>GitHub</Tab>
    <Tab>Git</Tab>
    <Tab>NodeJs</Tab>
  </TabList>
</Tabs>
</Container>
    
  )
}

export default Tech2