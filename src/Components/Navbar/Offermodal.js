import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Order from "./Order-now.jpeg";
import Deployer from "./cxdeployer.jpeg";
import "./Offer.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  return (
    <div className="offermodal">
      <Dialog
          id="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <a href="https://crozdesk.com/customer-service-crm/customer-experience-software/top-list" target="_blank" title="Top Customer Experience Software on Crozdesk 2020">
              <img src={Deployer} style={{ width: "100%" }} />
            </a>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
