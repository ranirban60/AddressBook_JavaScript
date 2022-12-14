console.log(" Welcome To Address Book System ");

const nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
const addressRegex = RegExp('^[a-zA-z0-9#,]{4,}$');
const cityStateRegex = RegExp('^[a-zA-z]{4,}$');
const zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
const phoneNumberRegex = RegExp("^[0-9]{2}\\s{1}[0-9]{10}$");
const emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");


class Contact{

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get address(){
        return this._address;
    }

    get city(){
        return this._city;
    }

    get state(){
        return this._state;
    }

    get zip(){
        return this._zip;
    }

    get phoneNumber(){
        return this._phoneNumber;
    }

    get email(){
        return this._email;
    }

    set firstName(firstName){
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "FIRST NAME is Incorrect";
    }

    set lastName(lastName){
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "LAST NAME is Incorrect";
    }

    set address(address){
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "ADDRESS is Incorrect";
    }

    set city(city){
        if (cityStateRegex.test(city))
            this._city = city;
        else
            throw "CITY is Incorrect";
    }

    set state(state){
        if (cityStateRegex.test(state))
            this._state = state;
        else
            throw "STATE is Incorrect";
    }

    set zip(zip){
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "ZIP is Incorrect";
    }

    set phoneNumber(phoneNumber){
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "PHONE NUMBER is Incorrect";
    }

    set email(email){
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "EMAIL ADDRESS is Incorrect";
    }


    toString(){
        return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", Address : " + this.address + ", City : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone Number : "+ this.phoneNumber + ", Email : "+ this.email;
    }
}

let addressBookArray = new Array();

function contactExists(firstName, lastName) {
    return addressBookArray.some(contact => contact.firstName == firstName && contact.lastName == lastName);
}

function addContact(contact) {
    if (!contactExists(contact.firstName, contact.lastName)) 
        addressBookArray.push(contact);
    else 
        throw "Contact is Present in the Address Book";
}


function editContact(firstName, lastName, property, newValue) {
    if (contactExists(firstName, lastName)) {
        switch (property) {
            case "address":
                addressBookArray.find((contact) => contact.firstName == firstName).address = newValue;
                break;
            case "city":
                addressBookArray.find((contact) => contact.firstName == firstName).city = newValue;
                break;
            case "state":
                addressBookArray.find((contact) => contact.firstName == firstName).state = newValue;
                break;
            case "zip":
                addressBookArray.find((contact) => contact.firstName == firstName).zip = newValue;
                break;
            case "phoneNumber":
                addressBookArray.find((contact) => contact.firstName == firstName).phoneNumber = newValue;
                break;
            case "email":
                addressBookArray.find((contact) => contact.firstName == firstName).email = newValue;
                break;
            default:
                console.log("Enter valid property");
        }
    }
    else {
        console.log("Contact Does Not Exist");
    }
}

function deleteContact(firstName, lastName){
    if(contactExists(firstName, lastName)){
        addressBookArray = addressBookArray.filter((contact) => contact.firstName != firstName && contact.lastName != lastName);
    }else{
        console.log("Contact Does Not Exist");
    }
}

function getCountOfContacts(count) {
    count += 1;
    return count;
}

function searchContactByCity(city) {
    return addressBookArray.filter((contact) => contact.city == city);
  }
  
function searchContactByState(state) {
    return addressBookArray.filter((contact) => contact.state == state);
  }

function viewContactsByCity(city){
    return addressBookArray.filter((contact) => contact.city == city);
}

function viewContactsByState(state){
    return addressBookArray.filter((contact) => contact.state == state);
}

function getCountOfContactsByCity(city){
    return addressBookArray.filter((contact) => contact.city == city).length;
}

function getCountOfContactsByState(state){
    return addressBookArray.filter((contact) => contact.state == state).length;
}

function sortAddressBookByName(){
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.firstName).localeCompare(secondPerson.firstName));
    console.log(addressBookArray);
    console.log( addressBookArray.toString());
}

function sortAddressBookByCity(){
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.city).localeCompare(secondPerson.city));
    console.log(addressBookArray);
    console.log( addressBookArray.toString());
}

function sortAddressBookByState(){
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.state).localeCompare(secondPerson.state));
    console.log(addressBookArray);
    console.log( addressBookArray.toString());
}

function sortAddressBookByZip(){
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.zip).localeCompare(secondPerson.zip));
    console.log(addressBookArray);
    console.log( addressBookArray.toString());
}

let firstContact = new Contact("Thomas", "Edison", "Esplanade", "Kolkata", "WestBengal", 700001, "91 1234567890", "thomas@gmail.com");
let secondContact = new Contact("Robert", "Bosch", "Raigad", "Mumbai", "Maharastra", "400001", "91 9876543210", "robert@gmail.com");

try{
    addressBookArray.push(firstContact);
    addressBookArray.push(secondContact);
}
catch(e){
    console.log(e);
}


console.log(addressBookArray);
console.log(addressBookArray.toString());

console.log("\nCount of Contacts : " + addressBookArray.reduce(getCountOfContacts, 0));

console.log("\nAfter Editing Contact")
editContact("Thomas", "Edison", "zip", "700005");
console.log(addressBookArray);
console.log(addressBookArray.toString());

console.log("\nAfter Deleting Contact");
deleteContact("Robert", "Bosch");
console.log(addressBookArray);
console.log(addressBookArray.toString());

console.log("\nCount of Contacts : " + addressBookArray.reduce(getCountOfContacts, 0));

console.log("\nAdding Duplicate Contact");
try {
    addContact(secondContact);
} catch (e) {
    console.error(e);
}
console.log(addressBookArray);
console.log(addressBookArray.toString());

console.log("\nSearch Contact By City : Kolkata \n");
console.log(searchContactByCity("Kolkata"));

console.log("\nSearch Contact By State : Maharastra\n");
console.log(searchContactByState("Maharastra"));

console.log("\nView Contacts By City : Kolkata \n" );
console.log(viewContactsByCity("Kolkata"));

console.log("\nView Contacts By State : Maharastra\n" );
console.log(viewContactsByState("Maharastra"));

console.log("\nNumber of Contacts residing in City : Kolkata= " + getCountOfContactsByCity("Kolkata"))
console.log("\nNumber of Contacts residing in State : Maharastra = " + getCountOfContactsByState("Maharastra"));

console.log("\nContacts In Alphabetical Order");
sortAddressBookByName();

console.log("\nContacts Sorted Using City");
sortAddressBookByCity();

console.log("\nContacts Sorted Using State");
sortAddressBookByState();

console.log("\nContacts Sorted Using Zip");
sortAddressBookByZip();