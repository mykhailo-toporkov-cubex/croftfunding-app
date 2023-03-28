import { PageWrapper } from "@/styles/global.styled";
import Button from "@mui/material/Button";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  ButtonArea,
  Container,
  CurrentAmount,
  Description,
  Goal,
  ItemContainer,
  List,
  Title,
} from "./campaign.styles";
import { CampaignTypes } from "./campaign.types";


const Card = (props: CampaignTypes) => {
  const { ref, inView } = useInView({});

  return (
    <ItemContainer isBorder={false} ref={ref} inView={inView}>
      <Title title={props.title}>{props.title}</Title>
      <Description>{props.description}</Description>
      <Goal isEnough={props.current_amount > props.goal_amount}>
        The goal: {props.goal_amount}
      </Goal>
      <CurrentAmount>Current: {props.current_amount}</CurrentAmount>
      <ButtonArea>
        <Link href={`/campaigns/${props.id}`}>
          <Button variant="contained">DONATE NOW!</Button>
        </Link>
      </ButtonArea>
    </ItemContainer>
  );
};

const Campaigns = ({ campaigns }: { campaigns: CampaignTypes[] }) => {
  const [data, setData] = useState(campaigns);

  return (
    <PageWrapper>
      <Container>
        <List>
          {data.map((e) => <Card key={e.id} {...e}/>)}
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
