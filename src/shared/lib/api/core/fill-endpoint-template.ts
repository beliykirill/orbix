const fillEndpointTemplate = (endpointTemplate: string, payload = {}) =>
  endpointTemplate.replace(/{([a-zA-Z]+)}/g, (_, key) => {
    const replaceValue = payload[key];
    if (replaceValue === undefined) {
      throw Error(`Can't find key for API template ${key} in payload`);
    }

    return replaceValue;
  });

export { fillEndpointTemplate };
