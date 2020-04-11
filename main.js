/* Get Prime Number */
function printNumber(){
	let result, num, isPrime, i;
	result = document.getElementById('result');
	num = Number( document.getElementById('getNumber').value);
	isPrime = false;
	i=2;
	while(i < num)
	{
		if(num%i===0){
			isPrime = true;
		}  
		i++
	}
	if(isPrime){
		result.innerHTML = "Given number is not Prime Number";
	}
	else{
		result.innerHTML = "Given number is Prime Number";
	}
}


/* Exercise on Object */
let obj = {id:1, name:'user', description:'Employee', status: 'complete'}
function chkKeyValue(obj) {
	let returnResult = false;   
    for (let [key, value] of Object.entries(obj)) {
        if (key === 'status' && value === 'complete') {
			returnResult = true;
        }
    }
  return returnResult;
}


/* Exercise on Array */
function findProject(){
let projectDetails = document.getElementById('projectDetails')	
let inputId = Number(document.getElementById('checkId').value);
let projects = [
	{id:1 , name:'JSW' , description:'Steel Manufacturing'},
	{id:2 , name:'RMS' , description:'Resource Management Portal'},
	{id:3 , name:'Semantic Datalake' , description:'Database Management'}
]
let projectFound = false;
	for(var i=0; i<projects.length; i++){
		if(projects[i].id===inputId){
			projectDetails.innerHTML = `<b>Name</b>: ${projects[i].name} <b>Description</b>: ${projects[i].description}`
			console.log(projects[i].name + ' ' + projects[i].description)
			projectFound = true;
		}
	}
	if(projectFound===false){
	   projectDetails.innerHTML = 'Project not available'
	   console.log('Project not available')
	}
}


/* Add Project */
let projectsList = [
	{id:1 , name:'JSW' , status:'Completed'},
	{id:2 , name:'RMS' , status:'In-Progress'},
	{id:3 , name:'Semantic Datalake' , status:'Completed'}
]

var projectListTable = document.getElementById('showProjectList'); 	
function tableList(){
	for(var i =0; i<projectsList.length; i++){
		var row = projectListTable.insertRow()
		row.insertCell().innerHTML = "<input type='checkbox'>";
		var cell2 = row.insertCell(1).innerHTML = projectsList[i].id;
		var cell3 = row.insertCell(2).innerHTML = projectsList[i].name;
		var cell4 = row.insertCell(3).innerHTML = projectsList[i].status;
	}
}
tableList();

function addNewProject(){
	var pName = document.getElementById('pName').value; 
	var pStatus = document.getElementById('pStatus').value; 
	var obj={
		id: projectsList.length+1,
		name: pName,
		status:pStatus
	}
	projectsList.push(obj)
	console.log(projectsList)
	updateTableList(obj)
}


function updateTableList(obj){
	var row2 = projectListTable.insertRow()
	var rowCount = projectListTable.rows.length-1;
	console.log('rowCount', rowCount)
	row2.insertCell().innerHTML = "<input type='checkbox'>";
	row2.insertCell().innerHTML = obj.id;
	row2.insertCell().innerHTML = obj.name;
	row2.insertCell().innerHTML = obj.status;
	
}


function deleteRow(tableID) {
	var table = document.getElementById(tableID);
	var rowCount = table.rows.length;
	for(var i=0; i<rowCount; i++) {
		var row = table.rows[i];
		var chkbox = row.cells[0].childNodes[0];
		if(null != chkbox && true == chkbox.checked) {
			table.deleteRow(i);
			rowCount--;
			i--;
		}
	}
}


function updateProjectStatus(){
            var table = projectListTable;
			var my = projectsList;
			console.log(projectsList)
            var rowCount = table.rows.length;
            for (var i = 0; i < rowCount; i++) {
                var row = table.rows[i];
                var chkbox = row.cells[0].childNodes[0];
                if (null != chkbox && true == chkbox.checked) {
					//var test = my[Object.keys(my)[i]-1]
					//console.log(test)
					//console.log( test.status )
					//row.cells[3].innerText = test.status 
					//console.log( test.status )
                }
            }
    }








