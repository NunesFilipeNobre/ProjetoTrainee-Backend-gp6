import {IsString} from "class-validator";


export class createDisciplinaDto {
    @IsString()
    nome: string;
    @IsString()
    professoresID: string;
    
}