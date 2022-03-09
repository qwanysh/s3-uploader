<template>
  <div class="block">
    <h2 class="subtitle">Add environment</h2>
    <div class="columns is-multiline">
      <div class="column is-half">
        <b-field label="Environment name">
          <b-input v-model="environment.name"></b-input>
        </b-field>
      </div>
      <div class="column is-half">
        <b-field label="Bucket name">
          <b-input v-model="environment.bucketName"></b-input>
        </b-field>
      </div>
      <div class="column is-half">
        <b-field label="Access key id">
          <b-input
            v-model="environment.accessKeyId"
            type="password"
            password-reveal
          ></b-input>
        </b-field>
      </div>
      <div class="column is-half">
        <b-field label="Secret access key">
          <b-input
            v-model="environment.secretAccessKey"
            type="password"
            password-reveal
          ></b-input>
        </b-field>
      </div>
      <div class="column is-half">
        <b-button type="is-danger is-light" expanded @click="$emit('close')"
          >Cancel</b-button
        >
      </div>
      <div class="column is-half">
        <b-button type="is-primary" expanded @click="save">Save</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      environment: {
        name: "",
        bucketName: "",
        accessKeyId: "",
        secretAccessKey: "",
      },
    };
  },
  methods: {
    save() {
      this.$buefy.toast.open("Environment saved");
      this.$emit("save", this.environment);
    },
  },
};
</script>
