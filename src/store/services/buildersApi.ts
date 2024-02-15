import { BuidersResponse, HydraData, TransformedData } from "@/types"
import { transformDataHelpers } from "@/utils/helpers/transformData"

import { mainApi } from "./mainApi"

export const buildersApi = mainApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllPublicBuiders: builder.query<TransformedData<BuidersResponse>, void | string>({
      query: () => ({
        url: "/api/public/builders",
        headers: {
          Accept: "application/ld+json"
        }
      }),
      //@ts-ignore
      transformResponse: (
        baseQueryReturnValue: HydraData<BuidersResponse>
      ): TransformedData<BuidersResponse> => {
        return transformDataHelpers.transformJsonLdToJson<BuidersResponse>(
          baseQueryReturnValue
        )
      }
    })
  })
})

export const { useGetAllPublicBuidersQuery } = buildersApi
