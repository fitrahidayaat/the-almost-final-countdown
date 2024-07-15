export default function ResultModal({ result, targetTime }) {
    return (
        <dialog className="result-modal">
            <h2>You {result}</h2>
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                Yout stopped the timer with <strong>X seconds left.</strong>
            </p>
            <form action="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}
