import { toast } from "react-toastify";

const flasher = (
  msg: string,
  type: "info" | "success" | "warning" | "error"
) => {
  if (msg && type) {
    toast[type](msg, {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  }
};

export { flasher };
