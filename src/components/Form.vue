<template>
  <section class="form-container">
    <!-- <form >
      <h2>Envie Sua Mensagem</h2>

      <div class="campo">
        <label for="name">Nome</label>
        <input class="input-info" v-model="name" type="text" id="name" required/>
      </div>

      <div class="campo">
        <label for="tel">Telefone</label>
        <input class="input-info" v-model="tel" type="tel" id="tel" name="tel" required/>
      </div>

      <div class="campo">
        <label for="email">Email</label>
        <input class="input-info" v-model="email" type="email" id="email" name="email" required/>
      </div>

      <div>
        <textarea
        v-model="msg"
          name="msg"
          id="msg"
          placeholder="Escreva sua messagem aqui!"
          class="textarea"
          required
        ></textarea>
      </div> -->

      <div>
    <input type="file" name="file" multiple ref="files" />
    <button @click="sendFile">Send</button>
  </div>

      <!-- <button class="button-submit" type="submit">
        <strong @click="submit" class="button-submit_text">ENVIAR</strong>
      </button>
    </form> -->

  </section>
</template>

<script>




export default {
  name: 'Form',
  methods: {
    async sendFile() {
      let dataForm = new FormData();
      for (let file of this.$refs.files.files) {
        dataForm.append(`file`, file);
      }
      let res = await fetch(`http://localhost:8080/upload`, {
        method: 'POST',
        body: dataForm,
      });
      let data = await res.json();
      // console.log(data);
    },
  },
};

</script>

<style>
.form-container {
  margin: 3rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

form{
  background: #CCC;
  padding: 2rem;
  border-radius: 1rem;
}

.campo{
  margin: 0.5rem 0;
}

label {
  margin-right: 0.5rem;
}

.input-info {
  margin-right: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  background: #fff;
}

.textarea {
margin: 1rem 0 0.5rem 0;
  width: 100%;
  border-radius: 0.2rem;
  background: #fff;
  border-radius: 0.5rem;
}

.button-submit {
  margin: 0.2rem 0;
  background: #313d86;
  padding: 0.5rem;
  border-radius: 0.2rem;
  width: 100%;
}

.button-submit_text{
  color: #fff;
}
</style>