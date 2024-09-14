import Image from "next/image";

export default function Home() {
    return (
        <main className=" [ wrapper flow ] [ bg-card padding-24  br-big ]">
            <a href="/" className=" [ main_img ]  [ br-small ] ">
                <Image
                    src="/images/image-equilibrium.jpg"
                    alt=" "
                    fill
                    sizes="350px"
                    priority
                />
            </a>

            <h1 className=" [ visually-hidden ] "> An overview of the board</h1>

            <a
                href="/"
                className=" [ link  ] [ animation ][ fs-large  fw-600   light-clr ] "
            >
                Equilibrium #3429
            </a>

            <p>Our Equilibrium collection promotes balance and calm.</p>
            <div className="[ flow-flex ] [ fw-400 ] ">
                <p className=" accent-clr ">
                    <span>
                        <svg
                            width="11"
                            height="18"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                                fill="#00FFF8"
                            />
                        </svg>
                    </span>
                    0.041 ETH
                </p>
                <p>
                    <span>
                        <svg
                            width="17"
                            height="17"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                                fill="#8BACD9"
                            />
                        </svg>
                    </span>
                    3 days left
                </p>
            </div>

            <hr className="hr-line bg-line" />

            <div className="author_info [ flow-flex ]">
                <div>
                    <Image
                        className=" br-circle"
                        src="/images/image-avatar.png"
                        alt="a picture of the author"
                        width={35}
                        height={35}
                    />
                </div>
                <p>
                    Creation of{" "}
                    <a
                        href="/"
                        className=" [ link ] [ animation ] [ light-clr ] "
                    >
                        Jules Wyvern
                    </a>
                </p>
            </div>
        </main>
    );
}
