# Deployment

- Signup on AWS account
- Launch instance
- Create a pem file by AWS, it contains credentials

```bash
chmod 400 <secret>.pem
```

- Connected to machine using

```bash
ssh -i "devTinder-secret.pem" ubuntu@ec2-43-204-130-215.ap-south-1.compute.amazonaws.com
```

We are in the terminal of cloud machine

- Install Node version (Same as your current node version)
- GIT Clone (Frontend and Backend)
- ## Frontend:

```bash
npm install → Dependencies install

npm run build

sudo apt update

sudo apt install nginx

sudo systemctl start nginx

sudo systemctl enable nginx

-Copy code from dist folder (build files) to nginx http server (/var/www/html)

cd /var/www/html

// Go to frontend folder
sudo scp -r dist/* /var/www/html/

// Enable port :80 of your instance using security group
// add port as 80 and source as 0.0.0.0/0 there, it will accept all ports
```
