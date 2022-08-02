var express = require("express");
var router = express.Router();
const { checkTA_Validity } = require("../middleware/auth.middleware");
var { createCandidate, addAvailabilitySlot, deleteAvailabilitySlot } = require("../controllers/candidate.controller");

//route to create candidate
router.post("/create-candidate", checkTA_Validity, createCandidate);

//route to add availability slots
router.patch("/add-candidate-slot", checkTA_Validity, addAvailabilitySlot);

//route to delete / remove a slot
router.delete("/remove-candidate-slot", checkTA_Validity, deleteAvailabilitySlot);

module.exports = router;