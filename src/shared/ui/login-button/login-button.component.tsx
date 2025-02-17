import { Pressable, StyleSheet, View } from "react-native"
import { useRouter } from "expo-router"

import { colors } from "@/utils/constants/colors"

import { ItemText } from "../text/text.components"

export const LoginNavbarButton = () => {
  const router = useRouter()

  return (
    <Pressable
      onPress={() => router.push("/(public)/(auth)/signin")}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgba(14, 163, 204, 0.5)" : colors.blue
        },
        style.presContainer
      ]}
    >
      <View style={style.textContainer}>
        <ItemText style={style.btnText}>Увійти</ItemText>
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create({
  presContainer: {
    borderRadius: 15
  },
  textContainer: {
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  btnText: {
    color: colors.white,
    fontSize: 17
  }
})
