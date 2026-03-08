let currentStatus = "all-filter-btn";

const allFilterBtn = document.getElementById("all-filter-btn");
const openFilterBtn = document.getElementById("open-filter-btn");
const closedFilterBtn = document.getElementById("closed-filter-btn");

const displayContainer = document.getElementById("display-container");

const countCardNumber = document.getElementById("count-card-number");


const allIssues = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res => res.json())
        .then(data => {
            const allData = data.data;

            if (currentStatus === "all-filter-btn") {
                showAllData(allData);
                calculate(allData)
            } else if (currentStatus === "open-filter-btn") {
                const filterdata = allData.filter(datas => datas.status === "open");
                showAllData(filterdata);
                calculate(filterdata);
            } else if (currentStatus === "closed-filter-btn") {
                const filterdata2 = allData.filter(datas => datas.status === "closed");
                // console.log("hi");
                showAllData(filterdata2);
                calculate(filterdata2);
            }
        })
}

const spinner = (status) => {
    const spinnerContainer = document.getElementById("spinner-container");
    const displayContainer = document.getElementById("display-container");

    if (status === true) {
        spinnerContainer.classList.remove("hidden");
        displayContainer.classList.add("hidden");
    } else if (status === false) {
        spinnerContainer.classList.add("hidden");
        displayContainer.classList.remove("hidden");
    }
}

const removeActive = () => {
    allFilterBtn.classList.remove("btn-primary");
    openFilterBtn.classList.remove("btn-primary");
    closedFilterBtn.classList.remove("btn-primary");
    return;
}

const calculate = (arr) => {
    const givenArrylenght = arr.length;
    countCardNumber.innerText = givenArrylenght;
}


const toggole = (id) => {
    currentStatus = id;
    spinner(true);

    removeActive();

    const clicedBtn = document.getElementById(id);
    clicedBtn.classList.add("btn-primary");

    if (id === "all-filter-btn") {
        displayContainer.innerHTML = "";
        allIssues();
    } else if (id === "open-filter-btn") {
        displayContainer.innerHTML = "";
        allIssues();
    } else if (id === "closed-filter-btn") {
        displayContainer.innerHTML = "";
        allIssues();
    }
    document.getElementById("inputText").value = "";

}

const showAllData = (datas) => {
    displayContainer.innerHTML = "";
    calculate(datas);
    if (datas.length == 0) {
        displayContainer.innerHTML = "";
        calculate(datas);
        spinner(false)
        return;
    }
    // console.log(datas);
    datas.forEach(data => {
        const dataStatus = data.status;



        const div = document.createElement("div");
        div.innerHTML = `
            <div class=" bg-[#FFFFFF] py-5 space-y-3 ${dataStatus === "open" ? `shadow-[0_-3px_8px_rgba(34,197,94,0.5)]` : `shadow-[0_-3px_8px_rgba(168,85,247,0.5)]`} rounded-lg h-full">
                <div class="space-y-3 border-b border-[#777777]/30 px-5 ">
                    <div class="flex items-center justify-between">
                        ${dataStatus == "open" ? `<img src="./assets/Open-Status.png" alt="">` : `<img src="./assets/Closed- Status .png" alt="">`}
                        <p onclick="showDetails(${data.id})" class="text-[12px] cursor-pointer bg-${priorityColor(data.priority.toUpperCase())}-200 text-${priorityColor(data.priority.toUpperCase())}-700 px-3 py-1 rounded-full">${data.priority.toUpperCase()}</p>
                    </div>
                    <h1 class=" text-[14px] font-semibold ">${data.title}</h1>
                    <p class=" text-[12px] text-[#777777]">${data.description}</p>
                    <div class="flex items-center gap-3 pb-4 flex-wrap">
                        ${highLightWord(data.labels)}
                    </div>
                </div>
                <!-- <hr class="w-full text-[#777777]/20"> -->
                <div class="space-y-3 px-5">
                    <p class="text-[14px] text-[#777777]">#1 by john_doe</p>
                    <p class="text-[14px] text-[#777777]">1/15/2024</p>
                </div>
        `;
        displayContainer.appendChild(div);

        spinner(false);
    })
}

const priorityColor = (value) => {
    if (value === "HIGH") {
        return "red";
    } else if (value === "MEDIUM") {
        return "yellow";
    } else if (value === "LOW") {
        return "gray";
    }
}

const highLightWord = (arrs) => {
    const createElement = arrs.map(arr => `<span class="py-1 px-3 text-[12px] rounded-full bg-amber-200 text-black">${arr}</span>`)
    return createElement.join(" ");
}

const showDetails = (id) => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            leadDetails(data.data);
            console.log(data.data);
        })
}


const leadDetails = (data) => {
    const modalContainer = document.getElementById("modalContainer");
    modalContainer.innerHTML = `
    <div class=" space-y-3">
                        <div class="space-y-2">
                            <h1 class=" text-xl font-semibold">${data.title}</h1>
                            <p class="text-[12px] text-gray-400 "><span class=" bg-${data.status === "open" ? "green" : "red"}-600 p-1 rounded-full text-white ">${data.status === "open" ? "opened" : "closed"}</span> . Opened by Fahim Ahmed . 22/02/2026</p>
                        </div>
                        <div class="space-y-2">
                            <!-- lebal -->
                            ${highLightWord(data.labels)}
                        </div>
                        <p class="text-[14px] text-gray-400">${data.description}</p>
                        <div class=" grid grid-cols-2 gap-1.5 bg-gray-100 rounded-xl p-5">
                            <div class="space-y-2">
                                <p class="text-[14px] text-gray-400">Assignee:</p>
                                <h1 class=" text-lg font-semibold">${data.assignee}</h1>
                            </div>
                            <div class="space-y-2 flex flex-col items-start">
                                <p class="text-[14px] text-gray-400">Priority:</p>
                                <p class=" bg-${priorityColor(data.priority.toUpperCase())}-500 text-white rounded-full text-[12px] px-2 py-1">${data.priority.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>
    `;
    document.getElementById("my_modal_5").showModal();
}

const loadSearchData = (searchText) => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.data);
            showAllData(data.data)
        })
}



document.getElementById("searchBtn").addEventListener("click", () => {
    const inputTextValue = document.getElementById("inputText").value.trim();
    removeActive();
    loadSearchData(inputTextValue);
});




toggole("all-filter-btn");


