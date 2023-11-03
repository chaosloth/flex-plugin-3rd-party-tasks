import React from "react";
import { Box, Flex } from "@twilio-paste/core";
import CustomTaskInfo from "../TaskInfo/CustomTaskInfoPanel";
import CustomTaskList from "../CustomTaskList/CustomTaskList";

const CustomNoTasks = (): JSX.Element | null => {
  return (
    <Box height={"100%"} verticalAlign={"top"} width={"100%"}>
      <Flex vAlignContent="top">
        <Flex grow minWidth={"320px"} width={"320px"}>
          <Box verticalAlign={"top"} height={"100%"} minWidth={"100%"}>
            <CustomTaskList />
          </Box>
        </Flex>
        <Flex grow>
          <Box
            minWidth={"320px"}
            width={"100%"}
            height={"100%"}
            backgroundColor={"colorBackgroundBody"}
            verticalAlign={"top"}
          >
            <CustomTaskInfo />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

CustomNoTasks.displayName = "CustomNoTasks";

export default CustomNoTasks;
