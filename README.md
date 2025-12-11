**Name:** Xander Sorensen

**Project:** Arc Raiders Field Guide

**Deployed Project:** xsorense@csse.calpoly.dev

**Data Source:** https://metaforge.app/arc-raiders/api

[Arc Raiders](https://arcraiders.com/) is a new video game in which players brave the hostile Earth's surface populated only 
with deadly robots and other raiders. While on the surface, raiders must scavenge appartment buildings, sand buried towns, 
and water treatment facilities while avoiding being taken out by the surface robots or even other players. The game is very 
focused on the items you collect. However, because there are so many items to collect that are often useless after you have
used them for their intended purpose, it can be difficult to keep track of which ones are important. Also, seemlingly 
innccuous items like the "Rusted Gear" appear useless until they are needed to upgrade your workstation. This website 
seeks to supply a helpful interface that provides quick item filtering along with item tracking in the future. Currently, all home page 
content links lead to the /app/items page where you can view all items in the game, or filter them down to a more manageable list.

# Running Instructions
1. Clone the repository

        # HTTPS
        git clone https://github.com/XSorensen/CSC-437-Project.git

        # SSH
        git clone git@github.com:XSorensen/CSC-437-Project.git

2. Install dependencies

        # Starting in root directory
        cd /packages/server
        npm install

        cd ../app
        npm install

3. Build Html pages

        # In /packages/app
        npm run build

4. Create .env file in /packages/server

        # Mongo Database Information
        MONGO_USER=
        MONGO_PWD=
        MONGO_CLUSTER=

        # Authentication Information
        JWT_TOKEN_SECRET=

5. Run server

        # In /packages/server
        npm run start:app

6. Access Application

    Your application should now be accessable at http://localhost:3000

# Data Attribution
All information in this website was sourced from MetaForge's public Arc Raders Api. This website would not
be possible without the hard work of the MetaForge community.

**MetaForge Arc Raiders API Documentation:** https://metaforge.app/arc-raiders/api