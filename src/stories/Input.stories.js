import Input from "../components/Input"

export default {
  title: "Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  backgroundColor: "white",
  alert: false,
  required: false,
  size: "sm",
  flexDirection: "row",
  placeholder: "write here",
};

export const Column = Template.bind({});
Column.args = {
  type: "text",
  backgroundColor: "white",
  alert: false,
  required: false,
  size: "md",
  flexDirection: "column",
  placeholder: "write here",
};

export const Required = Template.bind({});
Required.args = {
  type: "text",
  backgroundColor: "#ffc9c9",
  alert: true,
  required: true,
  size: "sm",
  flexDirection: "row",
  placeholder: "write here",
};