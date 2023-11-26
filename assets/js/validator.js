// Doi tuong
function Validator(options) {
  // Ham thuc hien validate

  function validate(inputElement, rule) {
    //value: inputElement.value
    //test func: rule.test

    // console.log(rule);
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelector
    );
    var errorMessage = rule.test(inputElement.value);
    // console.log(errorMessage);
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add(options.invalid);
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove(options.invalid);
    }
  }

  // Lay element cua form can validate
  var formElement = document.querySelector(options.form);
  // console.log(options.rules);

  if (formElement) {
    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        // Xu ly truong hop blur khoi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
        // Xu ly moi khi nguoi dung nhap vap input
        inputElement.oninput = function () {
          var errorElement = inputElement.parentElement.querySelector(
            options.errorSelector
          );
          errorElement.innerText = "";
          inputElement.parentElement.classList.remove(options.invalid);
        };
      }
      // console.log(rule.selector);
    });
  }
}

// Dinh nghia Rules
// Nguyen tac cac rules:
// 1. Khi co loi -> Tra ra message loi
// 2. Khi hop le -> khong tra ra cai gi ca (undefined)
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui long nhap truong nay";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Trường này phải là Email!";
    },
  };
};
