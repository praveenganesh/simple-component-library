import React from "react";

import { Select } from "./Select";

export default {
  title: "Example/Select",
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  disabled: false,
};
