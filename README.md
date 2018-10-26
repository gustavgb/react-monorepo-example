# react-monorepo-example
Trying to create a monorepo with React and importing of shared UI packages. Currently not working.

I wanted to create a setup, where, using Yarn workspaces, packages can import each other, while not having to transpile the code first. So App can import ComponentA, which is a react component, but ComponentA does not need to worry about transpiling its code. App will take care of this.

In the end, I ended up tranpiling package code, before importing it elsewhere...
