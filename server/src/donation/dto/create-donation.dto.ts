import { IsNotEmpty, IsString, MaxLength, IsNumber } from 'class-validator';

export class CreateDonationDto {
  @IsString()
  @IsNotEmpty()
  campaignId: string;

  @IsString()
  @MaxLength(10000)
  username: string;

  @IsNumber()
  amount: number;
}
