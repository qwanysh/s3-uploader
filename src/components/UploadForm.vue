<template>
  <div class="block">
    <h2 class="subtitle">Upload</h2>
    <div class="columns is-multiline">
      <div class="column">
        <b-field class="file is-primary">
          <b-upload v-model="file" expanded>
            <a class="button is-primary is-fullwidth">
              <b-icon icon="upload"></b-icon>
              <span>Click to upload</span>
            </a>
          </b-upload>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
    };
  },
};
</script>
