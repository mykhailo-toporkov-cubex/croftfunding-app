import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { CampaignModule } from './campaign/campaign.module';
import { DonationModule } from './donation/donation.module';

@Module({
  imports: [PrismaModule, CampaignModule, DonationModule],
  providers: [PrismaService],
})
export class AppModule {}
