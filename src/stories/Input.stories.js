import Input from "../components/Input"

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Navbar = Template.bind({});
Navbar.args = {
  type: "text",
  backgroundColor: "white",
  alert: false,
  required: false,
  size: "sm",
  flexDirection: "row",
};

export const Primary = Template.bind({});
Primary.args = {
  type: "text",
  backgroundColor: "white",
  alert: false,
  required: false,
  size: "md",
  flexDirection: "column",
};

export const Extra = Template.bind({});
Extra.args = {
  type: "text",
  backgroundColor: "#ffc9c9",
  alert: true,
  required: true,
  size: "sm",
  flexDirection: "row",
};