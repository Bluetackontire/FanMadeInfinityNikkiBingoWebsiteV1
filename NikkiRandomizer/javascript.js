function getRandomGoals(set)
{
    if (set != "true")
    {
        const boxId = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8",
                        "box9", "box10", "box11", "box12", "box14", "box15", "box16", "box17",
                        "box18", "box19", "box20", "box21", "box22", "box23", "box24", "box25"];
        const asked = [];
        num = randomNumber();

        for (let i=0; i<25; i++)
        {
            asked.push(num);
            document.getElementById(boxId[i]).innerHTML = getGoal(boxId[i], num);
            num = randomNumber();
            while (checkIfAsked(num, asked))
            {
                num = randomNumber();
            }
        }
    }
}

function randomNumber()
{
    return Math.floor(Math.random() * 63);
}

function changeBackgroundColor(id, color)
{
    if (document.getElementById(id).value == 'empty')
    {
        document.getElementById(id).style.backgroundColor = color;
        document.getElementById(id).value = color;
    }
    else if (document.getElementById(id).value == color)
    {
        document.getElementById(id).style.backgroundColor = 'transparent';
        document.getElementById(id).value = 'empty';
    }
}

function checkIfAsked(num, asked)
{
    for (let i=0; i<asked.length; i++)
    {
        if (asked[i] == num)
        {
            return true;
        }
    }
    return false;
}

function getColor()
{
    return document.querySelector('#colorPick').value;
}

function setGoals()
{
    document.querySelector('#button1').value = "true";
    document.getElementById('colorPick').disabled = true;
}

function startup()
{
    document.getElementById('colorPick').disabled = false;
}

window.onload = function()
{
    startup();
    getRandomGoals(false);
};

function getGoal(id, num)
{
    // Path to your external file (e.g., "data.txt")
    fetch("goals.txt")
      .then(response => response.text())
      .then(text => {
        // Split text into lines
        const lines = text.split("\n");

        // Get the random number line
        const firstLine = lines[num];

        // Assign it to the paragraph
        document.getElementById(id).innerHTML = firstLine;
      })
      .catch(error => console.error("Error loading file:", error));
 }


