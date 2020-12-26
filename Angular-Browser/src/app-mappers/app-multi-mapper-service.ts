import { IMapper } from 'src/app-mappers/app-mapper-interface';
import { IMapperItem } from './app-mapper-item-interface';

export class MultiMapperService implements IMapper {

    private mappers = new Map<string, IMapperItem>();

    public add(key: string, mapper: IMapperItem) {
        this.mappers.set(key, mapper);
    }

    public enable(key: string, enabled: boolean) {
        if (this.mappers != null) {

            var item = this.mappers.get(key);

            if (item != null) {
                item.enabled = enabled;
            }
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