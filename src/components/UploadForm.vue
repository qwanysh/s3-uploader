<template>
  <div class="block">
    <h2 class="subtitle">Upload file</h2>
    <div class="columns is-multiline">
      <div class="column is-one-quarter">
        <b-field class="file is-primary">
          <b-upload v-model="file" expanded>
            <a
              class="button is-primary is-fullwidth"
              :class="{ 'is-light': file }"
            >
              <b-icon :icon="file ? 'file' : 'upload'"></b-icon>
              <span>{{ file ? file.name : "Choose file" }}</span>
            </a>
          </b-upload>
        </b-field>
      </div>
      <div class="column is-flex is-align-items-center">
        <span class="mr-2">.../{{ bucketName }}/</span>
        <b-field class="is-flex-grow-1">
          <b-input v-model="fileName"></b-input>
        </b-field>
      </div>
      <div class="column is-one-quarter">
        <b-button class="is-primary" icon-right="arrow-right" expanded
          >Upload</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      fileName: "",
    };
  },
  watch: {
    file(newFile) {
      if (!this.fileName) {
        this.fileName = newFile.name;
      }
    },
  },
  props: {
    bucketName: {
      type: String,
      required: true,
    },
  },
};
</script>
