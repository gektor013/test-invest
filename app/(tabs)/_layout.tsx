import React from "react"
import { Tabs } from "expo-router"

import Colors from "@/utils/constants/colors"
import { VectorExpoIcons } from "@/shared/ui"
import { useAppSelector } from "@/store"

export default function TabLayout() {
  const { isAuthenticated } = useAppSelector((stat) => stat.bober_auth)
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors["light"].tint
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Головна",
          // href: null,
          tabBarIcon: ({ color }) => (
            <VectorExpoIcons type="Octicons" name="home" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="project"
        options={{
          title: "Проект",
          // href: null,
          tabBarIcon: ({ color }) => (
            <VectorExpoIcons type="Octicons" name="home" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Аккаунт",
          href: isAuthenticated ? "/account" : null,
          tabBarIcon: ({ color }) => (
            <VectorExpoIcons type="Feather" name="user" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: "Оплата",
          href: isAuthenticated ? "/payment" : null,
          tabBarIcon: ({ color }) => (
            <VectorExpoIcons type="MaterialIcons" name="payment" color={color} />
          )
        }}
      />
    </Tabs>
  )
}
