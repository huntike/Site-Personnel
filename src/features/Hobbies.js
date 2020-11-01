import React from 'react';
import {Text, WorldMap , Box, Heading,Image, Paragraph} from 'grommet';




export const Hobbies= () => {
  const [activeTokyo, setActiveTokyo] = React.useState();

  const [activeToulouse, setActiveToulouse] = React.useState();
  const [activeMiami, setActiveMiami] = React.useState();
  const [activeBogota, setActiveBogota] = React.useState();
  const [activeCartagena, setActiveCartagena] = React.useState();
  const [activeTunis, setActiveTunis] = React.useState();
  const [activeMontreal, setActiveMontreal] = React.useState();



    return(
      
 
      
          <Box  align="center" >
            <Box direction="row" height="large" wrap="true" justify="center" align="center" margin="large" >
              <Box  width="large" height="large"justify="center" align="center" background="light-1"  >
                          <Heading>L'escalade</Heading>
                          <Text>9 ans que je pratique de l'escalade</Text>
                          <Text></Text>
                    </Box>
                    <Box  flex="grow"width="large" height="large" background="light-5" align="center"  >
                      <Image  fit="cover" src={process.env.PUBLIC_URL + '/img/escalade.jpg'} />

                    </Box>        
            </Box>
            <Box className="box-map" align="center" width="large" background="dark-2"margin="large">
              <Heading>Mes voyages</Heading>
              <WorldMap className="worl-map"


                  places={[
                    {
                      name: 'Tokyo',
                      location: [35.652832, 139.839478],
                      color: 'graph-4',
                      onClick: () => setActiveTokyo(!activeTokyo) 
                                  & setActiveMiami(false)
                                  & setActiveToulouse(false)
                                  & setActiveBogota(false)
                                  & setActiveCartagena(false)
                                  & setActiveTunis(false),
                    },

                    {
                      name: 'Toulouse',
                      location: [37.8534, 2.3488],
                      color: 'graph-4',
                      onClick: () => setActiveToulouse(!activeToulouse)
                                  & setActiveTokyo(false)
                                  & setActiveMiami(false)
                                  & setActiveBogota(false)
                                  & setActiveMontreal(false)
                                  & setActiveCartagena(false)
                                  & setActiveTunis(false),
                    },
                    {
                      name: 'Miami',
                      location: [25.76167984, 	-80.1917902],
                      color: 'graph-4',
                      onClick: () => setActiveMiami(!activeMiami)
                      & setActiveTokyo(false)
                      & setActiveToulouse(false)
                      & setActiveBogota(false)
                      & setActiveMontreal(false)
                      & setActiveCartagena(false)
                      & setActiveTunis(false),
                    },
                    {
                      name: 'Bogota',
                      location: [4.598056, 	-74.075833],
                      color: 'graph-4',
                      onClick: () => setActiveBogota(!activeBogota)
                      & setActiveTokyo(false)
                      & setActiveMiami(false)
                      & setActiveToulouse(false)
                      & setActiveMontreal(false)
                      & setActiveCartagena(false)
                      & setActiveTunis(false),
                    },
                    {
                      name: 'Cartagena',
                      location: [10.4, 	-75.5 ],
                      color: 'graph-4',
                      onClick: () => setActiveCartagena(!activeCartagena)
                      & setActiveTokyo(false)
                      & setActiveMiami(false)
                      & setActiveBogota(false)
                      & setActiveToulouse(false)
                      & setActiveMontreal(false)
                      & setActiveTunis(false),
                    },
                    {
                      name: 'Tunis',
                      location: [33.886917, 	9.537499],
                      color: 'graph-4',
                      onClick: () => setActiveTunis(!activeTunis)
                      & setActiveTokyo(false)
                      & setActiveMiami(false)
                      & setActiveBogota(false)
                      & setActiveMontreal(false)
                      & setActiveCartagena(false)
                      & setActiveToulouse(false),
                    },
                    {
                      name: 'Montreal',
                      location: [45.5088400, 	-73.5878100],
                      color: 'graph-4',
                      onClick: () => setActiveMontreal(!activeMontreal)
                      & setActiveTokyo(false)
                      & setActiveMiami(false)
                      & setActiveBogota(false)
                      & setActiveCartagena(false)
                      & setActiveToulouse(false)
                      & setActiveTunis(false),

                    },
                    
                ]}
              />
              
              {activeTokyo && 
              <Box margin="large">
                <Heading>Tokyo</Heading>
                <Paragraph></Paragraph>
              </Box>}

              {activeToulouse && 
              <Box margin="large">
                <Heading>Toulouse</Heading>
                <Paragraph></Paragraph>

              </Box>}

              {activeMiami &&
              <Box margin="large">
                <Heading>Miami</Heading>
                <Paragraph></Paragraph>
              </Box>}

              {activeBogota && 
              <Box margin="large">
                <Heading>Bogota</Heading>
                <Paragraph></Paragraph>
              </Box>}

              {activeCartagena && 
              <Box margin="large">
                <Heading>Cartagena</Heading>
                <Paragraph></Paragraph>
              </Box>}

              {activeTunis && 
              <Box margin="large">
                <Heading>Tunis</Heading>
                <Paragraph></Paragraph>
              </Box>}
              
              {activeMontreal && 
              <Box margin="large">
                <Heading>Montreal</Heading>
                <Paragraph></Paragraph>
              </Box>}
            </Box>
          </Box>
     
      );
    

}
export default Hobbies;