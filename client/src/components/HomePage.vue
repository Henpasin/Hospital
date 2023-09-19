<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "HomePage",

  computed: {
    ...mapState(useCounterStore, ["patientlist"]),
  },

  methods: {
    ...mapActions(useCounterStore, [
      "changePage",
      "getPatient",
      "deletePatient",
      "detailPatientId",
    ]),

    updatePatient(id) {
      this.detailPatientId(id);
      this.changePage(`update/${id}`);
    },

    detailPatient(id) {
      this.detailPatientId(id);
      this.changePage(`detail/${id}`);
    },

    destroyPatient(id) {
      this.deletePatient(id);
    },
  },

  async created() {
    await this.getPatient();
  },
};
</script>

<template>
  <!-- Search Section -->

  <section class="search my-4">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="d-flex">
            <input
              class="form-control me-2 mr-1"
              type="text"
              placeholder="Search Patient.."
              aria-label="Search"
            />
            <button class="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
      <hr />
    </div>
  </section>

  <!-- Content -->
  <div class="container mt-1">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>List of Patients</h2>
      <button
        type="button"
        class="btn btn-success"
        @click.prevent="changePage('add')"
      >
        Add Patient
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="text-center">No</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Address</th>
          <th scope="col" class="text-center">Action</th>
          <!-- Center align action column -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(patient, index) in patientlist.message" :key="patient.id">
          <th scope="row" class="text-center">{{ index + 1 }}</th>
          <td>{{ patient.name }}</td>
          <td>{{ patient.phone }}</td>
          <td>{{ patient.address }}</td>
          <td class="text-center">
            <button
              type="button"
              class="btn btn-info btn-sm btn-action mr-1"
              @click.prevent="detailPatient(patient.id)"
            >
              Detail
            </button>
            <button
              type="button"
              class="btn btn-primary btn-sm btn-action mr-1"
              @click.prevent="updatePatient(patient.id)"
            >
              Update
            </button>
            <button
              type="button"
              @click.prevent="destroyPatient(patient.id)"
              class="btn btn-danger btn-sm btn-action mr-1"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Pagination -->
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center mt-4">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
          >Previous</a
        >
      </li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#"
          >1 <span class="sr-only">(current)</span></a
        >
      </li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>
