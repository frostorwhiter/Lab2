function calculateKatet() {
    
    let hip = parseFloat(document.getElementById("hip").value);
    let kat = parseFloat(document.getElementById("kat").value);

    if (hip > 0 && kat > 0 && hip > kat ) {
        let katet = Number(Math.sqrt(Math.pow(hip, 2) - Math.pow(kat, 2)).toFixed(4));
        (isFinite(katet)) ? document.getElementById("result").innerText = "Катет: " + katet : alert("Ви ввели занадто велике число.");
    } else {
        alert("Ви помилились під час введення значення.\n Або ви ввели занадто велике значення катета \nПеревірте їх та повторіть спробу.");
    }
}