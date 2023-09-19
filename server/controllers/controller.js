const { Patient } = require("../models");

class ControllerPatient {
  static async getPatient(req, res, next) {
    try {
      const ticket = await Patient.findAll();

      if (ticket) {
        res.status(201).json({
          statusCode: 201,
          message: ticket,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async addPatient(req, res, next) {
    try {
      const created = await Patient.create(req.body);
      if (created) {
        res.status(201).json({
          statusCode: 201,
          message: created,
        });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async detailPatient(req, res, next) {
    try {
      console.log(req.params);
      const detail = await Patient.findByPk(req.params.id);

      res.status(200).json({
        statusCode: 200,
        message: detail,
      });
    } catch (err) {
      next(err);
    }
  }

  static async updatePatient(req, res, next) {
    try {
      const patient = await Patient.findByPk(req.params.id);
      if (!patient) throw { name: "Datanotfound" };

      if (patient) {
        await patient.update(req.body);
        res.status(200).json({
          statusCode: 200,
          message: patient.name + " success to update",
        });
      }
    } catch (err) {
      next(err);
    }
  }

  static async deletePatient(req, res, next) {
    try {
      const patient = await Patient.findByPk(req.params.id);

      if (!patient) throw { name: "Datanotfound" };

      if (patient) {
        await patient.destroy();
        res.status(200).json({
          statusCode: 200,
          message: patient.name + " success to delete",
        });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ControllerPatient;
