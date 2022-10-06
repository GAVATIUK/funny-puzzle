const getFontSize = (item, size) => {
    switch (item) {
        case 'masterics':
            return `calc(${size + (size * 20 / 100)}px)`;
        case 'anastasiaScript':
            return `calc(${size - (size * 50 / 100)}px`;
        case 'kunstler':
            return `calc(${size + (size * 20 / 100)}px)`;
        case 'magnoliaSky':
            return `calc(${size - (size * 30 / 100)}px`;
        case 'candyButterfly':
            return `calc(${size - (size * 30 / 100)}px`;
        case 'hillaryYouth':
            return `calc(${size + (size * 20 / 100)}px)`;
        case 'delishaGlande':
            return `calc(${size + (size * 20 / 100)}px)`;
        case 'theParkers':
            return `calc(${size + (size * 10 / 100)}px)`;

        default:
            return `${size}px`;
    }
};

export {getFontSize};