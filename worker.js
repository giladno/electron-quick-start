self.addEventListener('message', ({data})=>{
    console.log('worker:', data);
    postMessage('pong');
}, false);

postMessage('init');
