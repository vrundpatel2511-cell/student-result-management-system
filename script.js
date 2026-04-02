function calculateResult() {

    let name = document.getElementById("name").value;

    let sub1 = document.getElementById("sub1name").value;
    let m1 = parseInt(document.getElementById("sub1marks").value);

    let sub2 = document.getElementById("sub2name").value;
    let m2 = parseInt(document.getElementById("sub2marks").value);

    let sub3 = document.getElementById("sub3name").value;
    let m3 = parseInt(document.getElementById("sub3marks").value);

    let total = m1 + m2 + m3;
    let percentage = total / 3;

    let result;
    if (percentage >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    document.getElementById("result").innerText =
        name + "\n\n" +
        sub1 + ": " + m1 + "\n" +
        sub2 + ": " + m2 + "\n" +
        sub3 + ": " + m3 + "\n\n" +
        "Percentage = " + percentage.toFixed(2) + "%\n" +
        "Result = " + result;
}