function Logo({image,alt}) {
    return (
        <>
            <img
                className=" w-28 h-48  rounded-xl py-10 bg-white"
                src={image}
                alt={alt}
            />
        </>
    );
}

export default Logo;