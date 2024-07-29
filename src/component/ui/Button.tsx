import {
  Button as Hbutton,
  ButtonProps as HButtonProps,
} from "@headlessui/react";
import clsx from "clsx";
import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";
interface ButtonProps extends HButtonProps {
  children: ReactNode;
}
export default function Button(props: ButtonProps) {
  return (
    <Hbutton as={Fragment} {...props}>
      {({ hover, active }) => (
        <button
          className={clsx(
            "rounded-lg m-1 py-2 px-4 text-sm text-white",
            !hover && !active && "bg-gray-700",
            hover && !active && "bg-gray-700  outline-white",
            active && "bg-gray-500"
          )}
        >
          {props.children}
        </button>
      )}
    </Hbutton>
  );
}
