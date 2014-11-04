[ ![Codeship Status for jakzale/blame-core](https://codeship.io/projects/8e6c6a30-3826-0132-6f33-4e7a21b2ccbb/status)](https://codeship.io/projects/41913)

# Notice
Because the model for overloaded functions needs to be updated, generating wrappers for overloaded functions is slightly buggy.

# Table of Contents

- [Blame-Core](#blame-core)
    - [Requirements](#requirements)
    - [Polymorphic Blame Calculus](#polymorphicblamecalculus)
- [Usage](#usage)

# Blame-Core
JavaScript wrapper for checking types at runtime.  Depends on Proxies and WeakMaps for EcmaScript 6.  Based on Polymorphic Blame Calculus.


## Requirements

Available JavaScript engines with suitable harmony extensions

- Mozilla Firefox
- Google Chrome (requires enabling harmony extensions manually)
- node.js (requires enabling harmony extensions via command line argument, or enabling them by default via patch)

Currently only Firefox supports the most recent version of Proxy API out of the box.  Chrome and node.js will use [harmony-reflect](https://github.com/tvcutsem/harmony-reflect) for compatibility with the Old Proxy API.


### Custom node.js with Harmony

I wrote a simple [patch](https://gist.github.com/jakzale/1c24dd011a7b53fec3ca) for enabling harmony extensions by default in node 0.10.33.

If you use homebrew on a mac, you can install node using a custom homebrew formula:
```bash
$ brew install --build-from-source https://raw.githubusercontent.com/jakzale/blame-core/master/node.rb
```

## Polymorphic Blame Calculus

No worries, just theoretical foundation to show that what is being done is not nonsense.  For more details consult relevant [papers](http://homepages.inf.ed.ac.uk/wadler/topics/blame.html).

# Usage

**List basic usage here**


TODO
----
1. Add *useful* information to this Readme
2. Give pointers on compiling node with harmony flags on by default
3. Fix stuff:
    - Fix the model for overloaded functions
4. Find a *better* way of integrating with karma -- the current way is sufficient for small projects, but for larger projects it might be troublesome.
