import {
  Button as Hbutton,
  ButtonProps as HButtonProps,
} from "@headlessui/react";
interface ButtonProps extends HButtonProps {}
export default function Button(props: ButtonProps) {
  return <Hbutton {...props} />;
}
