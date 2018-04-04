import React from "react";

class Formulaire extends React.Component {

	state = {
		length: this.props.length
	}


	createMessage = event => {
		event.preventDefault();
		console.log(this.message.value);

		const message = {
			message: this.message.value,
			pseudo: this.props.pseudo

		}

		this.props.addMessage(message);

		//Reset la valeur dans le textarea
		this.messageForm.reset();
		const length = this.props.length;
		this.setState({length})
	};

	compteur = event => {
		const length = this.props.length - this.message.value.length
		this.setState({length});
	};


    render(){
        return (
            <form 
            className="form"
            onSubmit={e => this.createMessage(e)}
            ref={input => this.messageForm = input}
            >
                <textarea 
                 required
                 maxLength={this.props.length}
                 ref={input => this.message = input}
                 onChange={e => this.compteur(e)}
                 ></textarea>

                <div className="info">
					{this.state.length}
                </div>

                <button type="submit">Envoyer!</button>
            </form>
        )
    }
    //permet de verifier que l'on passe bien tous les props 
    static propsTypes = {
    	addMessage: React.PropTypes.func.isRequired
    };
}

export default Formulaire;