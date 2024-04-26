import { IsNotEmpty, IsString } from "class-validator";

export class CreatePostDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    // platforms: string[];
    // mediaUrls: string[];
    // isVideo: boolean;
    // scheduleDate: string;
}
