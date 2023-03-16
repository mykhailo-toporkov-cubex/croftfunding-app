import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { Campaign } from './entities/campaign.entity';

@Injectable()
export class CampaignService {
  constructor(private prisma: PrismaService) {}

  async create(createCampaignDto: CreateCampaignDto): Promise<Campaign> {
    const campaign = await this.prisma.campaign.create({
      data: { ...createCampaignDto },
    });

    return campaign;
  }

  async findAll(): Promise<Campaign[]> {
    const campaigns = await this.prisma.campaign.findMany();

    return campaigns;
  }

  async findOne(id: string): Promise<Campaign> {
    const campaign = await this.prisma.campaign.findUnique({
      where: { id },
    });

    return campaign;
  }

  async update(
    id: string,
    updateCampaignDto: UpdateCampaignDto,
  ): Promise<Campaign> {
    const campaign = await this.prisma.campaign.update({
      where: { id },
      data: { ...updateCampaignDto },
    });

    return campaign;
  }

  async remove(id: string): Promise<string> {
    const { title } = await this.prisma.campaign.delete({ where: { id } });

    return `The campaign ${title} has ben deleted`;
  }
}
