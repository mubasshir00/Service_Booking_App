import { ApiProperty } from '@nestjs/swagger';

export class CommonResponse<T> {
  @ApiProperty({ description: 'HTTP Status Code' })
  statusCode: number;

  @ApiProperty({ description: 'Status of the response' })
  status: string;

  @ApiProperty({ description: 'Message describing the response' })
  message: string;

  @ApiProperty({ description: 'The data returned by the API' })
  data: T;

  @ApiProperty({
    description: 'Any error details, if applicable',
    required: false,
  })
  error?: string;

  constructor(
    statusCode: number,
    status: string,
    message: string,
    data: T,
    error?: string,
  ) {
    this.statusCode = statusCode;
    this.status = status;
    this.message = message;
    this.data = data;
    this.error = error;
  }
}
