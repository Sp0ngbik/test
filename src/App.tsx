import ColoredUserPic from "./components/coloredUserPic/ColoredUserPic.tsx";
import imgSrc from './assets/photo_2022-11-02_23-02-14.jpg'

function App() {

    return (
        <>
            <ColoredUserPic src={imgSrc} size={250} margin={4} backgroundColor={'blue'}
                            colors={['pink', 'black']}
                            hoverColors={['blue', 'yellow']}
                            colorWidth={15}/>
        </>
    )
}

export default App
