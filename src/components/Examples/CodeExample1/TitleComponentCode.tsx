import { Box, CodePane } from 'spectacle';

import codeTheme from '../codeTheme';

const TitleComponentCode = () => {
  return (
    <Box>
      <CodePane
        language="tsx"
        theme={codeTheme as any}
        highlightRanges={[[18, 21], 3, [5, 7], [9, 10], 11]}
      >
        {`  
                    const [title, setTitle] = useState('green'); const ref = useRef<any>();
                
                    const handleSave = (color?: string ) => {
                        if(ref?.current) {
                            const inputColor = ref.current.value;
                            setTitle(inputColor);
                            const backdrop = document.getElementById('backdrop');
                            if(backdrop && (inputColor || color )) {
                                setTitle(inputColor || color);
                                backdrop.outerHTML = \`<div id="backdrop" style="background-color: $\{updatedColor}"></div>\`;
                            }
                        }
                    }
                    
                    return (
                        <>
                            <div id="backdrop" style={{ backgroundColor: 'green', width: '40%', height: '200px'}}></div>
                            <button onClick={() => handleSave()}>Update Color</button>
                            <input  name="title" ref={ref} placeholder="Enter Your favourite Color" />
                            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
                            <button onClick={() => handleSave('red')}>Red</button>
                        </>
                    )
               `}
      </CodePane>
    </Box>
  );
};

export default TitleComponentCode;
