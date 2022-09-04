
const tableBody = document.getElementById('table-body');

let flights = [

    {
        time : "08:11",
        destination : "CHENNAI",
        flights :"OX 212",
        gate : "A 01",
        remarks :"ON TIME"
    },
    {
        time : "11:20",
        destination : "MADURAI",
        flights :"FC 203",
        gate : "A 01",
        remarks :"DELAYED"
    },
    {
        time : "13:15",
        destination : "COIMBATORE",
        flights :"KL 612",
        gate : "A 01",
        remarks :"DELAYED"
    },
    {
        time : "20:50",
        destination : "BANGALORE",
        flights :"MU 476",
        gate : "A 01",
        remarks :"ON TIME"
    },
    {
        time : "05:10",
        destination : "MUMBAI",
        flights :"MU 203",
        gate : "TH 551",
        remarks :"ON TIME"
    }
];
const destinations = ["SALEM","ERODE","TIRCHY","GOA","SATHY","KARUR"];
const remarks = ["ON TIME","DELAYED","CANCELLED"];

let hour = 15;

function populateTable(){

    for(const flight of flights ){        
        const tableRow = document.createElement("tr");        
            for(const flightDetail in flight){
                const tableCell = document.createElement("td");                
                const word = Array.from(flight[flightDetail]);                          
                for(const [index,letter] of word.entries()){
                    const letterElement = document.createElement("div");                
                    setTimeout(()=>{
                        letterElement.classList.add('flip');
                        letterElement.textContent = letter;
                        tableCell.append(letterElement);
                    },100*index );                    
                }            
                tableRow.append(tableCell);
            }
        tableBody.append(tableRow);
    }
}

populateTable();

function generateRandomLetters(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random()*alphabet.length));
}

function generateRandomNumber(maxNumber){
    const numbers = "0123456789"
    if(maxNumber){
        const newNumbers = numbers.slice(0,maxNumber+1);
        return newNumbers.charAt(Math.floor(Math.random()*newNumbers.length));
    }
    return numbers.charAt(Math.floor(Math.random()*numbers.length));
}

function generateTime(){
    let displayHour = hour;
    if(hour < 24){
        hour++
    }
    if(hour >= 24){
        hour = 1;
        displayHour = hour;
    }
    if(hour < 10){
        displayHour = "0"+ hour;
    }
    return displayHour + ":" + generateRandomNumber(5)  +generateRandomNumber();
}

function shuffleUp(){
    flights.shift();
    flights.push({
        time:generateTime(),
        destination:destinations[Math.floor(Math.random() * destinations.length)],
        flight : generateRandomLetters() + generateRandomLetters() +" "+ generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetters() +" "+ generateRandomNumber() + generateRandomNumber(),
        remarks:remarks[Math.floor(Math.random() * remarks.length)]
    })

    tableBody.textContent = ""
    populateTable();
    
}

setInterval(shuffleUp,5000)




