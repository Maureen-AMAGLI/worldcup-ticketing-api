import { Hono } from 'hono'

export const app = new Hono();


app.get('/', (c) => {
    
    return c.json({
    success: true,
    message:process.env.API_NAME
});
});

app.get('/health', (c) =>  {
return c.json({
    success: true,
    status: 200,
    message: process.env.API_NAME
    uptime : process.uptime(),
    environment : process.env.NODE_ENV ||'developement',
    


})
})
export {app}


