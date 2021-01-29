export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = 'Full Name required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.phonenumber) {
        errors.phonenumber = 'Phone number is required';
    } else if (values.phonenumber.length > 10) {
        errors.phonenumber = 'Phone number cannot exceed 10 characters.';
    }

    // if (!values.password2) {
    //     errors.password2 = 'Password is required';
    // } else if (values.password2 !== values.password) {
    //     errors.password2 = 'Passwords do not match';
    // }
    return errors;
}