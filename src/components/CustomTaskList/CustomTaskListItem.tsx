import { Flex, Box, Text, Stack, Button } from "@twilio-paste/core";
import React from "react";
import { Icon } from "@twilio/flex-ui";

const CustomTaskListItem = (): JSX.Element | null => {
  return (
    <Box
      paddingLeft={"space30"}
      paddingRight={"space30"}
      borderBottomColor={"colorBorderWeak"}
      borderBottomWidth={"borderWidth10"}
      borderBottomStyle={"solid"}
      minHeight={"50px"}
      paddingTop={"space10"}
    >
      <Flex vAlignContent={"center"}>
        <Flex minWidth={"36px"} maxWidth={"36px"}>
          <Box
            padding="space10"
            width="100%"
            alignContent={"center"}
            textAlign={"center"}
          >
            <Icon icon="GenericTaskBold" />
          </Box>
        </Flex>
        <Flex grow vAlignContent="center">
          <Box
            padding="space10"
            width="100%"
            alignContent={"center"}
            marginLeft={"space30"}
          >
            <Text as={"h3"} fontWeight={"fontWeightBold"}>
              Task description
            </Text>
            <Text as={"h3"} fontSize={"fontSize20"}>
              Task status
            </Text>
          </Box>
        </Flex>
        <Flex vAlignContent="center">
          <Box padding="space10" alignContent={"center"}>
            <Stack orientation={"horizontal"} spacing={"space40"}>
              <Button
                variant="primary"
                size="circle_small"
                style={{ padding: "0.1rem" }}
              >
                <Icon icon="BackArrow" />
              </Button>
              <Button variant="destructive" size="circle_small">
                <Icon icon="Close" />
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CustomTaskListItem;
