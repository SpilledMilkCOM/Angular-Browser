import { IMapper } from 'src/app-mappers/app-mapper-interface';

export class ShoutMapperService implements IMapper {

    public map(source: string) : string {
        var result = source;

        // EVERYTHING IS UPPER CASE!!  YES!!  I'M SHOUTING!!

        return result.toUpperCase();
    }
}