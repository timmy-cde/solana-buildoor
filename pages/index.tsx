import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useWallet } from "@solana/wallet-adapter-react";
import MainLayout from "../components/MainLayout";

import Disconnected from "../components/Disconnected";
import Connected from "../components/Connected";

const Home: NextPage = () => {
  const { connected } = useWallet();

  return (
    <MainLayout> {connected ? <Connected /> : <Disconnected />}</MainLayout>
  );
};

export default Home;
