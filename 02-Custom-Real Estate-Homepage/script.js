// <<--------- Header topbar populate dropdown with states --------->>

//--- Array of states --------

const statesList = [
    "Johor",
    "Kedah",
    "Kelantan",
    "Kuala Lumpur",
    "Labuan",
    "Malacca",
    "Negeri Sembilan",
    "Pahang",
    "Perak",
    "Perlis",
    "Penang",
    "Sabah",
    "Sarawak",
    "Selangor",
    "Terengganu"
];

//-- Global varibale declartions

const statesOptionList = document.getElementById('listOfStates');  

statesList.forEach(state =>{
    let stateList  = new Option(state);
    statesOptionList.append(stateList);       
});


getSelectedDataUI();

//--- Capture Selected option item & setItme in to localstrogre

const getSelectedStateValues = (e) =>{
   let stateValue = e.target.value;
   localStorage.setItem("States", JSON.stringify(stateValue));   
}

//-- Event Listeners

statesOptionList.addEventListener('change', getSelectedStateValues);

//-- Get data from localstorage and populate into the DOM UI

function getSelectedDataUI(){    
  const selectedState = JSON.parse(localStorage.getItem('States', statesOptionList));
  if(selectedState !== null && selectedState.length > 0){   
    let setOptionsData =  statesOptionList.options[statesOptionList.selectedIndex];
     setOptionsData.textContent = selectedState;
  }
}
