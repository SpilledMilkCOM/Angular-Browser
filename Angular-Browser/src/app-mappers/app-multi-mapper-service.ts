import { IMapper } from 'src/app-mappers/app-mapper-interface';
import { IMapperItem } from './app-mapper-item-interface';

export class MultiMapperService implements IMapper {

    private mappers = new Map<string, IMapperItem>();

    public add(key: string, mapper: IMapperItem) {
        this.mappers.set(key, mapper);
    }

    public enable(key: string, enabled: boolean) {
        if (this.mappers != null && this.mappers.has(key)) {

            // The linter is saying I might get an "undefined" object from the map. (I don't THINK so.  It's very annoying.)
            // TODO: Get a different linter?  Add a directive to ignore this?

            this.mappers.get(key).enabled = enabled;
        }
    }

    // The internal list of mappers will be triggered by configuration.

    public map(source: string) {
        var result = source;

        if (this.mappers != null) {
            this.mappers.forEach(item => {
                if (item.enabled) {
                    result = item.mapper.map(result);
                }
            });
        }

        return result;
    }
}