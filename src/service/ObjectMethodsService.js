class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    const copyRawObject = this.getPropertiesObject(rawObject);

    const newRawObject = {
      ...copyRawObject,
      valueOf() {
        return this.age;
      },
    };

    return newRawObject;
  }

  getEnhancedObject2(rawObject) {
    const copyRawObject = this.getPropertiesObject(rawObject);
    const stringifyObject = this.formattedAndMergeValues(copyRawObject);

    const newRawObject = {
      ...copyRawObject,
      toString() {
        return `[${stringifyObject}]`;
      },
    };

    return newRawObject;
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    const copyRawObject = this.getPropertiesObject(rawObject);
    const stringifyObject = this.formattedAndMergeValues(copyRawObject);

    const newRawObject = {
      ...copyRawObject,
      [Symbol.toPrimitive](type) {
        const types = {
          string: `[${stringifyObject}]`,
          number: this.age,
        };

        return types[type] || types["string"];
      },
    };

    return newRawObject;
  }

  formattedAndMergeValues(object) {
    const keyValuesRawObject = Object.entries(object);
    const item = [];

    for (let [key, value] of keyValuesRawObject) {
      const formattedValue = typeof value === "number" ? value : `"${value}"`;

      item.push(`${key}=${formattedValue}`);
    }

    const mergeItems = item.join(",");

    return mergeItems;
  }

  getPropertiesObject(rawObject) {
    return rawObject.__proto__;
  }
}

module.exports = ObjectMethodsService;
