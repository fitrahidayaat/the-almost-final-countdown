import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
    { targetTime, remainingTime, onReset },
    ref
) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },

            close() {
                dialog.current.close();
            },
        };
    });
    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your score: {score}</h2>}
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                Yout stopped the timer with{" "}
                <strong>{formattedRemainingTime} seconds left.</strong>
            </p>
            <button onClick={onReset}>Close</button>
        </dialog>,
        document.getElementById("modal")
    );
});

export default ResultModal;
