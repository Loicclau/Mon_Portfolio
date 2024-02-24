/* code carrousel SN-BOT */
document.body.onload=function(){
    nbr=4;
    p=0;
    container_image1=document.getElementById("container_image1");
    g=document.getElementById("g");
    d=document.getElementById("d");
    container_image1.style.width=(442*nbr)+"px";


    // Créer la balise vidéo
    videoDiv = document.createElement("div");
    videoDiv.className = "photo";
    video = document.createElement("video");
    video.src = "vid/VideoProjetSN-BOT.mp4"; 
    video.loop = true; // Ajouter l'attribut loop
    video.muted = true; // Ajouter l'attribut muted
    video.autoplay = true; // Ajouter l'attribut autoplay
    videoDiv.appendChild(video);
    container_image1.appendChild(videoDiv);

    for (i = 1; i <= nbr; i++) { 
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('img/ProjectSNBOT" + i + ".png')";
        container_image1.appendChild(div);
    }
    afficherMasquer();

    /* code carrousel SN-BOT*/
    nbr2=3;
    p2=0;
    container_image2=document.getElementById("container_image2");
    g2=document.getElementById("g2");
    d2=document.getElementById("d2");
    container_image2.style.width=(442*nbr2)+"px";

    // Créer la balise vidéo
    videoDiv2 = document.createElement("div");
    videoDiv2.className = "photo"; 
    video2 = document.createElement("video");
    video2.src = "vid/Projet Playeur RUN.mp4"; 
    video2.loop = true; // Ajouter l'attribut loop
    video2.muted = true; // Ajouter l'attribut muted
    video2.autoplay = true; // Ajouter l'attribut autoplay
    videoDiv2.appendChild(video2);
    container_image2.appendChild(videoDiv2);

    for(i=1;i<=nbr2;i++){
        div2=document.createElement("div2");
        div2.className="photo";
        div2.style.backgroundImage="url('img/JeuImg"+i+".png')"; //a changerr
        container_image2.appendChild(div2);
    }
    afficherMasquer2();
} 
/* fin de onload */


d.onclick=function(){
    if(p>-nbr+1)
        p--;
    container_image1.style.transform="translate("+p*442+"px)";
    container_image1.style.transition="all 0.5s ease";
    afficherMasquer();
}
g.onclick=function(){
    if(p<0)
        p++;
    container_image1.style.transform="translate("+p*442+"px)";
    container_image1.style.transition="all 0.5s ease";
    afficherMasquer();
}

function afficherMasquer(){
    if(p==0)
        g.style.visibility="hidden";
    else
        g.style.visibility="visible";

    if(p==-nbr+1)
        d.style.visibility="hidden";
    else
        d.style.visibility="visible";
}

d2.onclick=function(){
    if(p2>-nbr2+1)
        p2--;
    container_image2.style.transform="translate("+p2*442+"px)";
    container_image2.style.transition="all 0.5s ease";
    afficherMasquer2();
}
g2.onclick=function(){
    if(p2<0)
        p2++;
    container_image2.style.transform="translate("+p2*442+"px)";
    container_image2.style.transition="all 0.5s ease";
    afficherMasquer2();
}

function afficherMasquer2(){
    if(p2==0)
        g2.style.visibility="hidden";
    else
        g2.style.visibility="visible";

    if(p2==-nbr2+1)
        d2.style.visibility="hidden";
    else
        d2.style.visibility="visible";
}

