import { IsArray, IsBoolean, IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePostDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    mediaUrl: string;

    @IsDateString()
    scheduleDate: Date

    @IsNotEmpty()
    platforms: string;

    @IsNumber()
    authorId: string
}
