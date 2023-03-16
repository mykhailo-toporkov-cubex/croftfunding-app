import { PageWrapper } from "@/styles/global.styled";
import Button from "@mui/material/Button";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { ButtonArea, Container, CurrentAmount, Description, Goal, ItemContainer, List, Title } from "./campaign.styles";
import { CampaignTypes } from "./campaign.types";

const Campaigns = ({ campaigns }: { campaigns: CampaignTypes[] }) => {
  const [data, setData] = useState(campaigns);

  return (
    <PageWrapper>
      <Container>
        <List>
          {data.map((e) => (
            <ItemContainer key={e.id} isBorder={false}>
              <Title title={e.title}>{e.title}</Title>
              <Description>{e.description}</Description>
              <Goal isEnough={e.current_amount > e.goal_amount}>The goal: {e.goal_amount}</Goal>
              <CurrentAmount>Current: {e.current_amount}</CurrentAmount>
              <ButtonArea>
                <Link href={`/campaigns/${e.id}`}>
                  <Button variant="contained">DONATE NOW!</Button>
                </Link>
              </ButtonArea>
            </ItemContainer>
          ))}
        </List>
      </Container>
    </PageWrapper>
  );
};

export const getStaticProps = async () => {
  const { data } = await axios.get(`http://localhost:3333/campaigns`);

  return {
    props: {
      campaigns: data,
    },
  };
};

export default Campaigns;
