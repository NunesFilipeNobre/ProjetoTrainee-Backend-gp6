import {IsString, IsOptional} from "class-validator";


export class updateDisciplinaDto {
    @IsOptional()
    @IsString()
    nome: string;
    @IsOptional()
    @IsString()
    professoresID: string;
    
}