import { BackButton } from "@/shared/components"
import { colors } from "@/utils/constants/colors"
import { APP_FONTS } from "@/utils/constants/fonts"
import { Stack } from "expo-router"

export default function RecoverPasswordLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.white
        },
        headerShadowVisible: false,
        headerTintColor: colors.mine_shaft,
        gestureEnabled: false,
        headerTitleStyle: {
          fontFamily: APP_FONTS["Inter500"]
        },
        headerLeft: () => <BackButton />,
        headerTitle: ""
      }}
    />
  )
}
