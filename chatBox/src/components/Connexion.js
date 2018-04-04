import React from "react";

class Connexion extends React.Component {

    goToChat = event => {
        event.preventDefault();
        //recuperer le pseudo de l'input
        const pseudo = this.pseudoInput.value;
        this.context.router.transitionTo(`/pseudo/${pseudo}`);
    };


    render(){
        return (
            <div className="connexionBox" onSubmit={(e) => this.goToChat(e)}>
                <form className="connexion">
                    <input 
                    type="text" 
                    placeholder="Pseudo" 
                    required
                    ref={(input) => this.pseudoInput = input}
                    />
                    <button type="submit">GO</button>
                </form>
            </div>
        )
    }
    //permet de creer le router permettant de faire la route pour aller vers une autre URL 
    static contextTypes = {
        router: React.PropTypes.object
    }
}



export default Connexion;