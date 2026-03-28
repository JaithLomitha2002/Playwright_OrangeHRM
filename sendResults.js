const axios = require('axios');
const fs = require('fs');

async function sendResults() {
    const filePath = 'test-results/results.json';
    
    let data;
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        data = JSON.parse(fileContent);
        
        console.log('✅ Successfully read results.json');
        console.log('   Stats found:', !!data.stats);
        if (data.stats) {
            console.log('   Expected tests :', data.stats.expected);
            console.log('   Skipped        :', data.stats.skipped);
            console.log('   Unexpected     :', data.stats.unexpected);
            console.log('   Duration (ms)  :', data.stats.duration);
        }
    } catch (err) {
        console.error('❌ Error reading results.json →', err.message);
        return;
    }

    try {
        await axios.post('http://localhost:5678/webhook/test-results', data);
        console.log('✅ Results successfully sent to n8n');
    } catch (err) {
        console.error('❌ Error sending to n8n →', err.message);
    }
}

sendResults();