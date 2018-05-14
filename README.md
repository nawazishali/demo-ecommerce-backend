# demo-ecommerce-backend

A demo E-commerce backend build with Express.js

## How to run?

Please run the following commands.

1.  `npm install` in project root.
2.  `npm run dev` to run the project in watch mode.
3.  Server will be live on `http://localhost:3000`

## Device Routes

1.  `/device` GET, all devices.
2.  `/device` POST, new device.
3.  `/device/:deviceId` PUT, edit existing device.
4.  `/device/:deviceId` GET, find device by id.
5.  `/device/:deviceId` DELETE, delete device by id.

## Variant Routes

1.  `/variants` GET, all variants.
2.  `/variants` POST, new variant.
3.  `/variants/:deviceId` PUT, edit existing variant.
4.  `/variants/:deviceId` GET, find variant by id.
5.  `/variants/by_device/:deviceId` GET, find variants for specific devices id.
6.  `/variants/:deviceId` DELETE, delete variant by id.
