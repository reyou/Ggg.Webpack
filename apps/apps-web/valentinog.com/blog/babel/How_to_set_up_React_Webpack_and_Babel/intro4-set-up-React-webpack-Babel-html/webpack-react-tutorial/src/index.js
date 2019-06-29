import ReactDOM from "react-dom";
import React from "react";
import FormContainer from "./js/components/container/FormContainer.jsx";
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
