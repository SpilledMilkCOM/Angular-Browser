export interface IMapper {
    enabled: boolean;

    map(message: string) : string;
}