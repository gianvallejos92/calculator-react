const Screen = ({screenValue}) => {
    return (
        <div className="h-28 flex justify-end items-end text-4xl pr-2 pb-2 text-white break-all text-right" style={{backgroundColor: "#272827"}}>
            {screenValue}
        </div>
    )
}

export default Screen;
