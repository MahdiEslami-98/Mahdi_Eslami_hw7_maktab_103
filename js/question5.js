"use strict";
const formElem = document.querySelector(".form");
const companyName = document.getElementById("company-name");
const businessElem = document.getElementById("bussiness");
const addressElem = document.getElementById("addres");
const postCodeElem = document.getElementById("p-code");
const contactNameElem = (document.getElementById("contact-name"));
const phoneNumberElem = (document.getElementById("phone-number"));
const emailElem = document.getElementById("email");
const nameAlert = document.getElementById("name_alert");
const businessAlert = (document.getElementById("bussiness_alert"));
const addressAlert = (document.getElementById("address_alert"));
const postalAlert = (document.getElementById("postal_alert"));
const cNameAlert = document.getElementById("cname_alert");
const cNumberAlert = (document.getElementById("cnumber_alert"));
const emailAlert = document.getElementById("email_alert");
const popupElem = document.querySelector(".popup");
let nameValid = false;
let businessValid = false;
let addressValid = false;
let postCodeValid = false;
let contactNameValid = false;
let phoneValid = false;
let emailValid = false;
const clearInput = () => {
    companyName.value = "";
    businessElem.value = "";
    addressElem.value = "";
    postCodeElem.value = "";
    contactNameElem.value = "";
    phoneNumberElem.value = "";
    emailElem.value = "";
};
const showValidModal = () => {
    if (nameValid &&
        businessValid &&
        addressValid &&
        postCodeValid &&
        contactNameValid &&
        phoneValid &&
        emailValid) {
        popupElem.style.display = "flex";
        nameValid = false;
        businessValid = false;
        addressValid = false;
        postCodeValid = false;
        contactNameValid = false;
        phoneValid = false;
        emailValid = false;
        clearInput();
        setTimeout(() => {
            popupElem.style.display = "none";
        }, 3000);
    }
};
const formValidation = () => {
    const validEmailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    companyName.value
        ? ((nameValid = true), (nameAlert.style.visibility = "hidden"))
        : ((nameValid = false), (nameAlert.style.visibility = "visible"));
    businessElem.value
        ? ((businessValid = true), (businessAlert.style.visibility = "hidden"))
        : ((businessValid = false), (businessAlert.style.visibility = "visible"));
    addressElem.value
        ? ((addressValid = true), (addressAlert.style.visibility = "hidden"))
        : ((addressValid = false), (addressAlert.style.visibility = "visible"));
    postCodeElem.value
        ? ((postCodeValid = true), (postalAlert.style.visibility = "hidden"))
        : ((postCodeValid = false), (postalAlert.style.visibility = "visible"));
    contactNameElem.value
        ? ((contactNameValid = true), (cNameAlert.style.visibility = "hidden"))
        : ((contactNameValid = false), (cNameAlert.style.visibility = "visible"));
    phoneNumberElem.value
        ? ((phoneValid = true), (cNumberAlert.style.visibility = "hidden"))
        : ((phoneValid = false), (cNumberAlert.style.visibility = "visible"));
    emailElem.value.match(validEmailRegEx)
        ? ((emailValid = true), (emailAlert.style.visibility = "hidden"))
        : ((emailValid = false), (emailAlert.style.visibility = "visible"));
    showValidModal();
};
formElem.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});
