let currentStatus = "all-filter-btn";

const allFilterBtn = document.getElementById("all-filter-btn");
const openFilterBtn = document.getElementById("open-filter-btn");
const closedFilterBtn = document.getElementById("closed-filter-btn");

const displayContainer = document.getElementById("display-container");

const countCardNumber = document.getElementById("count-card-number");

const allIssues = ()=>{
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res=>res.json())
    .then(data=> {
        const allData = data.data;

        if(currentStatus === "all-filter-btn"){
            showAllData(allData);
            calculate(allData)
        }
    })
}

const calculate = (arr)=>{
    const givenArrylenght = arr.length;
    countCardNumber.innerText = givenArrylenght;
}


const toggole = (id)=>{
    currentStatus = id;

    allFilterBtn.classList.remove("btn-primary");
    openFilterBtn.classList.remove("btn-primary");
    closedFilterBtn.classList.remove("btn-primary");

    const clicedBtn = document.getElementById(id);
    clicedBtn.classList.add("btn-primary");

    if(id === "all-filter-btn"){
        displayContainer.innerHTML = "";
        allIssues();
    }


}

// assignee: "jane_smith"
// author: "john_doe"
// createdAt: "2024-01-15T10:30:00Z"
// description: "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior."
// id: 1
// labels: Array [ "bug", "help wanted" ]
// priority: "high"
// status: "open"
// title: "Fix navigation menu on mobile devices"
// updatedAt: "2024-01-15T10:30:00Z"

const showAllData= (datas) =>{
    // console.log(datas);
    datas.forEach(data=>{
        const dataStatus = data.status;
        
        
        const div = document.createElement("div");
        div.innerHTML = `
            <div class=" bg-[#FFFFFF] py-5 space-y-3 shadow-sm rounded-l-lg h-full">
                <div class="space-y-3 border-b border-[#777777]/30 px-5 ">
                    <div class="flex items-center justify-between">
                        ${dataStatus == "open"? `<img src="./assets/Open-Status.png" alt="">`:`<img src="./assets/Closed- Status .png" alt="">`}
                        <div class="">
                            <p class="text-[12px] bg-${priorityColor(data.priority.toUpperCase())}-200 text-${priorityColor(data.priority.toUpperCase())}-700 px-3 py-1 rounded-full">${data.priority.toUpperCase()}</p>
                        </div>
                    </div>
                    <h1 class=" text-[14px] font-semibold ">${data.title}</h1>
                    <p class=" text-[12px] text-[#777777]">${data.description}</p>
                    <div class="flex items-center gap-3 pb-4">
                        ${highLightWord(data.labels)}
                    </div>
                </div>
                <!-- <hr class="w-full text-[#777777]/20"> -->
                <div class="space-y-3 px-5">
                    <p class="text-[14px] text-[#777777]">#1 by john_doe</p>
                    <p class="text-[14px] text-[#777777]">1/15/2024</p>
                </div>
        `;
        displayContainer.appendChild(div)
    })
}

const priorityColor = (value)=>{
    if(value === "HIGH"){
        return "red";
    }else if(value === "MEDIUM"){
        return "yellow";
    }else if(value === "LOW"){
        return "gray";
    }
} 

const highLightWord = (arrs)=>{
    const createElement = arrs.map(arr=> `<span class="py-1 px-3 text-[12px] rounded-full bg-amber-200 text-black">${arr}</span>`)
    return createElement.join(" ");
}


toggole("all-filter-btn");