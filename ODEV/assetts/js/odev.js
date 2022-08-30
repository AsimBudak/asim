function satirNoYaz() {
  let satirNos = document.querySelectorAll(".satirNo");
  for (let i = 0; i < satirNos.length; i++) {
    satirNos[i].innerHTML = i + 1;
  }
}
satirNoYaz();
let oldPoint = "0";
function reCreate() {
  var td = event.target.parentNode;
  var tr = td.parentNode;
  let input1 = tr.querySelector("td:nth-child(2) input");
  let input2 = tr.querySelector("td:nth-child(3) input");
  let kalem = tr.querySelector("td:nth-child(4) i");
  let cop = tr.querySelector("td:nth-child(4) i:nth-child(2)");
  if (input1.className == "disableInput") {
    input1.setAttribute("class", "enableInput");
    input1.disabled = false;
    input2.setAttribute("class", "enableInput");
    input2.disabled = false;
    kalem.setAttribute("class", "fa-solid fa-check");
    cop.setAttribute("class", "fa-solid fa-xmark");
  } else {
    input1.setAttribute("class", "disableInput");
    input1.disabled = false;
    input2.setAttribute("class", "disableInput");
    input2.disabled = false;
    kalem.setAttribute("class", "fa-solid fa-pen");
    cop.setAttribute("class", "fa-solid fa-trash-can");
  }
  getAverage();
  oldPoint = input2.value;
}
function getAverage() {
  let points = document.querySelectorAll("#pointi");
  let sum = 0;
  for (let i = 0; i < points.length; i++) {
    sum += Number(points[i].value);
  }
  let average = sum / points.length;
  document.querySelector("#average").innerHTML = average;
}
getAverage();

function deleteRow() {
  var td = event.target.parentNode;
  var tr = td.parentNode;
  let input1 = tr.querySelector("td:nth-child(2) input");
  let input2 = tr.querySelector("td:nth-child(3) input");
  if (input2.className == "disableInput") {
    tr.remove();
    satirNoYaz();
    getAverage();
  } else {
    input2.value = oldPoint;
    input1.setAttribute("class", "disableInput");
    input1.disabled = false;
    input2.setAttribute("class", "disableInput");
    input2.disabled = false;
  }
}

function addRow() {
  let name = document.querySelector("#name").value;
  let point = document.querySelector("#point").value;

  const elTr = document.createElement("tr");
  let elTd = (document.createElement("td").className = "satirNo");
  elTr.append(elTd);
  document.createElement("td");
  elTd.innerHTML = `<input class="disableInput" type="text" value="${name}" disabled>`;
  elTr.append(elTd);
  elTd = document.createElement("td").className = "point";
  elTd.innerHTML = `<input id="pointi" class="disableInput" type="text" value="${point}" disabled>`;
  elTr.append(elTd);
  elTd = document.createElement("td");
  elTd.innerHTML = `<i onclick="reCreate()" class="fa-solid fa-pen"></i> &nbsp <i onclick="deleteRow()" class="fa-solid fa-trash-can"></i>`;
  elTr.append(elTd);

  let satir = "";

  satir += `
  <tr>
            <td class="satirNo">0</td>
            <td><input value="${name}" class="disableInput" disabled ></td>
            <td><input value="${point}" class="disableInput" id="pointi" disabled ></td>
            <td class="text-center">
              <i id="pen" onclick="reCreate()" class="fa-solid fa-pen"></i> &nbsp;&nbsp;
              <i onclick="deleteRow()" class="fa-solid fa-trash-can"></i>
            </td>
          </tr>
  `;
  satir += document.querySelector("#tabloNot tbody").innerHTML;
  document.querySelector("#tabloNot tbody").innerHTML = satir;
  satirNoYaz();
  getAverage();
}
