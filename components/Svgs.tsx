import { ForwardStyles } from "../utils/common"

export function Wave(props: ForwardStyles) {
    return (
        <svg
            {...props}
            width="1003"
            height="48"
            viewBox="0 0 1003 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.54065 24.2572C34.874 -5.74277 68.2073 -5.74277 101.541 24.2572C134.874 54.2572 168.207 54.2572 201.541 24.2572C234.874 -5.74277 268.207 -5.74277 301.541 24.2572C334.874 54.2572 368.207 54.2572 401.541 24.2572C434.874 -5.74277 468.207 -5.74277 501.541 24.2572C534.874 54.2572 568.207 54.2572 601.541 24.2572C634.874 -5.74277 668.207 -5.74277 701.541 24.2572C734.874 54.2572 768.207 54.2572 801.541 24.2572C834.874 -5.74277 868.207 -5.74277 901.541 24.2572C934.874 54.2572 968.207 54.2572 1001.54 24.2572"
                strokeWidth="2"
            />
        </svg>
    )
}

export function Triangle(props: ForwardStyles) {
    return (
        <svg
            {...props}
            width="146"
            height="126"
            viewBox="0 0 146 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.78015 120.5L73 11L136.22 120.5H9.78015Z"
                stroke="white"
                strokeWidth="11"
            />
        </svg>
    )
}
