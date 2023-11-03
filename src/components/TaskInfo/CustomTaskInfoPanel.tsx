import React from "react";

import {
  Box,
  Card,
  Heading,
  Paragraph,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@twilio-paste/core";
import CustomTaskInfoHeader from "./CustomTaskInfoHeader";

const CustomTaskInfo = (): JSX.Element | null => {
  return (
    <Box width={"100%"}>
      <CustomTaskInfoHeader />
      <Tabs baseId="Task info tabs">
        <TabList aria-label="Task info tab list">
          <Tab>Task Info</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box padding={"space40"}>
              <Stack orientation="vertical" spacing="space60">
                <Card>
                  <Heading as="h5" variant="heading50">
                    Task Information
                  </Heading>
                  <Paragraph>Detailed information about this task</Paragraph>
                </Card>
                <Card>
                  <Heading as="h5" variant="heading50">
                    Stuff
                  </Heading>
                  <Paragraph>
                    Action that can be performed on this task
                  </Paragraph>
                </Card>
              </Stack>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

CustomTaskInfo.displayName = "CustomTaskInfo";

export default CustomTaskInfo;
