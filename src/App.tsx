import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import SongsList from "./components/SongsList";
import StatsPage from "./components/StatsPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Box>
      <NavBar />
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
              <StatsPage />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default App;
