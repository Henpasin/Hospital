<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "AddPatient",

  data() {
    return {
      addPatient: {
        name: "",
        gender: "",
        address: "",
        phone: "",
        patient_room: "",
      },
    };
  },

  methods: {
    ...mapActions(useCounterStore, ["handleAddPatient"]),

    handleSubmit() {
      this.handleAddPatient(this.addPatient);
    },
  },
};
</script>

<template>
  <div class="container mt-5">
    <h2>Add Patient</h2>
    <hr />
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="patientName">Patient Name</label>
        <input
          type="text"
          class="form-control"
          id="patientName"
          placeholder="Enter patient name"
          v-model="addPatient.name"
        />
      </div>
      <div class="form-group">
        <label for="gender">Gender</label>
        <input
          type="text"
          class="form-control"
          id="gender"
          placeholder="Enter gender"
          v-model="addPatient.gender"
        />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="Enter address"
          v-model="addPatient.address"
        />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          type="tel"
          class="form-control"
          id="phone"
          placeholder="Enter phone"
          v-model="addPatient.phone"
        />
      </div>
      <div class="form-group">
        <label for="patient">Patient room</label>
        <input
          type="text"
          class="form-control"
          id="patient"
          placeholder="Enter patient room"
          v-model="addPatient.patient_room"
        />
      </div>
      <button type="submit" class="btn btn-success">Add Patient</button>
    </form>
  </div>
</template>
