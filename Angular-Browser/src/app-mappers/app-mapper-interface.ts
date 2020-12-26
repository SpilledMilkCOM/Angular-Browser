export interface IMapper {

    // Is there a generic way to reconfigure the mapping?
    // Or is it just ON or OFF?

    // This is pretty basic.
    map(message: string) : string;
}