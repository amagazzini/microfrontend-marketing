import colors from './colors';

const blueBackground = {
    backgroundColor: colors.primaryBlue
}

const pageContainer = {
    marginTop: "5%",
    display: "flex",
    flexDirection: "column",
    font: "400 14px 'Montserrat', sans-serif",
    justifyContent: "center"
}

const centerContainer = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
}

const imageContainer = {
    display: "flex",
    justifyContent: "center"
}

const descriptionContainer = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    margin: "2rem auto",
    fontSize: "1rem",
    lineHeight: "2.5rem",
    color: "white"
}

const logoImage = {
    width: "200px"
}

const button = {
    fontSize: "1rem",
    width: "100px",
    border: "none",
    padding: "0.5rem",
    margin: "0.5rem",
    borderRadius: "5%/10%",
    cursor: "pointer",
    color: "white"
}

const green = {
    backgroundColor: "green",
}

const orange = {
    backgroundColor: "orange"
}

const commonStyle = {
    pageContainer,
    centerContainer,
    imageContainer,
    descriptionContainer,
    logoImage,
    button,
    green,
    orange,
    blueBackground
}

export default commonStyle;