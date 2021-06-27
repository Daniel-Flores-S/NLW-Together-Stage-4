import CopImg from "assets/images/copy.svg";

export function RoomCode() {
    return (
        <button>
            <div className="room-code">
                <img
                    src={CopImg}
                    alt="Code"
                />
                <span>
                    Sala #3223232
                </span>
            </div>
        </button>
    );
}
