# Sittard Go Discord bot bootstrap
This is a wrapper around Discord JS with some
conveiniance functions to speedup bot development.
This is created to aid Pokémon Go groups, but can
be adapted for more general use.

Some of the helper methods are:
  - Reply; To reply directly to a message object (bot messages are ignored by default)
  - Send; Just use a channel name or id to post a message.
  - Finding admins / mods
  - Creating rich embeds
  - etc...

# Usage
To create a bot call `new SittardGoBot.Bot(config)`, where the
`config` contains all your channel and bot data. After that
you can call the `connect()` method on the returned object.

First off you might want to generate a configuration file.
To do this, just call the `Bot()` method in your file without a config.
after that run your file with the flag `-g` or `--generate` (eg. `node my_file.js -g`).
Now a config.json is created and you can edit this with your bot and guild info.

For a quick start look at the included `example.js` file or read the source to
get a full scope of the methods available.