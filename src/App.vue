<template>
  <section class="section">
    <div class="container">
      <div
        class="block is-flex is-justify-content-space-between is-flex-wrap-wrap"
      >
        <h1 class="title mb-0 mr-5">S3 Uploader</h1>
        <div class="is-flex is-justify-content-space-between is-flex-wrap-wrap">
          <b-button
            :type="`is-primary${isEnvironmentFormVisible ? ' is-light' : ''}`"
            @click="isEnvironmentFormVisible = !isEnvironmentFormVisible"
            >Add environment</b-button
          >
          <div class="ml-5" v-if="hasAddedEnvironments">
            <b-tooltip
              class="mr-5"
              label="Set current environment"
              position="is-top"
            >
              <b-dropdown v-model="selectedEnvironmentIndex" aria-role="list">
                <template #trigger="{ active }">
                  <b-button
                    :label="`Current: ${environments[selectedEnvironmentIndex].name}`"
                    type="is-primary is-light"
                    :icon-right="active ? 'caret-up' : 'caret-down'"
                  />
                </template>
                <b-dropdown-item
                  v-for="(environment, index) in environments"
                  :key="index"
                  :value="index"
                  aria-role="listitem"
                >
                  {{ environment.name }}
                </b-dropdown-item>
              </b-dropdown>
            </b-tooltip>
            <b-tooltip label="Remove current environment" position="is-bottom">
              <b-button
                type="is-primary is-light"
                icon-right="trash"
                @click="removeCurrentEnvironment"
              />
            </b-tooltip>
          </div>
        </div>
      </div>
      <EnvironmentForm
        v-if="isEnvironmentFormVisible"
        @close="isEnvironmentFormVisible = false"
        @save="saveEnvironment"
      />
      <UploadForm
        v-if="hasAddedEnvironments"
        :bucketName="
          this.environments[this.selectedEnvironmentIndex].bucketName
        "
      />
    </div>
  </section>
</template>

<script>
import EnvironmentForm from "@/components/EnvironmentForm.vue";
import UploadForm from "@/components/UploadForm.vue";
import LocalStorageService from "@/services/localStorage";

export default {
  data() {
    return {
      isEnvironmentFormVisible: false,
      environments: [],
      selectedEnvironmentIndex: null,
    };
  },
  computed: {
    hasAddedEnvironments() {
      return this.environments.length > 0;
    },
  },
  watch: {
    selectedEnvironmentIndex(newIndex) {
      LocalStorageService.set("SELECTED_ENVIRONMENT_INDEX", newIndex);
    },
    environments(newEnvironments) {
      LocalStorageService.set("ENVIRONMENTS", newEnvironments);
    },
  },
  methods: {
    saveEnvironment(environment) {
      this.isEnvironmentFormVisible = false;
      this.environments.push(environment);
      this.selectedEnvironmentIndex = this.environments.length - 1;
    },
    removeCurrentEnvironment() {
      this.environments.splice(this.selectedEnvironmentIndex, 1);
      this.selectedEnvironmentIndex = this.hasAddedEnvironments ? 0 : null;
    },
  },
  mounted() {
    this.environments = LocalStorageService.get("ENVIRONMENTS", []);
    this.selectedEnvironmentIndex = LocalStorageService.get(
      "SELECTED_ENVIRONMENT_INDEX",
      null
    );
  },
  components: {
    EnvironmentForm,
    UploadForm,
  },
};
</script>
