// exports.signupPost = (req, res, next) => {
//   const { name, email, password, passwordrepeat, role } = req.body; // vienen del form
//   if (password !== passwordrepeat) {
//     return res.render("auth/signup", {
//       msg: "Passwords must be the same utito"
//     });
//   }
//   // solo porque el user tiene plm, podemos utilizar register
//   User.register({ name, email, role }, password)
//     .then(user => res.redirect("/login"))
//     .catch(err => {
//       if (err.name === "UserExistsError") {
//         return res.render("auth/signup", {
//           msg: "Ya te habias registrado caun"
//         });
//       }
//     });
// };