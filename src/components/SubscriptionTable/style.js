const tableContainer = {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem"
}

const table = {
    backgroundColor: "white",
    borderRadius: "1%/3%",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto",
    padding: "2rem",
    width: "800px",
    border: "2px black solid"
}

const cell = {
    borderBottom: "1px gray solid",
    padding: "1rem",
    textAlign: "center", 
    cursor: "pointer"
}

const headingCell = {
    ...cell,
    fontWeight: "700"
}

const firstCell = {
    fontWeight: "700",
    textAlign: "left"
}

const featuredCell = {
    backgroundColor: "orange",
    color: "white"
}

const SubscriptionTableStyle = {
    table,
    tableContainer,
    cell,
    firstCell,
    headingCell,
    featuredCell
}

export default SubscriptionTableStyle;