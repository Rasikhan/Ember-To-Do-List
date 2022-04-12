import Component from "@ember/component";
import {inject as service} from '@ember/service';

export default Component.extend({
  values: null,
  newdescription: "",
  newdate: "",
  store: service(),
  init() {
    this._super(...arguments);

    const values = [
      {
        id: 1,
        description: "Call",
        date: 20 - 2 - 11,
      },
      {
        id: 2,
        description: "george",
        date: 25 - 2 - 33,
      },
      {
        id: 3,
        description: "kumar",
        date: 30 - 2 - 21,
      },
    ];
    this.set("values", values);
  },

  actions: {
    addbtn() {
      let userData = this.store.createRecord("data", {
        id: this.get("values").length + 1,
        description: this.get("newdescription"),
        date: this.get("newdate"),
      });
      this.get("values").pushObject(userData);
      this.set("newdescription", "");
      this.set("newdate", "");
      document.getElementById("input1").value = null;
      document.getElementById("input2").value = null;
    },

    addDescription(e) {
      this.set("newdescription", e.target.value);
    },

    addDate(e) {
      this.set("newdate", e.target.value);
    },
  },
});
