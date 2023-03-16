import { Dispatch, SetStateAction } from "react";

export interface DonationFormTypes {
  campaignId: string;
  isDisplay?: boolean;
  callback?:  Dispatch<SetStateAction<boolean>>;
}