<template>
  <section class="form-container">
    <form action="" method="post">
      <h2>Envie Sua Mensagem</h2>

      <div class="campo">
        <label for="name">Nome</label>
        <input class="input-info" type="text" id="name" required/>
      </div>

      <div class="campo">
        <label for="tel">Telefone</label>
        <input class="input-info" type="tel" id="tel" name="tel" required/>
      </div>

      <div class="campo">
        <label for="email">Email</label>
        <input class="input-info" type="email" id="email" name="email" required/>
      </div>

      <div>
        <textarea
          name="msg"
          id="msg"
          placeholder="Escreva sua messagem aqui!"
          class="textarea"
          required
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