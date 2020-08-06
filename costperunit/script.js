if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(function() { console.log('Service Worker Registered'); });
}

new Vue({
  el: '#app',
  data() {
    return {
      value: null,
      price: null,
      historyItems: [],
      historyIsLocked: true,
    }
  },
  computed: {
    cost() {
      let cost = this.price / this.value;

      cost = isFinite(cost) ? cost.toFixed(2) : '0.00';

      this.historyIsLocked = false;

      return cost;
    }
  },
  methods: {
    saveToHistory() {
      if (!this.price || !this.value) {
        return;
      }

      const item = {
        price: this.price,
        value: this.value,
        cost: this.cost
      }

      if (this.historyIsLocked) {
        return;
      }

      this.historyItems.push(item);

      this.historyIsLocked = true;
    }
  }
})