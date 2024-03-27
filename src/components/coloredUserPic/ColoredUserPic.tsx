import {useState} from "react";

type UserPicProps = {
    src: string,
    size: number,
    margin: number,
    backgroundColor: string,
    colors: string[],
    hoverColors: string[]
    colorWidth: number
}

const ColoredUserPic = ({backgroundColor, colorWidth, hoverColors, colors, margin, size, src}: UserPicProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            style={{
                display: 'inline-block',
                position: 'relative',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                style={{
                    width: size + margin * 2,
                    height: size + margin * 2,
                    borderRadius: '50%',
                    border: `${colorWidth}px solid transparent`,
                    background: `linear-gradient(180deg, ${isHovered ? hoverColors.join(', ') : colors.join(', ')})`,
                }}>

                <div
                    style={{
                        border: `${margin}px solid ${backgroundColor}`,
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src={src}
                        alt="User"
                        style={{
                            width: size,
                            height: size,
                            borderRadius: '50%',
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </div>
        </div>

    );
};

export default ColoredUserPic;