import { GetStaticPropsContext } from "next";
import axios from "axios";
import { CampaignTypes } from "./campaign.types";
import {
  ButtonArea,
  CurrentAmount,
  Description,
  Goal,
  ItemContainer,
  Title,
} from "./campaign.styles";
import { Button } from "@mui/material";
import { useState } from "react";
import DonationForm from "@/components/DonationForm";

const Campaign = ({ campaign }: { campaign: CampaignTypes }) => {
  const [data, setData] = useState(campaign);
  const [isMenu, setMenu] = useState(true);

  const handleDonate = async () => {
    setMenu(false);
    const { data } = await axios.get(`http://localhost:3333/campaigns/${campaign.id}`);
    setData(data);
  };

  return (
    <>
      <ItemContainer isBorder={true}>
        <Title title={data.title}>{data.title}</Title>
        <Description>{data.description}</Description>
        <Goal isEnough={data.current_amount > data.goal_amount}>
          The goal: {data.goal_amount}
        </Goal>
        <CurrentAmount>Current: {data.current_amount}</CurrentAmount>
        <ButtonArea>
          <Button variant="contained">DONATE NOW!</Button>
        </ButtonArea>
      </ItemContainer>
      <DonationForm
        isDisplay={isMenu}
        campaignId={data.id}
        callback={handleDonate}
      />
    </>
  );
};

export async function getServerSideProps(context: GetStaticPropsContext) {
  const id = context.params?.id;
  const { data } = await axios.get(`http://localhost:3333/campaigns/${id}`);

  return {
    props: {
      campaign: data,
    },
  };
}

export default Campaign;
