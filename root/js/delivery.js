function deliveryForm() {
    
    var deliverySubmit = document.getElementById("DeliveryInfo"), customer, address, number, residence, city, state, zip, phone, email;
        
    function delivery(event) {
        event.preventDefault();

        // residence field and validation
        function residenceField() {
            var residence = document.getElementById("residence").selectedIndex,
                type = document.getElementsByTagName("option")[residence].value;
            window.console.log(type);
//            document.getElementById("TypeOutput").innerHTML = type;
            if (type === "other") {
                window.alert("f' it");
            } else {
                document.getElementById("TypeOutput").innerHTML = type;
            }
//        function otherType() {
//            var other = document.getElementById("other").removeAttribute("class", "hidden");
//        }
//
//        otherType();

            
        }
//            window.console.log(type);
//            if (type === "other") {
//                window.alert("Address is required");
//            } else {
//                
//            }
//        }
//            if (document.getElementsByTagName("option")[residence].value !== "other") {
//            window.alert(document.getElementsByTagName("option")[residence].value);
        residenceField();


        // customer field and validation
        function customerField() {
            var customer = document.getElementById("customer"),
                digitCheck = customer.value.match(/\d/g);
            if (customer.value === null || customer.value === "") {
                window.alert("Name is required");
            } else if (digitCheck !== null) {
                window.alert("Name should not have numbers");
            } else {
                document.getElementById("CustomerOutput").innerHTML = customer.value;
        //                return true;
            }
        }
        customerField();

        // address field and validation
        function addressField() {
            var address = document.getElementById("address");
            if (address.value === null || address.value === "") {
                window.alert("Address is required");
            } else {
                document.getElementById("AddressOutput").innerHTML = address.value;
        //                return true;
            }
        }
        addressField();

        // number field
        function numberField() {
            var number = document.getElementById("number");
            if (number.value === null || number.value === "") {
                return false;
            } else {
                document.getElementById("NumberOutput").innerHTML = "#" + number.value;
        //                return true;
            }
        }
        numberField();

        // city field and validation
        function cityField() {
            var city = document.getElementById("city");
            if (city.value === null || city.value === "") {
                window.alert("City is required");
            } else {
                document.getElementById("CityOutput").innerHTML = city.value;
            }
        }
        cityField();

            // state field and validation
        function stateField() {
            var state = document.getElementById("state").value.toUpperCase(),
                stateValid = state.length;
            if (state === null || state === "") {
                window.alert("State is required");
            } else if (stateValid !== 2) {
                window.alert("State should be in this format: CA or AZ");
            } else if (state !== "CA") {
                window.alert("We only deliver in CA");
            } else {
                document.getElementById("StateOutput").innerHTML = state;
            }
        }
        stateField();

        // zip field and validation
        function zipField() {
            var zip = document.getElementById("zip"),
                zipCheck = zip.value.match(/\d/g);
            window.console.log(zipCheck);
            if (zipCheck === null) {
                window.alert("Zip is required");
            } else if (zipCheck.length === 9) {
                window.alert("Zip should be in this format: 92111\nWe are not the Post Office.");
            } else if (zipCheck.length !== 5) {
                window.alert("Zip is invalid");
            } else {
                window.console.log(zip.value);
                document.getElementById("ZipOutput").innerHTML = zip.value;
            }
        }
        zipField();

        // phone field and validation
        function phoneField() {
            var phone = document.getElementById("phone"),
                phoneCheck = phone.value.match(/\d/g);
        //                phoneCheck = phone.value.match(/\[2-9]\d{2}(-[2-9]\d{2})(-\{4})/g);
            window.console.log(phoneCheck);
            if (phoneCheck === null) {
                window.alert("Phone is tequired");
                return false;
            } else if (phoneCheck.length !== 10) {
                window.alert("Phone is invalid");
                return false;
            } else {
                document.getElementById("PhoneOutput").innerHTML = phone.value;
                return true;
            }
        }
        phoneField();

        // email field and validation                                                                    
        function emailField() {
            var email = document.getElementById("email"),
                atPos = email.value.indexOf("@"),
                dotPos = email.value.lastIndexOf("."),
                emailValid = email.value.length;
            if (email.value === null || email.value === "") {
                window.alert("email is required");
                return false;
            } else if (atPos < 1 || dotPos < atPos + 2 || dotPos >= email.length) {
                window.alert("not a vaild email");
                return true;
            } else {
                document.getElementById("EmailOutput").innerHTML = email.value;
            }
        }
        //                emailCheck = email.value(/\[a-z0-9._%=-]+@[a-z0-9.-]+\/[a-z]{2,3}/g);
        emailField();

        // reveal next fields
        function deliveryOutput() {
            var deliveryInfo = document.getElementById("InfoOutput").removeAttribute("class", "hidden"),
                pizzaInfo = document.getElementById("pizza").removeAttribute("class", "hidden"),
                doughForm = document.getElementById("dough").removeAttribute("class", "hidden"),
                pizzaConfirm = document.getElementById("PizzaConfirm").removeAttribute("class", "hidden");
        }
        deliveryOutput();
        
        // !!!PROBLEM!!!
        window.console.log(customer.value);
        window.console.log(address.value);
        window.console.log(number.value);
        window.console.log(city.value);
        window.console.log(state.value);
        window.console.log(zip.value);
                
    }
    deliverySubmit.addEventListener("click", delivery, false);

    // use same billing // !!!PROBLEM!!!
    var billingSubmit = document.getElementById("BillingInfo"),
        sameInfo = document.getElementById("InfoFill"),
        customerFill = document.getElementById("customer02"),
        addressFill = document.getElementById("address02"),
        numberFill = document.getElementById("number02"),
        cityFill = document.getElementById("city02"),
        stateFill = document.getElementById("state02"),
        zipFill = document.getElementById("zip02");
    sameInfo.addEventListener("click", function () {
        customerFill.setAttribute("value", customer.value);
        addressFill.setAttribute("value", address.value);
        numberFill.setAttribute("value", number.value);
        cityFill.setAttribute("value", city.value);
        stateFill.setAttribute("value", state.value);
        zipFill.setAttribute("value", zip.value);
    }, false);

    function billing(event) {
        event.preventDefault();

        // customer field and validation
        function customerBilling() {
            var customer02 = document.getElementById("customer02"),
                digitCheck02 = customer02.value.match(/\d/g);
            if (customer02.value === null || customer02.value === "") {
                window.alert("Name is required");
            } else if (digitCheck02 !== null) {
                window.alert("Name should not have numbers");
            } else {
                document.getElementById("CustomerOutput02").innerHTML = customer02.value;
                return true;
            }
        }
        customerBilling();

        // address field and validation
        function addressBilling() {
            var address02 = document.getElementById("address02");
            if (address02.value === null || address02.value === "") {
                window.alert("Address is required");
            } else {
                document.getElementById("AddressOutput02").innerHTML = address02.value;
            }
        }
        addressBilling();

        // number field
        function numberBilling() {
            var number02 = document.getElementById("number02");
            if (number02.value === null || number02.value === "") {
                return false;
            } else {
                document.getElementById("NumberOutput02").innerHTML = "#" + number02.value;
            }
        }
        numberBilling();

        // city field and validation
        function cityBilling() {
            var city02 = document.getElementById("city02");
            if (city02.value === null || city02.value === "") {
                window.alert("City is required");
            } else {
                document.getElementById("CityOutput02").innerHTML = city02.value;
            }
        }
        cityBilling();

            // state field and validation
        function stateBilling() {
            var state02 = document.getElementById("state02").value.toUpperCase(),
                stateValid02 = state02.length;
            if (state02 === null || state02 === "") {
                window.alert("State is required");
            } else if (stateValid02 !== 2) {
                window.alert("State should be in this format: CA or AZ");
            } else if (state02 !== "CA") {
                window.alert("We only deliver in CA");
            } else {
                document.getElementById("StateOutput02").innerHTML = state02;
            }
        }
        stateBilling();

        // zip field and validation
        function zipBilling() {
            var zip02 = document.getElementById("zip02"),
                zipCheck02 = zip02.value.match(/\d/g);
            window.console.log(zipCheck02);
            if (zipCheck02 === null) {
                window.alert("Zip is required");
            } else if (zipCheck02.length !== 5) {
                window.alert("Zip is invalid");
            } else {
                window.console.log(zip02.value);
                document.getElementById("ZipOutput02").innerHTML = zip02.value;
                return true;
            }
        }
        zipBilling();

        // cvc code field and validation
        function cvcBilling() {
            var cvc02 = document.getElementById("cvc02"),
                cvcCheck02 = cvc02.value.match(/\d/g);
            window.console.log(cvcCheck02);
            if (cvcCheck02 === null) {
                window.alert("CVC is required");
            } else if (cvcCheck02.length !== 3) {
                window.alert("CVC is invalid");
            } else {
                window.console.log(cvc02.value);
                return true;
            }
        }
        cvcBilling();

        function billingOutput() {
            var billInfo = document.getElementById("BillingOutput").removeAttribute("class", "hidden");
        }
        billingOutput();
    }
    
    billingSubmit.addEventListener("click", billing, false);
}

document.addEventListener("DOMContentLoaded", deliveryForm, false);

    