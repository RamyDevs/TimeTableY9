

submit = document.getElementById('submit')
input = null

sundayap1 = document.querySelector("#sundayA .p1")
sundayap2 = document.querySelector("#sundayA .p2")
sundayap3 = document.querySelector("#sundayA .p3")
sundayap4 = document.querySelector("#sundayA .p4")
sundayap5 = document.querySelector("#sundayA .p5")

mondayap1 = document.querySelector("#mondayA .p1")
mondayap2 = document.querySelector("#mondayA .p2")
mondayap3 = document.querySelector("#mondayA .p3")
mondayap4 = document.querySelector("#mondayA .p4")
mondayap5 = document.querySelector("#mondayA .p5")

tuesdayap1 = document.querySelector("#tuesdayA .p1")
tuesdayap2 = document.querySelector("#tuesdayA .p2")
tuesdayap3 = document.querySelector("#tuesdayA .p3")
tuesdayap4 = document.querySelector("#tuesdayA .p4")
tuesdayap5 = document.querySelector("#tuesdayA .p5")

wednesdayap1 = document.querySelector("#wednesdayA .p1")
wednesdayap2 = document.querySelector("#wednesdayA .p2")
wednesdayap3 = document.querySelector("#wednesdayA .p3")
wednesdayap4 = document.querySelector("#wednesdayA .p4")
wednesdayap5 = document.querySelector("#wednesdayA .p5")

thursdayap1 = document.querySelector("#thursdayA .p1")
thursdayap2 = document.querySelector("#thursdayA .p2")
thursdayap3 = document.querySelector("#thursdayA .p3")
thursdayap4 = document.querySelector("#thursdayA .p4")
thursdayap5 = document.querySelector("#thursdayA .p5")

sundaybp1 = document.querySelector("#sundayB .p1")
sundaybp2 = document.querySelector("#sundayB .p2")
sundaybp3 = document.querySelector("#sundayB .p3")
sundaybp4 = document.querySelector("#sundayB .p4")
sundaybp5 = document.querySelector("#sundayB .p5")

mondaybp1 = document.querySelector("#mondayB .p1")
mondaybp2 = document.querySelector("#mondayB .p2")
mondaybp3 = document.querySelector("#mondayB .p3")
mondaybp4 = document.querySelector("#mondayB .p4")
mondaybp5 = document.querySelector("#mondayB .p5")

tuesdaybp1 = document.querySelector("#tuesdayB .p1")
tuesdaybp2 = document.querySelector("#tuesdayB .p2")
tuesdaybp3 = document.querySelector("#tuesdayB .p3")
tuesdaybp4 = document.querySelector("#tuesdayB .p4")
tuesdaybp5 = document.querySelector("#tuesdayB .p5")

wednesdaybp1 = document.querySelector("#wednesdayB .p1")
wednesdaybp2 = document.querySelector("#wednesdayB .p2")
wednesdaybp3 = document.querySelector("#wednesdayB .p3")
wednesdaybp4 = document.querySelector("#wednesdayB .p4")
wednesdaybp5 = document.querySelector("#wednesdayB .p5")

thursdaybp1 = document.querySelector("#thursdayB .p1")
thursdaybp2 = document.querySelector("#thursdayB .p2")
thursdaybp3 = document.querySelector("#thursdayB .p3")
thursdaybp4 = document.querySelector("#thursdayB .p4")
thursdaybp5 = document.querySelector("#thursdayB .p5")

currentList = null

function getList(name){
    if (name.toLowerCase() === "yahya")
    {
        currentList = YahyaK
    }
    else if (name.toLowerCase() === "yehia")
    {
        currentList = YehiaE
    }
    else if (name.toLowerCase() === "ramy")
    {
        currentList = RamyW
    }
    else if(name.toLowerCase() === "adam")
    {
        currentList = AdamE
    }
    else if(name.toLowerCase() === "louay")
    {
        currentList = LouayE
    }
    else if(name.toLowerCase() === "abdallah")
    {
        currentList = AbdallahS
    }
    else if(name.toLowerCase() === "seif")
    {
        currentList = SeifA
    }
    else if(name.toLowerCase() === "sherif")
    {
        currentList = SherifN
    }
    else if(name.toLowerCase() === "alber")
    {
        currentList = AlberG
    }
    else if(name.toLowerCase() === "ali")
    {
        currentList = AliF
    }
}

function getBlocks(list){
    blockA = list[0]
    blockB = list[1]
    blockC = list[2]
    blockD = list[3]
    blockE = list[4]
    blockF = list[5]
    p1= list[6]
    p2=list[7]
    //console.log(blockA,blockB,blockC,blockD,blockE,blockF,p1,p2)
    
    sundaytA = [blockD,blockF,p1,blockE,blockB]
    mondaytA = ["PE", blockB,p2,"Arabic",blockC]
    tuesdaytA = [blockE,blockA,p1,blockB,blockC]
    wednesdaytA = [p1,"Arabic", blockE, blockD,p2]
    thursdaytA = [blockA,"PE",p2,blockC,blockF]
    sundaytB = [blockE,blockB,p1,blockD,p2]
    mondaytB = [blockA,blockF, blockC, "Arabic", blockD]
    tuesdaytB = [blockB,blockA,blockF,"PE", blockE]
    wednesdaytB = ["Arabic", blockC, p2, "HRCF", p1]
    thursdaytB = [p1, p2, blockF, blockD, blockA]
}

function fillTimeTable(){
    sundayap1.textContent=sundaytA[0]
    sundayap2.textContent=sundaytA[1]
    sundayap3.textContent=sundaytA[2]
    sundayap4.textContent=sundaytA[3]
    sundayap5.textContent=sundaytA[4]

    mondayap1.textContent=mondaytA[0]
    mondayap2.textContent=mondaytA[1]
    mondayap3.textContent=mondaytA[2]
    mondayap4.textContent=mondaytA[3]
    mondayap5.textContent=mondaytA[4]

    tuesdayap1.textContent=tuesdaytA[0]
    tuesdayap2.textContent=tuesdaytA[1]
    tuesdayap3.textContent=tuesdaytA[2]
    tuesdayap4.textContent=tuesdaytA[3]
    tuesdayap5.textContent=tuesdaytA[4]

    wednesdayap1.textContent=wednesdaytA[0]
    wednesdayap2.textContent=wednesdaytA[1]
    wednesdayap3.textContent=wednesdaytA[2]
    wednesdayap4.textContent=wednesdaytA[3]
    wednesdayap5.textContent=wednesdaytA[4]

    thursdayap1.textContent=thursdaytA[0]
    thursdayap2.textContent=thursdaytA[1]
    thursdayap3.textContent=thursdaytA[2]
    thursdayap4.textContent=thursdaytA[3]
    thursdayap5.textContent=thursdaytA[4]

    sundaybp1.textContent=sundaytB[0]
    sundaybp2.textContent=sundaytB[1]
    sundaybp3.textContent=sundaytB[2]
    sundaybp4.textContent=sundaytB[3]
    sundaybp5.textContent=sundaytB[4]

    mondaybp1.textContent=mondaytB[0]
    mondaybp2.textContent=mondaytB[1]
    mondaybp3.textContent=mondaytB[2]
    mondaybp4.textContent=mondaytB[3]
    mondaybp5.textContent=mondaytB[4]

    tuesdaybp1.textContent=tuesdaytB[0]
    tuesdaybp2.textContent=tuesdaytB[1]
    tuesdaybp3.textContent=tuesdaytB[2]
    tuesdaybp4.textContent=tuesdaytB[3]
    tuesdaybp5.textContent=tuesdaytB[4]

    wednesdaybp1.textContent=wednesdaytB[0]
    wednesdaybp2.textContent=wednesdaytB[1]
    wednesdaybp3.textContent=wednesdaytB[2]
    wednesdaybp4.textContent=wednesdaytB[3]
    wednesdaybp5.textContent=wednesdaytB[4]

    thursdaybp1.textContent=thursdaytB[0]
    thursdaybp2.textContent=thursdaytB[1]
    thursdaybp3.textContent=thursdaytB[2]
    thursdaybp4.textContent=thursdaytB[3]
    thursdaybp5.textContent=thursdaytB[4]
}

submit.addEventListener("click", () => {
    input = document.getElementById("input").value
    getList(input)
    getBlocks(currentList)
    fillTimeTable()
})




