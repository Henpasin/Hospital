<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "DetailPatient",
  data() {
    return {
      idDelete: {
        id: "",
      },
    };
  },

  computed: {
    ...mapState(useCounterStore, ["patientlist"]),
  },
  methods: {
    ...mapActions(useCounterStore, [
      "deletePatient",
      "detailPatientId",
      "changePage",
    ]),

    detailPatient(id) {
      this.detailPatientId(id);
    },

    destroyPatient(id) {
      this.deletePatient(id);
      this.changePage("");
    },
  },

  async created() {
    const params = this.$router.currentRoute.value.params.id;
    this.idDelete = params;
    await this.detailPatientId(params);
  },
};
</script>

<template>
  <!-- Content -->
  <div class="container mt-5">
    <h2>Patient Details</h2>
    <hr />
    <div class="card">
      <div class="card-body">
        <h1 class="card-title">{{ patientlist.name }}</h1>
        <p class="card-text">
          <strong>Gender: </strong> {{ patientlist.gender }}
        </p>
        <p class="card-text">
          <strong>Address: </strong>{{ patientlist.address }}
        </p>
        <p class="card-text">
          <strong>Phone: </strong> {{ patientlist.phone }}
        </p>
        <p class="card-text">
          <strong>Patient Room: </strong>{{ patientlist.patient_room }}
        </p>
        <a href="#" class="btn btn-primary" @click.prevent="changePage('')"
          >Home</a
        >
        {{}}
        <a
          href="#"
          class="btn btn-danger"
          @click.prevent="destroyPatient(this.idDelete)"
          >Delete Patient</a
        >
      </div>
    </div>
  </div>
</template>
