import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        marginTop: '6%',
        [theme.breakpoints.down('xs')]: {
            marginTop: '19%'
        }
    },
    mainGrid: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    itemGrid: {
        margin: '10px'
    }
}))