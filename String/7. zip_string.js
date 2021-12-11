// 7. 문자열 압축

function compress(s) {
    const alphaSet = new Set([...s]);
    return [...alphaSet].reduce(
        (res, alpha) => (
            res.replace(new RegExp(`(${alpha}+)`, 'g'),
                (target) => target.length > 1 ? `${target[0]}${target.length}` : target[0]
            )
        ), s
    );
}

console.log(compress("ABBCCCE")); // => AB2C3E