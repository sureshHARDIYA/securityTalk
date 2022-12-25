import {useEffect, useRef, useState} from "react";
import { Box, Text, Appear } from "spectacle";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import { MdFileCopy } from 'react-icons/md';
import Cookies from 'universal-cookie';

const TitleComponent = () => {
    const [title, setTile] = useState('green');
    const [value, copy] = useCopyToClipboard()

    const ref = useRef<any>();

    const handleSave = (color?: string ) => {
        if(ref?.current) {
            const inputColor = ref.current.value;
            setTile(inputColor);

            const backdrop = document.getElementById('backdrop');
            if(backdrop && (inputColor || color )) {
                const updatedColor = inputColor || color;
                backdrop.outerHTML = `<div id="backdrop" style="background-color: ${updatedColor}; width: 40%; height: 200px"></div>`;
            }
        }

        if(color) {
            setTile(color);
        }
    }

    useEffect(() => {
        const cookies = new Cookies();
        cookies.set('superSecretKey', 'mySuperSecretCode', { path: '/' });
    }, []);

    return (
        <Box padding="1em">
            <div id="backdrop" style={{ backgroundColor: 'green', width: '40%', height: '200px'}}></div>
            <Box>
             <input  name="title" ref={ref} placeholder="Enter Your favourite Color (red, blue, green, gold)" />
            <button onClick={() => handleSave()}>Update Color</button>
            </Box>
            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
            <Box>
                <button onClick={() => handleSave('red')}>Red</button>
                <button onClick={() => handleSave('green')}>Green</button>
            </Box>
            <Appear>
                <Box marginTop="1rem">
                    <MdFileCopy onClick={() => copy('"><img src="x" onerror="alert(document.cookie)" />')} color={'red'}></MdFileCopy>{value ? "copied": ''}
                    <textarea rows={4} cols={50} readOnly>
                        {'"><img src="x" onerror="alert(document.cookie)" />'}
                    </textarea>
                </Box>
            </Appear>
        </Box>
    )
}

export default TitleComponent