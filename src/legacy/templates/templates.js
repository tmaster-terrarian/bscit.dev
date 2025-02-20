const Templates = {
  load: async (path, callback) => {
    if(!(typeof path === 'string' || path instanceof String))
      path = path.toString();
    console.log('loaded template ' + path);
    const text = await Templates.__loadText("/legacy/templates/" + path + ".htm");
    return text;
  },

  __loadText: async (path) => {
    return await (await fetch(path, {headers: {"Cache-Control": "max-age=3600"}})).text();
  }
};

Object.freeze(Templates);
