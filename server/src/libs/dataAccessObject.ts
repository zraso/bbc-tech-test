class DAO {
  items: any[];
  constructor() {
    this.items = [];
  }

  addCountry(item: {}) {
    const record = {
      ...item,
      created: new Date().toISOString(),
    };

    this.items.push(record);
    return record;
  }

  retrieveCountry() {
    return this.items[0];
  }

  reset() {
    this.items = [];
  }
}

const DataAccessObject = new DAO();
export default DataAccessObject;