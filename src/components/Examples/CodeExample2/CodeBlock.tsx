import { Box, CodePane, Heading } from 'spectacle';

import codeTheme from '../codeTheme';

const CodeBlock = () => {
  return (
    <Box>
      <Heading>Pop Quiz -1 </Heading>
      <CodePane
        language="tsx"
        theme={codeTheme as any}
        highlightRanges={[[18, 21], 3, [5, 7], [9, 10], 11]}
      >
        {`  
            const handleSearch = (events: any) => {
            events.preventDefault();

            const search: any = document.getElementById(
            'default-search',
            );
            const results = document.getElementById('results');
            if (search && results) {
                results.innerHTML =
                    'You searched for: ' + search?.value;
                }
            };             
        `}
      </CodePane>
    </Box>
  );
};

export default CodeBlock;
