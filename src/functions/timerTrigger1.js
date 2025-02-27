const { app } = require('@azure/functions');

app.timer('timerTrigger1', {
    schedule: '0 */1 * * * *',  // Runs every 1 minute
    handler: async (myTimer, context) => {
        const timestamp = new Date().toISOString();
        context.log(` Timer Trigger Executed at: ${timestamp}`);
        
        if (myTimer.isPastDue) {
            context.log('⏳ Timer function is running late!');
        }
    }
});
