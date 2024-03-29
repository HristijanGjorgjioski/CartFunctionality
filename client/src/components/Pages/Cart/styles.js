import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        marginTop: '7%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('xs')]: {
            marginTop: '16%'
        }
    },
    total: {
        marginTop: '1%',
        marginBottom: '4%'
    },
    button: {
        backgroundColor: '#f23a3a',
        color: 'white'
    },
    totalOrder: {
        marginTop: '15px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    }
}));