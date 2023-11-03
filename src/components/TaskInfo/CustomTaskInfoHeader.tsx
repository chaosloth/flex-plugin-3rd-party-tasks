import React from "react";

import { Box, Button, Flex, Heading, Stack, Text } from "@twilio-paste/core";

const CustomTaskInfoHeader = (): JSX.Element | null => {
  return (
    <Box padding={"space40"}>
      <Flex>
        <Flex>
          <Stack orientation={"vertical"} spacing={"space10"}>
            <Heading as="h3" variant="heading50" marginBottom="space0">
              Task heading label
            </Heading>
            <Text as={"p"}>Task status</Text>
          </Stack>
        </Flex>
        <Flex grow hAlignContent={"right"} vAlignContent={"center"}>
          <Button variant={"primary"} size="small">
            Activate
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

CustomTaskInfoHeader.displayName = "CustomTaskInfoHeader";

export default CustomTaskInfoHeader;
