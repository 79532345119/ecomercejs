import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(()=> ({
    root: {
        maxWidth:"100%",
        height:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    media: {
        height: 0,
        paddingTop: "200%"
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "1rem"
    },
    cardActions: {
        display: "flex",
        justifyContent: "flex-end"
    }
}))