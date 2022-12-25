import ReactDiffViewer from 'react-diff-viewer';

const oldCode = `
const handleSave = (color?: string ) => {
    if(ref?.current) {
        const inputColor = ref.current.value;
        setTitle(inputColor);
        const backdrop = document.getElementById('backdrop');
        if(backdrop && (inputColor || color )) {
            const updatedColor = inputColor || color; 
            setTitle(updatedColor);
            backdrop.outerHTML = \`<div id="backdrop" style="background-color: $\{updatedColor}"></div>\`;
        }
    }
}

return (
    ... 
    <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
)
`;

const newCode = `
const handleSave = (color?: string ) => {
    if(ref?.current) {
        const inputColor = ref.current.value;
        setTitle(inputColor);
        const backdrop = document.getElementById('backdrop');
        if(backdrop && (inputColor || color )) {
            const updatedColor = inputColor || color; 
            setTitle(updatedColor);
            backdrop.style.backgroundColor = updatedColor;
        }
    }
}

return (
    ... 
    <h1>{title}</h1>
)
`;

const Solution1 = () => {
  return (
    <ReactDiffViewer
      oldValue={oldCode}
      newValue={newCode}
      splitView={true}
      highlightLines={['R-4', 'R-6']}
    />
  );
};

export default Solution1;
