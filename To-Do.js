var add_button = document.querySelector("#add-button");
var Title = document.querySelector("#List-Title");
var Description = document.querySelector("#List-Description");

add_button.addEventListener("click",Add_To_List);
var clear_button = document.querySelector("#clear-button");
clear_button.addEventListener("click",clear_List);

function Add_To_List()
{
    var Details;
    var Notes = localStorage.getItem("Notes");
    if(Notes==null)
    {
       Details = [];
    }
    else
    {
        Details = JSON.parse(Notes);
    }
    Details.push([Title.value,Description.value]);
    Description.value = "";
    Title.value="";
    localStorage.setItem("Notes",JSON.stringify(Details));
    Show_Notes();
}
function Show_Notes()
{
    var Notes = localStorage.getItem("Notes");
    if(Notes==null)
    {
       Details = [];
    }
    else
    {
        Details = JSON.parse(Notes);
    }
    var Html = "";
    Details.forEach((element,index) => {
       Html +=  `  <tr>
       <th scope="row">${index + 1}</th>
       <td>${element[0]}</td>
       <td>${element[1]}</td>
       <td><button class="btn btn-primary" onclick ="delete_Note(this.id)" id ="${index}">Delete Note</button></td>
     </tr>
     `
    });
    let c = document.querySelector(".table-body");
    if(c.length!=0)
    {
        c.innerHTML = Html;
    }
    else
    {
        c.innerHTML = "Nothing to Show";
    }
}
function delete_Note(index)
{
    var Notes = localStorage.getItem("Notes");
    if(Notes==null)
    {
       Details = [];
    }
    else
    {
        Details = JSON.parse(Notes);
    }
    Details.splice(index,1);
    localStorage.setItem("Notes",JSON.stringify(Details));
    Show_Notes();
}
function clear_List()
{
    localStorage.clear();
    Show_Notes();
}
