        const home = document.querySelector("#Home");
        // const projects = document.querySelector("#Projects");
        const hobbies = document.querySelector("#Hobbies");
        const git = document.querySelector("#Github");
        const homediv = document.querySelector("#home-section");
        const hobbiesdiv=document.querySelector("#hobbies");
        const booklink = document.querySelector("#book-link");
        const travellink=document.querySelector("#travel-link");

        travellink.addEventListener("click", (e)=>{
            home.style.color="#000000";
            // projects.style.color="#000000";
            hobbies.style.color="#FFFFFF";
            git.style.color="#000000";
            home.style.background="transparent";
            // projects.style.background="transparent";
            hobbies.style.background="purple";
            git.style.background="transparent";
            homediv.style.display="none";
            hobbiesdiv.style.display="flex";
            hobbiesdiv.style.transform="TranslateY(0%)";
        });

        booklink.addEventListener("click",(e)=>{
            home.style.color="#000000";
            // projects.style.color="#000000";
            hobbies.style.color="#FFFFFF";
            git.style.color="#000000";
            home.style.background="transparent";
            // projects.style.background="transparent";
            hobbies.style.background="purple";
            git.style.background="transparent";
            homediv.style.display="none";
            hobbiesdiv.style.display="flex";
            hobbiesdiv.style.transform="TranslateY(0%)";
        });

        home.addEventListener("click", (e)=>{
            e.preventDefault();
            home.style.color="#FFFFFF";
            // projects.style.color="#000000";
            hobbies.style.color="#000000";
            git.style.color="#000000";
            home.style.background="purple";
            // projects.style.background="transparent";
            hobbies.style.background="transparent";
            git.style.background="transparent";
            homediv.style.display="block";
            hobbiesdiv.style.display="none";
        });

        /*projects.addEventListener("click", (e) => {
            home.style.color="#000000";
            // projects.style.color="#FFFFFF";
            hobbies.style.color="#000000";
            git.style.color="#000000";
            home.style.background="transparent";
            // projects.style.background="purple";
            hobbies.style.background="transparent";
            git.style.background="transparent";
            homediv.style.display="none";
            hobbiesdiv.style.display="none";
        });*/

        hobbies.addEventListener("click", (e) => {
            home.style.color="#000000";
            // projects.style.color="#000000";
            hobbies.style.color="#FFFFFF";
            git.style.color="#000000";
            home.style.background="transparent";
            // projects.style.background="transparent";
            hobbies.style.background="purple";
            git.style.background="transparent";
            homediv.style.display="none";
            hobbiesdiv.style.display="flex";
            hobbiesdiv.style.transform="TranslateY(0%)";
        });

        git.addEventListener("click", (e) => {
            home.style.color="#000000";
            // projects.style.color="#000000";
            hobbies.style.color="#000000";
            git.style.color="#FFFFFF";
            home.style.background="transparent";
            // projects.style.background="transparent";
            hobbies.style.background="transparent";
            git.style.background="purple";
        });


