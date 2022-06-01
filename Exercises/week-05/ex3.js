let members = [
  {
    name: "Smith",
    vorname: "John",
    email: "foo@bar.com",
  },
  {
    name: "Doe",
    vorname: "Jane",
    email: "jane@doe.org",
  },
  {
    name: "Jung",
    vorname: "Yvonne",
    email: "jung@yvonne.io",
  },
  {
    name: "Auerbach",
    vorname: "Jörn",
    email: "dont@mail.me",
  },
];

// using Set to store unique values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
const groupSet = new Set();

// HTML elements already present in HTML document
const button = document.getElementById("showMembers");
const divTable = document.getElementById("tableContainer");
const divGroup = document.getElementById("group");
const ul = document.getElementById("myBullet");

// new HTML element, that will be dynamically populated
const table = document.createElement("table");

button.onclick = () => createTable();

const createTable = () => {
  hideButton();
  showAdditionalInformation();
  createTableHeader();
  createTableRows();
  divTable.append(table);
};

const hideButton = () => {
  button.style.display = "none";
};

const showAdditionalInformation = () => {
  divGroup.style.display = "block";
};

const createTableHeader = () => {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  // assumption: all objects in members have the same set of attributes as the first one
  for (key in members[0]) {
    const th = document.createElement("th");
    th.innerHTML = key;
    tr.append(th);
  }

  const group = document.createElement("th");
  group.innerHTML = "gruppe";
  tr.append(group);

  thead.append(tr);
  table.append(thead);
};

const createTableRows = () => {
  const tbody = document.createElement("tbody");
  for (let i = 0; i < members.length; i++) {
    const tr = createTableRow(members[i]);
    tbody.append(tr);
  }
  table.append(tbody);
};

const createTableRow = (member) => {
  const tr = document.createElement("tr");

  // create table cells with data of members
  for (key in member) {
    const td = document.createElement("td");
    td.innerHTML = member[key];
    tr.append(td);
  }

  // create table cell with buttons
  const td = createButtons(member);
  tr.append(td);

  return tr;
};

const createButtons = (member) => {
  const td = document.createElement("td");
  const buttonAdd = document.createElement("button");
  const buttonRemove = document.createElement("button");

  buttonAdd.innerHTML = "Add";
  buttonAdd.addEventListener("click", function () {
    groupSet.add(member);
    refreshGroupList();
  });

  buttonRemove.innerHTML = "Remove";
  buttonRemove.addEventListener("click", function () {
    groupSet.delete(member);
    refreshGroupList();
  });
  td.append(buttonAdd, buttonRemove);

  return td;
};

const refreshGroupList = () => {
  let newInnerHtml = "";
  for (let member of groupSet) {
    newInnerHtml += `<li>${member.vorname} ${member.name}</li>`;
  }
  ul.innerHTML = newInnerHtml;
};
