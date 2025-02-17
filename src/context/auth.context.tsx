import { createContext, ReactNode, useContext, useEffect } from "react"
import { AllRoutes, usePathname, useRouter } from "expo-router"

import useActions from "@/hooks/useActions"
import { useAppSelector } from "@/store"
import { useGetMeQuery } from "@/store/services/usersApi"

export interface AuthContextValue {
  handlePushRoute: (
    route: AllRoutes | never,
    data?: Record<string, unknown>
  ) => AllRoutes | undefined
  handleReplaceRoute: (
    route: AllRoutes | never,
    data?: Record<string, unknown>
  ) => AllRoutes | undefined
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

interface ProviderProps {
  children: ReactNode
}

export const AuthProvider = (props: ProviderProps) => {
  const router = useRouter()
  const pathName = usePathname()
  const { setUserData } = useActions()

  const { isAuthenticated } = useAppSelector((state) => state.bober_auth)

  const {
    data: getMeData,
    refetch: refetchGetMeData,
    isFetching: isGetMeFetching
  } = useGetMeQuery("", {
    skip: !isAuthenticated
  })

  const handlePushRoute = (route: AllRoutes, data: Record<string, string | string[]>) => {
    const publicRoute = route.includes("public")

    if (publicRoute || isAuthenticated) {
      router.push({
        pathname: route as AllRoutes,
        params: data
      })
    } else if (!publicRoute && !isAuthenticated) {
      return router.push("/(public)/(auth)/signin")
    }
  }
  const handleReplaceRoute = (
    route: AllRoutes,
    data?: Record<string, string | string[]>
  ) => {
    router.replace({
      pathname: route as AllRoutes,
      params: data
    })
  }

  useEffect(() => {
    if (getMeData) {
      setUserData(getMeData)
    }
  }, [getMeData, isGetMeFetching])

  // IF NEED MAKE REREQUEST
  useEffect(() => {
    if (pathName && isAuthenticated) {
      refetchGetMeData()
    }
  }, [pathName, isAuthenticated])

  return (
    <AuthContext.Provider
      value={
        {
          handlePushRoute,
          handleReplaceRoute
        } as AuthContextValue
      }
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const authContext = useContext(AuthContext)

  return authContext as AuthContextValue
}
