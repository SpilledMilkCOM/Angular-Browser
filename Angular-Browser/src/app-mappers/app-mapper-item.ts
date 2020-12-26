import { IMapper } from 'src/app-mappers/app-mapper-interface'
import { IMapperItem } from './app-mapper-item-interface';

export class MapperItem implements IMapperItem {

    enabled: boolean = false;

    public mapper: IMapper;

    constructor(mapper: IMapper) {
        this.mapper = mapper;
    }
}