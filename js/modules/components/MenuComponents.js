export default {
  name: "MenuComponent",
  data() {
    return {
      produtos: {},
      produto: "",
      carrinho: [],
    };
  },
  template: `
  <main class="cardapio-container_box">
  {{carrinho}}


  <ul class="carpadio_box">

    <li class="carpadio_item"
     v-for=" {name, id, img, descricao, preco} in produtos"
     :key="id" @click="fetchproduct(id)" >
      <div class="carpadio_img">
        <img :src="img" :alt="name" width="288" height="288">
      </div>
      <div class="cardapio_dados">
        <h3 class="subt_hamb">{{name}}</h3>
        <p class="carpadio_descricao">{{descricao}}</p>
        <span>{{preco | formToReal}} <button @click="adicinarItem" class="bi bi-cart-plus-fill"></button></span>
        </div>
        </li>
        </ul>
</main>
  `,
  filters: {
    // não esta formatando o número?
    formToReal(value) {
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json").then((r) =>
        r.json().then((data) => {
          this.produtos = data;
        })
      );
    },
    fetchproduct(id) {
      fetch(`./api/produtos/${id}/dados.json`).then((response) =>
        response.json().then((data) => {
          this.produto = data;
        })
      );
    },
    adicinarItem() {
      const { name, id, preco } = this.produto;
      this.carrinho.push(this.produto);
    },
  },
  created() {
    this.fetchProdutos();
  },
};
