import React from "react";

interface Props extends React.PropsWithChildren{
    type: "primary" | "success" | "danger" | "warning";
    onDismiss?: () => void;
    show: boolean;
};

const Alert: React.FC<Props> = ({ type, onDismiss, show, children }) => {
   const alertType = `alert alert-${type}`;

   return (
    <>
    {show && (
        <div className={`mt-5 d-flex justify-content-between ${alertType}`} role="alert">
            {children}
            {onDismiss && (
                <button
                type="button" 
                className="btn-close d-inline-block"
                onClick={onDismiss}
                >
                </button>
            )}
        </div>
    )}
    </>
   );
};

export default Alert;