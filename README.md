1. Create a `.env` file at project root:

   ```
   MAINNET_NODE_URL=https://mainnet.infura.io/v3/insert_api_key_here
   PRIV_KEY=0x0000000000000000000000000000000000000000000000000000000000000000
   ```

   Of course fill out the items above with an actual private key (any will do) as well as an actual API key for infura (or URL to other node)

2. Run `npm start` to start the test chain at `start-ganache.js`
3. In a separate window, run `npm run migrate` to make the migration.
4. See it fail.
