import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    navbar: {
        backgroundColor: '#aaa',
        '& a': {
            color: '#000',
            marginLeft: 10,
        },
    },
}), {index: 1});

export default useStyles;
