function save() {
    const name = document
        .getElementById('name')
        .value;
    const email = document
        .getElementById('email')
        .value;
    const phone = document
        .getElementById('phone')
        .value

    const newContactObject = {
        name,
        email,
        phone
    };
    console.log(newContactObject);

    newContactParagraph = `
	Hari: ${newContactObject.name}
	Kegiatan: ${newContactObject.email}
	Pukul: ${newContactObject.phone}
  `;
    console.log(newContactParagraph);

    const listItem = document.createElement("ul");
    var nodeContact = document.createTextNode(newContactParagraph);
    listItem.appendChild(nodeContact);
    document
        .getElementById("contactResult")
        .appendChild(listItem);

    const arrContact = [];
    arrContact.push(newContactObject)

    localStorage.setItem('contact', JSON.stringify(arrContact));
    var retrievedObject = JSON.parse(localStorage.getItem('arrContact'));
    console.log(retrievedObject);
};
