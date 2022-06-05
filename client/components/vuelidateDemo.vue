<template>
  <Card>
    <template #content>
      <div class="form-demo">
        <Dialog
          v-model:visible="showMessage"
          :breakpoints="{ '960px': '80vw' }"
          :style="{ width: '30vw' }"
          position="top"
        >
          <div class="flex align-items-center flex-column pt-6 px-3">
            <i
              class="pi pi-check-circle"
              :style="{ fontSize: '5rem', color: 'var(--green-500)' }"
            ></i>
            <h5>Registrierung erfolgreich!</h5>
            <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
              Dein Konto ist unter diesem Land registriert
              <b>{{ state.country }}</b>
            </p>
          </div>
          <template #footer>
            <div class="flex justify-content-center">
              <Button label="OK" @click="toggleDialog" class="p-button-text" />
            </div>
          </template>
        </Dialog>

        <div class="flex justify-content-center">
          <div class="card">
            <h5 class="text-center">Register</h5>
            <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
              <div class="field">
                <div class="p-float-label">
                  <InputText
                    id="name"
                    v-model="v$.name.$model"
                    :class="{ 'p-invalid': v$.name.$invalid && submitted }"
                  />
                  <label
                    for="name"
                    :class="{ 'p-error': v$.name.$invalid && submitted }"
                    >Name*</label
                  >
                </div>
                <small
                  v-if="(v$.name.$invalid && submitted) || v$.name.$pending"
                  class="p-error"
                  >Name ist notwendig</small
                >
              </div>
              <div class="field">
                <div class="p-float-label p-input-icon-right">
                  <i class="pi pi-envelope" />
                  <InputText
                    id="email"
                    v-model="v$.email.$model"
                    :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                    aria-describedby="email-error"
                  />
                  <label
                    for="email"
                    :class="{ 'p-error': v$.email.$invalid && submitted }"
                    >E-Mail*</label
                  >
                </div>
                <span v-if="v$.email.$error && submitted">
                  <span
                    id="email-error"
                    v-for="(error, index) of v$.email.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
                <small
                  v-else-if="
                    (v$.email.$invalid && submitted) || v$.email.$pending
                  "
                  class="p-error"
                >
                  E-Mail ist notwendig
                </small>
              </div>
              <div class="field">
                <div class="p-float-label">
                  <Password
                    id="password"
                    v-model="v$.password.$model"
                    :class="{ 'p-invalid': v$.password.$invalid && submitted }"
                    toggleMask
                  >
                    <template #header>
                      <h6>Wähle ein Passwort</h6>
                    </template>
                    <template #footer="sp: any">
                      {{ sp.level }}
                      <Divider />
                      <p class="mt-2">Vorschläge</p>
                      <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                        <li>Mindestens ein Kleinbuchtabe</li>
                        <li>Mindestens ein Großbuchstabe</li>
                        <li>Mindestens eine Zahl</li>
                        <li>Mindestens 8 Zeichen</li>
                      </ul>
                    </template>
                  </Password>
                  <label
                    for="password"
                    :class="{ 'p-error': v$.password.$invalid && submitted }"
                    >Passwort*</label
                  >
                </div>
                <small
                  v-if="
                    (v$.password.$invalid && submitted) || v$.password.$pending
                  "
                  class="p-error"
                >
                  Passwort ist notwendig</small
                >
              </div>
              <div class="field">
                <div class="p-float-label">
                  <Calendar id="date" v-model="date" :showIcon="true" />
                  <label for="date">Geburtstag</label>
                </div>
              </div>
              <div class="field">
                <div class="p-float-label">
                  <Dropdown
                    id="country"
                    v-model="country"
                    :options="countries"
                    optionLabel="name"
                  />
                  <label for="country">Land</label>
                </div>
              </div>
              <div class="field-checkbox">
                <Checkbox
                  id="accept"
                  name="accept"
                  value="Accept"
                  v-model="v$.accept.$model"
                  :class="{ 'p-invalid': v$.accept.$invalid && submitted }"
                />
                <label
                  for="accept"
                  :class="{ 'p-error': v$.accept.$invalid && submitted }"
                  >Ich stimme den Bedingungen zu*</label
                >
              </div>
              <Button type="submit" label="Submit" class="mt-2" />
            </form>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
// import { reactive, ref } from "vue";
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const state = reactive({
  name: "",
  email: "",
  password: "",
  accept: null,
  date: null,
  country: "",
});

const rules = {
  name: { required },
  email: { required, email },
  password: { required },
  accept: { required },
};

const submitted = ref(false);
const countries = ref([
  { name: "Australien", code: "AU" },
  { name: "Brasilien", code: "BR" },
  { name: "China", code: "CN" },
  { name: "Ägypten", code: "EG" },
  { name: "Frankreich", code: "FR" },
  { name: "Deutschland", code: "DE" },
  { name: "Indien", code: "IN" },
  { name: "Japan", code: "JP" },
  { name: "Spanien", code: "ES" },
  { name: "USA", code: "US" },
]);
const showMessage = ref(false);
const date = ref();
const country = ref();

const v$ = useVuelidate(rules, state);

const handleSubmit = (isFormValid) => {
  submitted.value = true;
  if (!isFormValid) {
    return;
  }
  toggleDialog();
};
const toggleDialog = () => {
  showMessage.value = !showMessage.value;
  if (!showMessage.value) {
    resetForm();
  }
};
const resetForm = () => {
  state.name = "";
  state.email = "";
  state.password = "";
  state.date = null;
  state.country = null;
  state.accept = null;
  submitted.value = false;
};
</script>

<style lang="scss" scoped>
.form-demo {
  .card {
    min-width: 450px;
    form {
      margin-top: 2rem;
    }
    .field {
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    .card {
      width: 80%;
    }
  }
}
</style>
