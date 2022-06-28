import { createVendiaClient } from '@vendia/client';
import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>Your app is running!!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>
  <p>Your Uni's blocks should load below once you've replaced the dummy apiUrl/apiKey with your Uni's values...</p>
`

const client = createVendiaClient({
  apiUrl: 'YOUR API URL',
  apiKey: 'YOUR API KEY'
});

client.blocks.list().then(data => {
  const pre = document.createElement('pre')
  pre.innerHTML = JSON.stringify(data, null, 2)
  document.querySelector('#app').appendChild(pre)
})
