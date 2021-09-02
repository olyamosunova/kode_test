const getObjectProperty = (obj, path, defaultValue = undefined) => {
    const properties = path.split('.');

    const checkProperty = (object, key, index, value) => {
        if(object[key]) {
            if(index !== properties.length - 1) {
                const newObj = object[key];
                return checkProperty(newObj, properties[index + 1], index + 1, value);
            } else {
                return object[key];
            }
        } else {
            return value;
        }
    };

    return checkProperty(obj, properties[0], 0, defaultValue);
};


const obj = {
    'pupa': {
        'lupa': {
            'beep': 'boop',
        },
        'foo': 'bar',
    },
};
getObjectProperty(obj, "pupa.lupa"); // > { beep : 'boop' }
getObjectProperty(obj, "pupa.lupa.beep"); // > 'boop'
getObjectProperty(obj, "pupa.foo"); // > 'bar'
getObjectProperty(obj, "pupa.ne.tuda"); // > undefined
getObjectProperty(obj, "pupa.ne.tuda", true); // > true
getObjectProperty(obj, "pupa.ne.tuda", "Default value"); // > 'Default value'
