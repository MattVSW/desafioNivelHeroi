let nomeHeroi = ["Jason", "Robert", "Astolfo", "Rei"]
let XP = [30000, 9999, 659, 6578]
let nivel = ""

for(let i = 0; i < nomeHeroi.length; i++){


    if (XP[i] <= 1000){
    nivel = "Ferro"}
        
        else if (XP[i] > 1000 && XP[i] <= 2000){
            nivel = "Bronze"}
        

        else if (XP[i] > 2000 && XP[i] <= 5000){
            nivel = "Prata"}
        
        else if (XP[i] > 5000 && XP[i] <= 7000){
            nivel = "Ouro"}
        

        else if (XP[i] > 7000 && XP[i] <= 8000){
            nivel = "Platina"}
        

        else if (XP[i] > 8000 && XP[i] <= 9000){
            nivel = "Ascendente"}
        

        else if(XP[i] > 9000 && XP[i] <= 10000){
            nivel = "Imortal"}
        

        else{
            nivel = "Radiante"}

    let mensagem = "O heroi de nome " + nomeHeroi[i] + ", está no nivel " + nivel
    console.log(mensagem)
    }


