class ReferencesService {
  getCounterCopyingReferences(object) {
    const copiedObject = object;

    return copiedObject;
  }

  getCounterWithoutCopyingReferences(object) {
    const copiedObject = Object.assign({}, object);

    return copiedObject;
  }

  getCounterWithoutDeepCopyingReferences(object) {
    const deepCopy = JSON.parse(JSON.stringify(object));

    return deepCopy;
  }
}

module.exports = ReferencesService;
