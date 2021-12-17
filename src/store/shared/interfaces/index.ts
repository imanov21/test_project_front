export interface Video {
    id: number;
    title: string;
    description: string;
    videoType: string;
    date: number;
    genre: string;
}

export interface FilterParams {
    title?: string;
    year_start?: string;
    year_end?: string;
    genre?: string;
}

export interface VideoStore {
    list: Video[];
    single: null | Video;
    total: number;
}

export interface PayloadState {
    count: number;
    next: string | null;
    previous: string | null;
    results: Video[];
}
