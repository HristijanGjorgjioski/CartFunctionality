import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        backgroundColor: '#f23a3a',
        width: '100%',
    },
    text: {
        color: 'black',
        textDecoration: 'none',
        alignItems: 'center'
    },
    link: {
        color: 'white',
        fontFamily: 'bold',
        fontSize: '24px',
        textDecoration: 'none'
    },
    cartIcon: {
        justify: 'flexEnd',
    }
}))