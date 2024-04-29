const buttons = document.querySelectorAll("button")

const myH1 = document.getElementById("h1")

const clearBtn = document.getElementById("allclear")

const equalBtn = document.getElementById("equal")



equalBtn.addEventListener("click", function()
{
    //We need to write the logic to basically calculate the result
    myH1.innerText = eval(myH1.innerText)
})

function getData(data)//data = 3
{
    if(myH1.innerText === "0")
    {
        myH1.innerText = data
    }
    else
    {
        myH1.innerText = myH1.innerText + data
    }
}

function addDecimal()
{
    //Logic where decimal should be added for the first time only, if there is no decimal present in
    // the display

    if(!myH1.innerText.includes("."))
    {
        myH1.innerText = `${myH1.innerText}.`//78.
    }
}

buttons.forEach(function(btn)
{
    if(btn.classList.length == 0)
    {
        btn.addEventListener("click", function()
        {
             getData(btn.innerText)         
        })
    }
    else if(btn.classList.contains("operator"))
    {
        btn.addEventListener("click", function()
        {
            getData(btn.innerText)
        })
    }
    else if(btn.classList.contains("decimal"))
    {
        btn.addEventListener("click", function()
        {
           addDecimal()
        })
    }
})

clearBtn.addEventListener("click", function()
{
    //Logic to basically clear the complete data
    myH1.innerText = "0"
})