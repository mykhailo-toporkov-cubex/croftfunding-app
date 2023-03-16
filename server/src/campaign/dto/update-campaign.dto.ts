import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Matches,
} from 'class-validator';
import { CampaignStatus } from '@prisma/client';

export class UpdateCampaignDto {
  @IsOptional()
  @IsString()
  @MaxLength(256)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(10000)
  description: string;

  @IsOptional()
  @IsNumber()
  goal_amount: number;

  @IsOptional()
  @IsString()
  @Matches(RegExp(`^${Object.values(CampaignStatus).join('|')}$`), {
    message: 'there is no such role',
  })
  status: CampaignStatus;
}
