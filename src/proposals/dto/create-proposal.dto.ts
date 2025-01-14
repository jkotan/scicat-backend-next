import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsArray,
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { OwnableDto } from "src/common/dto/ownable.dto";
import { MeasurementPeriodClass } from "../schemas/measurement-period.schema";
import { CreateMeasurementPeriodDto } from "./create-measurement-period.dto";

@ApiTags("proposals")
export class CreateProposalDto extends OwnableDto {
  @ApiProperty({
    type: String,
    required: true,
    description:
      "Globally unique identifier of a proposal, eg. PID-prefix/internal-proposal-number. PID prefix is auto prepended.",
  })
  @IsString()
  readonly proposalId: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "Email of principal investigator.",
  })
  @IsOptional()
  @IsEmail()
  readonly pi_email?: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "First name of principal investigator.",
  })
  @IsOptional()
  @IsString()
  readonly pi_firstname?: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "Last name of principal investigator.",
  })
  @IsOptional()
  @IsString()
  readonly pi_lastname?: string;

  @ApiProperty({
    type: String,
    required: true,
    description: "Email of main proposer.",
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "First name of main proposer.",
  })
  @IsOptional()
  @IsString()
  readonly firstname?: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "Last name of main proposer.",
  })
  @IsOptional()
  @IsString()
  readonly lastname?: string;

  @ApiProperty({
    type: String,
    required: true,
    description: "The title of the proposal.",
  })
  @IsString()
  readonly title: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "The proposal abstract.",
  })
  @IsOptional()
  @IsString()
  readonly abstract?: string;

  @ApiProperty({
    type: Date,
    required: false,
    description: "The date when the data collection starts.",
  })
  @IsOptional()
  @IsDateString()
  readonly startTime?: Date;

  @ApiProperty({
    type: Date,
    required: false,
    description: "The date when data collection finishes.",
  })
  @IsOptional()
  @IsDateString()
  readonly endTime?: Date;

  @ApiProperty({
    type: MeasurementPeriodClass,
    isArray: true,
    required: false,
    description:
      "Embedded information used inside proposals to define which type of experiment has to be pursued, where (at which instrument) and when.",
  })
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateMeasurementPeriodDto)
  readonly MeasurementPeriodList?: CreateMeasurementPeriodDto[];
}
