import axios from 'axios';

export const getQueryForCards = (type, subtype) => {
    return type && subtype
        ? `types:${type} subtypes:${subtype}`
        : type ? `types:${type}` :  subtype && `subtypes:${subtype}`;
};

export const setSearchParams = (currentType, currentSubtype, currentPage) => {
    const type = currentType && `type=${currentType}&`;
    const subtype = currentSubtype && `subtype=${currentSubtype}&`;
    const page = currentPage && `page=${currentPage}`;

    return `?${type}${subtype}${page}`;
};
