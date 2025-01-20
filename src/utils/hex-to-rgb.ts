function hexToRgb(hex: string) {
    // @see https://github.com/chalk/chalk/blob/main/source/vendor/ansi-styles/index.js#L134
    const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex);
    if (!matches) {
        return [0, 0, 0] as const;
    }

    let [colorString] = matches;

    if (colorString.length === 3) {
        colorString = [...colorString]
            .map((character) => character + character)
            .join('');
    }

    const integer = Number.parseInt(colorString, 16);

    return [
        (integer >> 16) & 0xff,
        (integer >> 8) & 0xff,
        integer & 0xff,
    ] as const;
}

export default hexToRgb;
