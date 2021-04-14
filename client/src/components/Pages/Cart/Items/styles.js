import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
      container: {
        width: '100%',
        marginTop: '6%',
        marginBottom: '0%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down('xs')]: {
            marginTop: '15%'
        }
    },
    title: {
        marginBottom: '2%',
        [theme.breakpoints.down('xs')]: {
            fontSize: '35px',
            marginBottom: '4%'
        }
    },
    image: {
        width: '30%',
        height: '200px'
    },
    button: {
        backgroundColor: '#f23a3a',
        color: 'white'
    }
}));