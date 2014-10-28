
[ ![Codeship Status for jakzale/blame-core](https://codeship.io/projects/8e6c6a30-3826-0132-6f33-4e7a21b2ccbb/status)](https://codeship.io/projects/41913)

# Requirements

Blame-core requires a JavaScript engine with harmony extensions (Proxies and WeakMaps).  Currently, only Firefox supports the most recent version of Proxy API; for Chrome and node.js the most recent Proxy API is available through [harmony-reflect](https://github.com/tvcutsem/harmony-reflect) library.

Available engines with suitable harmony extensions

- Mozilla Firefox
- Google Chrome (requires enabling harmony extensions manually)
- node.js (requires enabling harmony extensions via command line argument, or enabling them by default via patch)

## Harmony Extensions for node.js

I wrote a simple [patch](https://gist.github.com/jakzale/1c24dd011a7b53fec3ca) for enabling harmony extensions by default in node 0.10.33.

If you use homebrew on a mac, you can install node using a custom homebrew formula:
```bash
$ brew install --build-from-source https://raw.githubusercontent.com/jakzale/blame-core/master/node.rb
```


Blame-Core
==============
JavaScript wrapper for checking types dynamically. Using Proxies and WeakMaps from EcmaScript 6. Based on Blame Calculus.

Blame Calculus
--------------
What is blame calculus

Notice
------
Because the model for overloaded functions needs to be updated, generating wrappers for overloaded functions is slightly buggy.

TODO
----
1. Add *useful* information to this Readme
2. Give pointers on compiling node with harmony flags on by default
3. Fix stuff:
    - Fix the model for overloaded functions
4. Find a *better* way of integrating with karma -- the current way is sufficient for small projects, but for larger projects it might be troublesome.
