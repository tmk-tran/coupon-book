const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * Get all of the details for an organization
 */
router.get("/", (req, res) => {
  //   const couponId = req.params.id;

  const queryText = `SELECT * FROM "coupon_book" ORDER BY business_name ASC`;

  pool
    .query(queryText)
    .then((result) => {
      // console.log("orgId = ", orgId);
      console.log("FROM coupons.router: ", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("error in the GET / request for authorized users", err);
      res.sendStatus(500);
    });
});

// router.get("/", rejectUnauthenticated, (req, res) => {
//     pool
//       .query(`SELECT * FROM "games" ORDER BY game_id ASC;`)
//       .then((result) => {
//         console.log("FROM games.router: ", result.rows);
//         res.send(result.rows);
//       })
//       .catch((err) => {
//         console.log("error in the GET / request for authorized users", err);
//         res.sendStatus(500);
//       });
//   });

/**
 * Update a group
 */
// router.put("/:id", rejectUnauthenticated, (req, res) => {
//   const organization = req.body;
//   console.log("ORGANIZATION = ", organization);

//   // Org Details
//   const orgName = organization.organization_name;
//   const type = organization.type;
//   const address = organization.address;
//   const city = organization.city;
//   const state = organization.state;
//   const zip = organization.zip;

//   // Org Contact Details
//   const firstName = organization.primary_contact_first_name;
//   const lastName = organization.primary_contact_last_name;
//   const phone = organization.primary_contact_phone;
//   const email = organization.primary_contact_email;
//   const orgId = organization.organization_id;

//   // const user = req.user.id;
//   const queryText = `UPDATE "organization" SET organization_name = $1, type = $2, address = $3, city = $4, state = $5, zip = $6, primary_contact_first_name = $7, primary_contact_last_name = $8, primary_contact_phone = $9, primary_contact_email = $10 WHERE id = $11;`;
//   pool
//     .query(queryText, [
//       orgName,
//       type,
//       address,
//       city,
//       state,
//       zip,
//       firstName,
//       lastName,
//       phone,
//       email,
//       orgId,
//     ])
//     .then((response) => {
//       res.sendStatus(200);
//     })
//     .catch((err) => {
//       console.log("error saving to database", err);
//       res.sendStatus(500);
//     });
// });

module.exports = router;
