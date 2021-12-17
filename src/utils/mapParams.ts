import { FilterParams } from 'store/shared/interfaces';

export interface RequestParams {
    offset?: number;
    limit?: number;
    search?: string;
    sortField?: string;
    sortDir?: string;
    id?: string;
}

export const paramsCheck = (params: FilterParams | undefined) => {
    let query = '';
    if (params) {
        if (params.year_start && params.year_end) {
            params.genre
                ? (query = `year_start=${params.title}&year_end=${params.year_end}&genre=${params.genre}`)
                : (query = `year_start=${params.title}&year_end=${params.year_end}`);
        } else if (params.genre) {
            params.title
                ? (query = `genre=${params.genre}&title=${params.title}`)
                : (query = `genre=${params.genre}`);
        } else {
            params.title && (query = `${params.title}`);
        }
    }
    return query;
};
