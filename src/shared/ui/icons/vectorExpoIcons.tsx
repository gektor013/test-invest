import React from "react"

import { BarIconProps, IconType, VECTOR_ICONS_TYPE } from "@/types"

export function VectorExpoIcons<T extends keyof IconType>(props: BarIconProps<T>) {
  const { type, name, color, size = 28, style: styleProps } = props
  const ChosenIcon = VECTOR_ICONS_TYPE[type]

  if (!ChosenIcon) {
    console.error(`Invalid icon type: ${type as IconType}`)
    return null
  }

  return (
    <ChosenIcon
      name={name}
      size={size}
      color={color}
      style={[styleProps, { marginBottom: -3 }]}
    />
  )
}
