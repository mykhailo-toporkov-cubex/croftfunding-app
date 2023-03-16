import { Injectable } from '@nestjs/common';
import { Campaign } from 'src/campaign/entities/campaign.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDonationDto } from './dto/create-donation.dto';

@Injectable()
export class DonationService {
  constructor(private prisma: PrismaService) {}

  async create(createDonationDto: CreateDonationDto): Promise<Campaign> {
    const donation = await this.prisma.donation.create({
      data: { ...createDonationDto },
    });

    const { current_amount } = await this.prisma.campaign.findUnique({
      where: { id: createDonationDto.campaignId },
    });

    const updated_current_amount = current_amount + donation.amount;

    const updatedCampaign = await this.prisma.campaign.update({
      where: {
        id: createDonationDto.campaignId,
      },
      data: { current_amount: updated_current_amount },
    });

    return updatedCampaign;
  }
}
