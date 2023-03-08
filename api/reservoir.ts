import { ReservoirApi } from './'

export const getUserTokens = async (address: string) => {
  //
  const { data } = await ReservoirApi.get(`/users/${address}/tokens/v6`)

  return data
}
