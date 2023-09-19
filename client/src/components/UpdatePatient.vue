<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "UpdatePatient",

  data() {
    return {
      updatePatient: {
        name: "",
        gender: "",
        address: "",
        phone: "",
        patient_room: "",
      },
    };
  },

  computed: {
    ...mapState(useCounterStore, ["patientlist"]),
  },

  methods: {
    ...mapActions(useCounterStore, ["handleUpdatePatient"]),

    handleSubmit() {
      console.log();
      const id = this.$router.currentRoute.value.params.id;
      this.handleUpdatePatient(id, this.updatePatient);
    },
  },

  async created() {
    this.updatePatient = this.patientlist;
  },
};
</script>

<template>
  <div class="container mt-5">
    <h2>Update Patient</h2>
    <hr />
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="patientName">Patient Name</label>
        <input
          type="text"
          class="form-control"
          id="patientName"
          placeholder="Enter patient name"
          v-model="updatePatient.name"
        />
      </div>
      <div class="form-group">
        <label for="gender">Gender</label>
        <input
          type="text"
          class="form-control"
          id="gender"
          placeholder="Enter gender"
          v-model="updatePatient.gender"
        />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="Enter address"
          v-model="updatePatient.address"
        />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          type="tel"
          class="form-control"
          id="phone"
          placeholder="Enter phone"
          v-model="updatePatient.phone"
        />
      </div>
      <div class="form-group">
        <label for="patient">Patient room</label>
        <input
          type="text"
          class="form-control"
          id="patient"
          placeholder="Enter patient room"
          v-model="updatePatient.patient_room"
        />
      </div>
      <button type="submit" class="btn btn-success">Update Patient</button>
    </form>
  </div>
</template>
