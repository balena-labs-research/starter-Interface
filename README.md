# Balena device UI
A community-built starter user interface for using Balena devices. 

# Description
This project contains an ExpressJS web framework which provides a Quasar (Vue) interface to users. It also includes a Wi-Fi connect component allowing users to connect devices to nearby networks.

It is modular allowing contributions from the community and easier tracking of changes in your own projects. See the sections below for customising the interface.

# Adding components to your page
Pre-built components for adding to a page where contributions are encouraged: https://github.com/maggie0002/balena-device-ui/tree/main/ui/src/components

To add a component, import the component and add `<component-name />` where you require the component. An example insert of a hostname and ping component can be found here: https://github.com/maggie0002/balena-device-ui/blob/main/ui/src/pages/Settings.vue

Supervisor requests for interacting with the BalenaOS are stored here: https://github.com/maggie0002/balena-device-ui/blob/main/ui/src/axios/SupervisorRequests.ts. These are utilised in the components but can be used directly too.

# Adding custom endpoints
A backend for performing functions on the device is included. This is used to interact with the Balena supervisor. You can however, also add your own backend endpoints to interact with other peripherals or software here: https://github.com/maggie0002/balena-device-ui/blob/main/expressjs/src/routes/CustomRoutes.js

# Wi-Fi
The Wi-Fi component is maintained on a different repository: https://github.com/maggie0002/balena-py-wifi-connect. It is a backend for interacting with the Wi-Fi chip on devices, allowing searching for nearby connections, connecting to a network and disconnecting. It is integrated into this project by default but can be removed by deleting it from the docker-compose.yml file.

To use it, simply insert the component where you want it on your interface: `<wifi-connect />`

# Menu items
Changes to the menu items can be made through the `menuList` variable here: https://github.com/maggie0002/balena-device-ui/blob/main/ui/src/layouts/MainLayout.vue.

# Final thoughts

Apologies the documentation here is not better for beginner users. Community contributions to improving these would be very welcome. 