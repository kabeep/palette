function createPalette(open: string, close: string) {
    if (!open || !close) return (input: string) => input;

    return (input: string | number) => {
        const string = `${input}`;
        let index = string.indexOf(close);

        if (!~index) {
            // Note: Intentionally not using string interpolation for performance reasons.
            return open + string + close;
        }

        // Handle nested colors.

        // We could have done this, but it's too slow (as of Node.js 22).
        // return open + string.replaceAll(close, open) + close;
        // @see https://github.com/sindresorhus/yoctocolors/blob/main/base.js#L27

        let result = open;
        let lastIndex = 0;

        while (~index) {
            result += string.slice(lastIndex, index) + open;
            lastIndex = index + close.length;
            index = string.indexOf(close, lastIndex);
        }

        result += string.slice(lastIndex) + close;

        return result;
    };
}

export default createPalette;
