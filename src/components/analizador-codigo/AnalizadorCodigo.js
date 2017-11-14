import React from 'react';

import Loading from '../loading/Loading';
import ContentHtml from '../content-html/ContentHtml';
import ApiRest from '../../utils/ApiRest';



class AnalizadorCodigo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            textAreaCodigo: '',
            contentHtml: '',
            showSpiner: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event) {

        if (this.state.textAreaCodigo.trim().length > 0) {
            this.setState({ showSpiner: true });
            this.onAnalizarCodigo(this.state.textAreaCodigo);
        } else {
            alert("Por favor escriba una linea de codigo");
        }

    }


    handleChange(event) {
        this.setState({ textAreaCodigo: event.target.value });

    }

    onAnalizarCodigo(data) {
        ApiRest.analizadorCodigo(JSON.stringify({ codigo: data }))
            .then(response => {
                this.setState({ showSpiner: false });
                if (response.status === 200) {
                    this.setState({ contentHtml: '' });
                    setTimeout(() => {
                        this.setState({ contentHtml: response.data.codigo });
                    }, 500);

                } else {
                    alert("Ocurrio un inconveniente intentente nuevamente!")
                }

            })
            .catch(e => {
                this.setState({ showSpiner: false });
                alert("Ocurrio un inconveniente intentente nuevamente!")
            })

    }

    render() {
        return (
            <div >

                <div>
                    <h5 class="center-align">Escriba su código!</h5>
                </div>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <textarea id="textareaIn" value={this.state.textAreaCodigo} onChange={this.handleChange} class="materialize-textarea"></textarea>
                                <label for="textareaIn">Código</label>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="row">
                    <p class="center-align">
                        <a onClick={this.handleClick} class="waves-effect waves-light btn-large red">Enviar</a>
                    </p>
                </div>

                <div>
                    <h5 class="center-align">Resultado!</h5>
                </div>

                <Loading showSpiner={this.state.showSpiner} />

                <ContentHtml text={this.state.contentHtml} />

            </div>
        );
    }
}

export default AnalizadorCodigo