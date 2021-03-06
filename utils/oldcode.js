

let server =  {
    server_name portfolio.ultrenostimesheets-api.ca www.portfolio.ultrenostimesheets-api.ca;
  
    location / {
        proxy_pass http://localhost:5000; #whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}  
