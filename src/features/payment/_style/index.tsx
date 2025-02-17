import { StyleSheet } from "react-native"

import { colors } from "@/utils/constants/colors"

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20
  },

  // DESCRIPTION
  descriptionContainer: {
    display: "flex",
    alignItems: "flex-start",

    shadowOffset: { height: 1, width: 1 },

    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 11,
    shadowColor: "#777777",
    shadowOpacity: 0.2,
    elevation: 4,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  descriptionTitleContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  descriptionTitle: {
    fontSize: 24,
    lineHeight: 36,
    color: colors.tundora
  },
  textContainer: {
    paddingTop: 10,
    gap: 10
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "left",
    color: colors.dove_graya
  },

  // PAYMENT
  paymentMainContainer: {
    borderWidth: 2,
    borderColor: colors.blue,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    gap: 16
  },
  titleContainer: {
    gap: 8
  },
  title: {
    fontSize: 28,
    lineHeight: 42,
    color: colors.tundora
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    color: colors.dove_graya
  },

  paymentContainer: {
    gap: 16
  },
  paymentMethodsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10
  },
  paymentMethod: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.blue,
    paddingVertical: 17,
    paddingHorizontal: 24,
    flex: 1 / 2
  },

  investInfoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 13
  },
  investInfoDescription: {
    gap: 10
  },
  investInfoDescriptionText: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.dove_graya,
    textAlign: "left"
  },
  investInfoDescriptionPaymentCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10
  },

  checkBoxCoantiner: {
    display: "flex",
    flexDirection: "row",
    gap: 13
  },
  politicCheck: {
    textAlign: "left",
    fontSize: 14,
    lineHeight: 21,
    color: colors.mine_shaft,
    flex: 2 / 3
  }
})
