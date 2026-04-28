const fs = require('fs');

const content = fs.readFileSync('js/elements.js', 'utf8');
const lines = content.split('\n');

const newLines = lines.map(line => {
    const match = line.match(/\{\s*number:(\d+),.*group:(\d+),/);
    if (match && line.includes('atomicMass:')) {
        const num = parseInt(match[1]);
        const group = parseInt(match[2]);
        
        let val = 0;
        if (num === 2) val = 2; // Helium
        else if (group === 1) val = 1;
        else if (group === 2) val = 2;
        else if (group >= 13 && group <= 18) val = group - 10;
        else val = 2; // Transition metals and others
        
        const newProps = `valenceElectrons:${val}, `;
        return line.replace('atomicMass:', newProps + 'atomicMass:');
    }
    return line;
});

fs.writeFileSync('js/elements.js', newLines.join('\n'));
console.log('Successfully added valenceElectrons to js/elements.js!');
