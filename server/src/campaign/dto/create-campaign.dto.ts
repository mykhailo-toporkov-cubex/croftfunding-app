import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(10000)
  description: string;

  @IsNumber()
  @IsOptional()
  goal_amount: number;
}
