let res = document.getElementById("resTable");
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
    res.style = "background: linear-gradient(120deg,#153677,#4e085f)";
    //adding Name
tr = document.createElement("tr");
td1 = document.createElement("td");
td2 = document.createElement("td");
td1.innerHTML = "Name:";
td2.innerHTML = document.getElementById("name").value;
  tr.append(td1);
  tr.append(td2);
  res.append(tr);
  //adding Gender
  tr = document.createElement("tr");
td1 = document.createElement("td");
td2 = document.createElement("td");
td1.innerHTML = "Gender:";
var gender = document.getElementsByName('gender');
for(i=0;i<gender.length;i++){
    if(gender[i].checked){
        td2.innerHTML = gender[i].value;
    }
}

  tr.append(td1);
  tr.append(td2);
  res.append(tr);
  //adding Image Link
  tr = document.createElement("tr");
td1 = document.createElement("td");
td2 = document.createElement("td");
td1.innerHTML = "Image:";
val = document.getElementById("img").value;
src = val;
img = document.createElement("img");
img.src = src;
img.style = "height:75px; width:75px";
td2.append(img);
  tr.append(td1);
  tr.append(td2);
  res.append(tr);
  //adding github Link
  tr = document.createElement("tr");
td1 = document.createElement("td");
td2 = document.createElement("td");
td1.innerHTML = "GitHub:";
td2.innerHTML = document.getElementById("github").value;
  tr.append(td1);
  tr.append(td2);
  res.append(tr);  
  hr = document.createElement("hr");
  hr.style = "width:100%;text-align:center;color:black";
  res.append(hr);
});