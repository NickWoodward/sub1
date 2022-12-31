export const createDeepCopy = (obj) => {
    const CloneSymbol = Symbol('clone');
    Date.prototype[CloneSymbol] = d => new Date(d.getTime());

    const m = Object.entries(obj).map(([k, v]) => {
        if (v === null) return [k, v];
        if (typeof v === 'object') {           
            const fn = v.constructor
            .prototype[CloneSymbol];
            return [k, fn ? fn(v) : createDeepCopy(v)]
        } else return [k, v];
    });

    return (
        Array.isArray(obj) ? m.reduce((a, [i, v]) => {
            a[i] = v;
            return a;
        }, []) : Object.fromEntries(m)
    );
};