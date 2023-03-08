import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import { Web3Address } from "@/components/common";
import { Button } from "@/components/ui";
import { WalletAddressInput } from "./components";

import { getUserTokens } from "@/api/reservoir";

export const Home = () => {
  //
  const [address, setAddress] = useState<string>("");

  console.log("address", address);

  const { data, isFetching } = useQuery({
    queryKey: ["tokens", address],
    queryFn: () => getUserTokens(address),
    enabled: address.length > 0,
  });

  console.log("data", data);

  return (
    <Box>
      <Button>Test</Button>
      <Web3Address address={"0x6AC7d52Ccd8fe0225dD52b30e5Cb55166c563601"} />
      <WalletAddressInput value={address} onChange={setAddress} />
    </Box>
  );
};
