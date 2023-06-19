export const validation = async (form, errors, setErrors) => {
  //? NAME VALIDATION
  if (form.name.length > 50) {
    setErrors((errors) => ({
      ...errors,
      name: "Please enter a name with less than 50 characters",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      name: "",
    }));
  }
  //? LASTNAME VALIDATION
  if (form.lastname.length > 50) {
    setErrors((errors) => ({
      ...errors,
      lastname: "Please enter a last name with less than 50 characters",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      lastname: "",
    }));
  }
  //? USERNAME VALIDATION

  if (form.username.length > 15) {
    setErrors((errors) => ({
      ...errors,
      username: "Please enter a Username with less than 15 characters",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      username: "",
    }));
  }

  // await axios
  // .get("http://localhost:3000/api/users")
  // .then((response) => {
  //   const users = response.data;
  //   console.log(users);

  //   if (form.username.trim() === "") {
  //     setErrors((errors) => ({
  //       ...errors,
  //       username: "",
  //     }));
  //   } else {
  //     const existingUser = users.find(
  //       (user) => user.username === form.username
  //     );

  //     if (existingUser) {
  //       setErrors((errors) => ({
  //         ...errors,
  //         username: "This username already exists",
  //       }));
  //     } else {
  //       setErrors((errors) => ({
  //         ...errors,
  //         username: "",
  //       }));
  //     }
  //   }
  // })
  // .catch((error) => {
  //   console.error(error);
  // });

  //? PASSWORD VALIDATION
  if (form.password.length > 12) {
    setErrors((errors) => ({
      ...errors,
      password: "Your password should have less than 12 characters",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      password: "",
    }));
  }

  //? ABOUT ME VALIDATION
  if (form.aboutme.length > 500) {
    setErrors((errors) => ({
      ...errors,
      aboutme: "Please enter a description with less than 500 characters",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      aboutme: "",
    }));
  }

  //? EMAIL VALIDATION
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (form.email.trim() === "") {
    setErrors((errors) => ({
      ...errors,
      email: "",
    }));
  } else if (!emailRegex.test(form.email)) {
    setErrors((errors) => ({
      ...errors,
      email: "Please enter a valid email address",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      email: "",
    }));
  }

  //? DEGREE VALIDATION
  if (form.degree.length > 50) {
    setErrors((errors) => ({
      ...errors,
      degree: "Please enter a degree with less than 50 characters",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      degree: "",
    }));
  }

  //? CV VALIDATION
  const cvLinkRegex = /^https?:\/\/.*\.pdf$/;
  if (form.cv.trim() === "") {
    setErrors((errors) => ({
      ...errors,
      cv: "",
    }));
  } else if (!cvLinkRegex.test(form.cv)) {
    setErrors((errors) => ({
      ...errors,
      cv: "Please enter a valid PDF link for the CV",
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      cv: "",
    }));
  }
};
