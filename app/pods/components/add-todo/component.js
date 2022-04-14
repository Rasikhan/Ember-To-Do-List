import Component from "@ember/component";
import { inject as service } from "@ember/service";
export default Component.extend({
  newDue: "",
  newDescription: "",
  num: null,
  task: service(),
  store: service(),
  init() {
    this._super(...arguments);
    const userData = [
      {
        due: "oct 22",
        description: "call car insurance",
      },
      {
        due: "oct 29",
        description: "shopping",
      },
      {
        due: "Today",
        description: "Laundry",
      },
    ];
    this.set("userData", userData);
    this.task.set("lists", userData);
  },
  actions: {
    addBtn() {
      let newToDoList = this.store.createRecord("task", {
        due: this.get("newDue"),
        description: this.get("newDescription"),
      });
      this.get("userData").pushObject(newToDoList);
      this.task.set("lists", this.userData);
      this.set("newdescription", "");
      this.set("newDue", "");
      document.getElementById("dueAdd").value = null;
      document.getElementById("descriptionAdd").value = null;
    },

    dueInputValue(e) {
      this.set("newDue", e.target.value);
    },
    descriptionInputValue(e) {
      this.set("newDescription", e.target.value);
    },

    removeBtn(value) {
      const removeArr = this.userData.filter((user => user.description !== value))
      this.set("userData", removeArr);
    },
  },
});
