import React, {useContext, useState} from "react";
//////////////////////////////////////////
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
///////////////////////////////////////////
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import store, {AppStateContext} from "../store/store";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const styletest = {
    width: "100%",
    height: "20px",

}

function Header() {

    //////////////////////////////////////////////
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //////////////////////////////////////////////
    // const [item,setItem]=useState();
    let {items} = useContext(AppStateContext)
    // console.log('teedade mahsolat ::::',items.length)
    // let result = hook;
    // const clickHandler = () =>{
    //     hook.setAppState({cartOpen:true})
    // }
    ///////////////////////////////////////////////
    // const {items}=useContext(store);
    // console.log('data :', useContext(AppStateContext));
    // console.log(typeof hook)
    return (
        <header>
            <div className={'logo'}>
                <ShoppingCartOutlinedIcon onClick={handleOpen} className={"logo-img"}/>
                <span>{items.length}</span>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Your choices
                        </Typography>
                        {items.map((v, index) => (
                            <Typography id={`modal-modal-description`} sx={{mt: 5}} key={index}>
                                {v.name + "         "}
                                {'   ' + v.price}
                            </Typography>
                        ))}

                    </Box>
                </Modal>
            </div>
            <div>shoping</div>
        </header>
    )

}

export default Header;