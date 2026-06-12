function media(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var n3 = document.getElementById("n3").valueAsNumber
    var resp = document.getElementById("respMedia")

    resp.textContent = (n1 + n2 + n3)/3
}