import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    patientlist: [],
  }),

  actions: {
    changePage(page) {
      this.router.push(`/${page}`);
    },

    async getPatient() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${BASE_URL}/getPatient/`,
        });
        this.patientlist = data;
      } catch (error) {
        console.log(error);
      }
    },

    async detailPatientId(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${BASE_URL}/detailPatient/${id}`,
        });
        this.patientlist = data.message;
      } catch (error) {
        console.log(error);
      }
    },

    async handleAddPatient(value) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${BASE_URL}/addPatient`,
          data: value,
        });
        this.changePage("");
      } catch (error) {
        console.log(error);
      }
    },

    async handleUpdatePatient(id, value) {
      console.log(id, value, "masok");
      try {
        const { data } = await axios({
          method: "PUT",
          url: `${BASE_URL}/updatePatient/${id}`,
          data: value,
        });
        this.changePage("");
      } catch (error) {
        console.log(error);
      }
    },

    async deletePatient(id) {
      try {
        const { data } = await axios({
          method: "delete",
          url: `${BASE_URL}/deletePatient/${id}`,
        });
        this.getPatient();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
