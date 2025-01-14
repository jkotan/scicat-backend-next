import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsOptional, IsString } from "class-validator";
import { CreateDatasetDto } from "./create-dataset.dto";

export class CreateRawDatasetDto extends CreateDatasetDto {
  /* we need to discuss if the naming is adequate. */
  @ApiProperty({
    type: String,
    required: true,
    description:
      "First name and last name of principal investigator(s). If multiple PIs are present, use a semicolon separated list. This field is required if the dataset is a Raw dataset.",
  })
  @IsString()
  readonly principalInvestigator: string;

  @ApiProperty({
    type: Date,
    required: false,
    description:
      "End time of data acquisition for this dataset, format according to chapter 5.6 internet date/time format in RFC 3339. Local times without timezone/offset info are automatically transformed to UTC using the timezone of the API server.",
  })
  @IsOptional()
  @IsDateString()
  readonly endTime?: Date;

  @ApiProperty({
    type: String,
    required: true,
    description:
      "Unique location identifier where data was taken, usually in the form /Site-name/facility-name/instrumentOrBeamline-name. This field is required if the dataset is a Raw dataset.",
  })
  @IsString()
  readonly creationLocation: string;

  @ApiProperty({
    type: String,
    required: false,
    description:
      "Defines the format of the data files in this dataset, e.g Nexus Version x.y.",
  })
  @IsOptional()
  @IsString()
  readonly dataFormat?: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "The ID of the proposal to which the dataset belongs.",
  })
  @IsOptional()
  @IsString()
  readonly proposalId?: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "ID of the sample used when collecting the data.",
  })
  @IsOptional()
  @IsString()
  readonly sampleId?: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "ID of the instrument where the data was created.",
  })
  @IsOptional()
  @IsString()
  readonly instrumentId: string;
}
