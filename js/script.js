new Vue({
  el: "#app",
  data: {
    todo: [
      {
        text: "Fare la spesa",
        done: true,
      },
      {
        text: "Fare il bucato",
        done: true,
      },
      {
        text: "Studiare",
        done: false,
      },
      {
        text: "Andare in palestra",
        done: false,
      },
      {
        text: "Chiamare il dottore",
        done: false,
      },
    ],
    message: "",
    // variabile per salvare il testo digitato nell'input html
    temporaryItem: "",
  },
  methods: {
    // funzione per aggiungere all'array un nuovo oggetto
    addItem: function () {
      // controllo input
      if (this.temporaryItem === "") {
        this.message = "Inserisci il testo";
      } else {
        this.todo.push({ text: this.temporaryItem, done: false });
      }
      this.temporaryItem = "";
    },
    // funzione per rimuovere un oggetto dall'array
    removeItem: function (index) {
      this.todo.splice(index, 1);
    },
    // funzione per cambiare la proprietà done degli oggetti nell'array
    // this.todo[index].done = !this.todo[index].done (passando argomento index)
    // più semplice:
    doneUndone: function (item) {
      item.done = !item.done;
    },
  },
});
