import React from "react";
import * as Flex from "@twilio/flex-ui";
import { FlexPlugin } from "@twilio/flex-plugin";
import { CustomizationProvider } from "@twilio-paste/core/customization";

import CustomNoTasks from "./components/CustomNoTasks/CustomNoTasks";

const PLUGIN_NAME = "Flex3rdPartyTasksPlugin";

export default class Flex3rdPartyTasksPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    const options: Flex.ContentFragmentProps = { sortOrder: 2 };

    // Add Paste
    flex.setProviders({
      PasteThemeProvider: CustomizationProvider,
    });

    // flex.AgentDesktopView.Panel1.Content.add(
    //   <CustomTaskList key="Flex3rdPartyTasksPlugin-component" />,
    //   options
    // );

    // flex.TaskList.Content.add(
    //   <CustomTaskList key="Flex3rdPartyTasksPlugin-component-inside" />,
    //   options
    // );

    flex.NoTasksCanvas.Content.replace(
      <CustomNoTasks key="Flex3rdPartyTasks" />
    );
  }
}
