import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function notifyWarning(text) {
    return toast.error(`${text}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

export function notifySuccess(text) {
    return toast.success(`${text}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}