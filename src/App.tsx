import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import SongsList from './components/SongsList';
import StatsPage from './components/StatsPage';

const App = () => {
  return (
    <Box p={4}>
      <Tabs variant="soft-rounded" colorScheme="teal">
        <TabList>
          <Tab>Songs</Tab>
          <Tab>Stats</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SongsList />
          </TabPanel>
          <TabPanel>
            <StatsPage /> {/* New Component */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default App;
