export default (props) => {
    const aleatorio = parseInt(Math.random() * (props.maximo - props.minimo) + props.minimo)

    return (
        <div>Numero gerado aleatório entre os números {props.minimo} e {props.maximo}: {aleatorio}</div>
    )
}