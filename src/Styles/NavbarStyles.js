import { alpha } from '@material-ui/core/styles'
const styles = theme => ({
    root: {
        width: "100%",
        marginBottom: 0
    },
    grow:{
        flexGrow:1
    },
    menuButton:{
        marginLeft: -12,
        marginRight: 20
    },
    title:{
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    serach: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        marginLeft:0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing.unit,
            width: "auto"
        }
    },
    searchIcon:{
        width: theme.spacing.unit * 9,
        height: "50%",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot:{
        color: "inherit",
        width: "100%"
    },
    inputInput:{
        paddingTop:theme.spacing.unit,
        paddingRight:theme.spacing.unit,
        paddingBottom:theme.spacing.unit,
        paddingLeft:theme.spacing.unit * 10,
        transition: theme.transitions.create("width"),
        width:"100%",
        [theme.breakpoints.up("sm")]:{
            width:120,
            "&:focus":{
                width:200
            }
        }
    }
});

export default styles;