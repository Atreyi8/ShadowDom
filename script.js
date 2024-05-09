class VotingComponent extends HTMLElement{
    constructor(){
        super();
        // To Create Show DoM , we first need Shadow Root
        // shadow root is created by attachShadow Method , which takes an option object as an parameter
        //Options object will only have this one option which is mode , values can be open or closed
        // open value - shadowroot instance is accessible via JS
        //closed value - no access
        const shadowRoot = this.attachShadow({mode:"closed"})
        this.votes = 0


        const wrapper = document.createElement("div")
        wrapper.setAttribute("class", "wrapper")

        const voteBtn = document.createElement("button")
        voteBtn.setAttribute("id", "vote_btn")
        voteBtn.addEventListener("click", this.vote.bind(this));


        const voteImg = document.createElement("img")
        voteImg.src = "./vote.png"
        voteBtn.appendChild(voteImg)

        const voteCount = document.createElement("span")
        voteCount.setAttribute("id", "vote_count")
        voteCount.innerText = this.votes;

        // We need to attach stylesheet to shadowDom because
        // because style rules from the outer DOM will not get apply to shadow dom

        const styleSheet = document.createElement("link")
        styleSheet.setAttribute("rel", "stylesheet")
        styleSheet.setAttribute("href", "styles.css")

        shadowRoot.appendChild(styleSheet)
        shadowRoot.appendChild(wrapper)
        wrapper.appendChild(voteBtn)
        wrapper.appendChild(voteCount)
        


        
    }
  
    vote(){
        console.log("vote_count element:", this.shadowRoot);
        this.shadowRoot.getElementById("vote_count").innerText = ++this.votes
    }
}

// To define this cutom component , we make use of custom elements registry

customElements.define("voting-component",VotingComponent)


