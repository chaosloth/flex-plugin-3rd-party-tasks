import React, { useState } from "react";

import { Alert } from "@twilio-paste/core/alert";
import { Text } from "@twilio-paste/core/text";

const CustomTaskListHeader = (): JSX.Element | null => {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) {
    return null;
  }

  const dismiss = () => setIsOpen(false);

  return (
    <Alert onDismiss={dismiss} variant="neutral">
      <Text as="div">These are 3rd party tasks</Text>
    </Alert>
  );
};

export default CustomTaskListHeader;
