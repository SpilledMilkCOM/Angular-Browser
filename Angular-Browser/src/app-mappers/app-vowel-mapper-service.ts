import { IMapper } from 'src/app-mappers/app-mapper-interface';

export class VowelMapperService implements IMapper {

    public map(source: string) : string {
        var result = source;

        console.log('vowel-map()');
        // remove all the vowels...  (Is 'y' a vowel? - Sometimes)

        return result.replace(/[aeiou]/gi, '');
    }
}