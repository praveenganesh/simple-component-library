import React from "react";

import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  type: "text",
  autoFocus: false,
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  type: "text",
  autoFocus: false,
  disabled: false,
};
