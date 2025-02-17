import React from "react"

import { SVGIconNames } from "@/types/icons"
import { colors } from "@/utils/constants/colors"
import * as SVGIcons from "@/utils/constants/icons"

interface IProps {
  name: SVGIconNames
  width?: number
  height?: number
  color?: string
  opacity?: number
}

export const SVGIcon: React.FC<IProps> = ({
  name,
  width = 24,
  height = 24,
  opacity = 0.5,
  color = colors.white
}) => {
  const IconComponent = SVGIcons[name]

  return <IconComponent width={width} height={height} stroke={color} opacity={opacity} />
}
