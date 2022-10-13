import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export type HeadingProps = {
  asChild?: boolean;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
};

export function Heading({ size = "md", asChild, children }: HeadingProps) {
  const Component = asChild ? Slot : "h2";

  const textClasses = clsx("text-gray-100 font-bold", {
    "text-lg": size === "sm",
    "text-xl": size === "md",
    "text-2xl": size === "lg",
  });

  return <Component className={textClasses}>{children}</Component>;
}
