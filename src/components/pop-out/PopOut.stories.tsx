import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Text } from "../text";
import { PopOut } from "./PopOut";
import { Box } from "../box";
import { Menu, MenuItem } from "../menu";
import { Header } from "../header";
import { Icon, Icons } from "../icon";
import { IconButton } from "../icon-button";

export default {
  title: "PopOut",
  component: PopOut,
} as ComponentMeta<typeof PopOut>;

export const Interactive = () => (
  <Box css={{ height: "100vh" }}>
    <PopOut
      align="start"
      content={() => (
        <Menu>
          <Header size="300" css={{ borderBottomWidth: "$300", padding: "0 $300" }}>
            <Text as="label" size="L400">
              Options
            </Text>
          </Header>
          <MenuItem before={<Icon size="100" src={Icons.Pencil} />}>
            <Text size="B400">Menu Item 1</Text>
          </MenuItem>
          <MenuItem before={<Icon size="100" src={Icons.Pencil} />}>
            <Text size="B400">Menu Item 2</Text>
          </MenuItem>
          <MenuItem before={<Icon size="100" src={Icons.Pencil} />}>
            <Text size="B400">Menu Item 3</Text>
          </MenuItem>
        </Menu>
      )}
    >
      {(ref, open, toggleOpen) => (
        <IconButton variant="SurfaceVariant" onClick={() => toggleOpen()} ref={ref}>
          <Icon src={Icons.VerticalDots} />
        </IconButton>
      )}
    </PopOut>
  </Box>
);