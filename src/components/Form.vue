<template>
  <section class="form-container">
    <form action="" method="post">
      <h2>Envie Sua Mensagem</h2>

      <div class="campo">
        <label for="name">Nome</label>
        <input class="input-info" type="text" id="name" />
      </div>

      <div class="campo">
        <label for="tel">Telefone</label>
        <input class="input-info" type="tel" id="tel" name="tel" />
      </div>

      <div class="campo">
        <label for="email">Email</label>
        <input class="input-info" type="email" id="email" name="email" />
      </div>

      <div>
        <textarea
          name="msg"
          id="msg"
          placeholder="Escreva sua messagem aqui!"
        ></textarea>
      </div>

      <button class="button-submit" type="submit">
        <strong class="button-submit_text">ENVIAR</strong>
      </button>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style>
.form-container {
  margin-top: 1rem;
  width: 70%;
}

.campo{
  margin: 0.5rem 0;
}

label {
  margin-right: 0.5rem;
}

input {
  box-shadow: 0 0 1rem 0 #ccc;
  margin-right: 1rem;
  border-radius: 0.2rem;

}

textarea {
  box-shadow: 0 0 1rem 0 #ccc;
  width: 100%;
  border-radius: 0.2rem;
}

.button-submit {
  margin: 0.2rem 0;
  background: #313d86;
  padding: 0.5rem;
  border-radius: 0.2rem;
}

.button-submit_text{
  color: #fff;
}
</style>