import { IMapper } from 'src/app-mappers/app-mapper-interface';

export class MultiMapperService implements IMapper {

    private mappers = new Map<string, IMapper>();

    public enabled = false;

    public add(key: string, mapper: IMapper) {
        this.mappers.set(key, mapper);
    }

    // The internal list of mappers will be triggered by configuration.

    public map(source: string) {
        var result = source;

        // Does nothing right now.

        return result;
    }
}