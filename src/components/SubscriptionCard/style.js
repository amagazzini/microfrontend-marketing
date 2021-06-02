const card = {
    display: "flex",
    flexDirection: "column",
    flex: "0 0 150px",
    maxWidth: "100%",
    padding: "1.5rem 0.5rem",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "10%",
    margin: "2rem",
    cursor: "pointer",
}

const featuredCard = {
    ...card,
    backgroundColor: "orange",
    borderRadius: "10%",
    color: "white",
    fontWeight: "800"
}

const cardHeader = {
    marginBottom: "1rem",
    fontSize: "1rem",
    fontWeight: "700"
}

const cardBody = {
    fontSize: "1.5rem",
    marginBottom: "1rem"
}

const SubscriptionCardStyle = {
    card,
    featuredCard,
    cardHeader,
    cardBody
}

export default SubscriptionCardStyle;