import config from /* preval */ '../../../tailwind.config';
const { theme: { screens: { xl, lg, md, sm, xs, xxs } } } = config;


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

export const debounce = (cb, delay = 250) => {
    let timeout;
  
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        cb(...args)
      }, delay)
    }
};

export const getMediaQueryLists = (cb) => {
    const screens = {
        xxsmall: null,
        xsmall: window.matchMedia(`(min-width: ${xs})`),
        small: window.matchMedia(`(min-width: ${sm})`),
        medium: window.matchMedia(`(min-width: ${md})`),
        large: window.matchMedia(`(min-width: ${lg})`),
        xlarge: window.matchMedia(`(min-width: ${xl})`),
    }

    for(let[scr, mql] of Object.entries(screens)) {
        if(mql) mql.addEventListener('change', cb)
    }

    return screens;
}

export const getScreenSize = (mqls) => {
    let size = null;
    for (let [scr, mq] of Object.entries(mqls)) {
      if (!mq || mq.matches) size = scr;
    }
    return size;
}