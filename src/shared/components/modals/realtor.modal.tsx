import { StyleSheet, View } from "react-native"
import { FC, useState } from "react"
import { TFunction } from "i18next"

import { Button, Input, Title } from "@/shared/ui"
import { RealtorModalData } from "@/types"
import { colors } from "@/utils/constants/colors"

import { ModalConfig } from "./config.modal"

interface Props {
  t: TFunction
  modalData: RealtorModalData
  onClose: () => void
}

type InputState = { isError?: boolean } | { isLoading?: boolean }

function isHasError(inputState: InputState): inputState is { isError?: boolean } {
  return inputState !== undefined && "isError" in inputState && !!inputState.isError
}

function isHasLoading(inputState: InputState): inputState is { isLoading?: boolean } {
  return inputState !== undefined && "isLoading" in inputState && !!inputState.isLoading
}

export const RealtorModal: FC<Props> = ({ t, onClose, modalData }) => {
  const [value, setValue] = useState<string>("")
  const [inputState, setInputState] = useState<InputState | undefined>(undefined)

  const handleFindRieltor = () => {
    if (!value) return setInputState({ isError: true })
    else {
      setInputState({ isLoading: true })
      modalData.data.findRealtor(value)
    }
  }

  const handleChangeValue = (value: string) => {
    setInputState({ isError: false })
    setValue(value)
  }
  return (
    <ModalConfig onClose={onClose} modalVisible={true}>
      <View style={style.mainContainer}>
        <View style={style.contentContainer}>
          <Title style={style.title}>{t("Додати рієлтора")}</Title>
          <View style={{ gap: 5 }}>
            <Input
              isDotNeed={false}
              error={isHasError(inputState!)}
              inputProps={{
                placeholder: t("Код вашого рієлтора"),
                autoFocus: true,
                value,
                onChangeText: handleChangeValue
              }}
            />

            <Button
              onPress={handleFindRieltor}
              loading={{ isLoading: isHasLoading(inputState!), isNeed: true }}
              title={t("Пошук")}
              style={style.btn}
            />
          </View>
        </View>
      </View>
    </ModalConfig>
  )
}

const style = StyleSheet.create({
  mainContainer: {
    display: "flex",
    justifyContent: "center"
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 30,

    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 10
  },
  title: {
    color: colors.mine_shaft
  },
  paragraph: {
    color: colors.mine_shaft,
    fontSize: 20,
    textAlign: "auto"
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  btn: {
    marginBottom: 0
  }
})
