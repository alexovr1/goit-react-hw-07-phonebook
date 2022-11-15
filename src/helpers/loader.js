import { TailSpin } from 'react-loader-spinner'
// import "../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const loader = () => {
    return < TailSpin
        height="80"
        width="80"
        color="#6908c9"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
    />
}