"use client";

import { Icon as Iconify } from "@iconify/react";

type Props = {
  icon: string;
  size: number;
  className?: string;
};

export default function Icon({ icon, size, className }: Props) {
  return <Iconify icon={icon} width={size} height={size} className={className} />;
}
