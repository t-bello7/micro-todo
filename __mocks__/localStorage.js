export default class LocalStorage {
    constructor() {
      this.localStorage = [];
    }
    
    getStorage = () => {
      return this.localStorage;;
    }
  
    updateStorage = (key, value) => {
      this.localStorage[key] = String(value);
    }

    removeItem = (key) => {
        delete this.localStorage[key];
    }
}

global.localStorage = new LocalStorage;