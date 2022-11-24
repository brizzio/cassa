# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### FONT AWESOME CDN

<script src="https://kit.fontawesome.com/2d204445ca.js"></script>

https://dev.to/ansh47/react-button-component-with-an-icon-b4l

### DEPLOY TO GITHUB PAGES

https://blog.logrocket.com/deploying-react-apps-github-pages/


### react context

https://www.pluralsight.com/guides/how-to-use-react-context-to-share-data-between-components

```
import { useContext, useEffect, useState }, React from "react"
import { ReferenceDataContext } from "./ReferenceDataContext"
import axios from "axios"

const Main = () => {

  const [isLoading, setIsLoading] = useState(false);
  const { unicornTypes, setUnicornTypes } = useContext(ReferenceDataContext);

    useEffect(() => {
      setIsLoading(true)
      axios.get("PATH_TO_THE_API")
        .then(response => response.data)
        .then(setUnicornTypes)
        .finally(() => setIsLoading(false))
    }, [axios, setUnicornTypes])

    const renderTypesList = () => {
      unicornTypes.map(type => <li>{ type }</li>)
    }

    return (
      <>
        {isLoading && <p>Loading...</p>}
        { !isLoading && (
          <ul>
            {renderTypesList()}
          </ul>
        ) }
      </>
    )
}

export default Main

```

### How to position a div scrollbar on the left hand side?


Kind of an old question, but I thought I should throw in a method which wasn't widely available when this question was asked.

You can reverse the side of the scrollbar in modern browsers using transform: scaleX(-1) on a parent <div>, then apply the same transform to reverse a child, "sleeve" element.

HTML

<div class="parent">
  <div class="sleeve">
    <!-- content -->
  </div>
</div>
CSS

.parent {
  overflow: auto;
  transform: scaleX(-1); //Reflects the parent horizontally
}

.sleeve {
  transform: scaleX(-1); //Flips the child back to normal
}
Note: You may need to use an -ms-transform or -webkit-transform prefix for browsers as old as IE 9. Check CanIUse and click "show all" to see older browser requirements.




### https://linguinecode.com/post/get-child-component-state-from-parent-component


The method above covers how to pass the child state over a click event.


But what about when input field changes?

We sure can do that as well! Let’s take a look at how.


class ChildComponent extends React.Component {

  state = {
    username: '',
    password: '',
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    })
  };

  render() {
    return (
      <>
        <div>
          <div>Username:</div>
          <input name="username" onChange={this.handleChange} />
        </div>
        <br />
        <div>
          <div>Password:</div>
          <input name="password" onChange={this.handleChange} />
        </div>
        <br />
        <div>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </>
    );
  }
}



Get state value on React useEffect hook
Here’s how we can pass the state to the parent component with the React

function Parent() {

  const eventhandler = data => console.log(data)

  return <ChildComponent onChange={eventhandler} />;
}


function ChildComponent(props) {

  const [formData, setFormData] = React.useState({ username: '', password: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  React.useEffect(() => {
    if (props.onChange) {
      props.onChange(formData)
    }
  }, [formData.username, formData.password])

  return (
    <>
      <div>
        <div>Username:</div>
        <input name="username" onChange={handleChange} />
      </div>
      <br />
      <div>
        <div>Password:</div>
        <input name="password" onChange={handleChange} />
      </div>
      <br />
    </>
  );
}



## IMMER

https://beta.reactjs.org/learn/updating-objects-in-state

How does Immer work?

Hide Details
The draft provided by Immer is a special type of object, called a Proxy, that “records” what you do with it. This is why you can mutate it freely as much as you like! Under the hood, Immer figures out which parts of the draft have been changed, and produces a completely new object that contains your edits.

To try Immer:

Add use-immer to your package.json as a dependency
Run npm install
Then replace import { useState } from 'react' with import { useImmer } from 'use-immer'
Here is the above example converted to Immer:

## Available Scripts




In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify



This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### SWAGGER

https://www.letscode.com.br/blog/como-automatizar-documentacao-de-apis-rest-em-nodejs-com-swagger

### securing-restful-apis-with-jwt

https://github.com/adnanrahic/securing-restful-apis-with-jwt/blob/master/auth/AuthController.js

### SVG


I usually always convert each SVG into its own component like so

import * as React from "react";

const ArrowDownSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default ArrowDownSVG;

Has worked for me in the past year or so By leaving out the type for the props, you can use this in plain JS as well

### FASTIFY

https://www.fastify.io/docs/latest/Guides/Ecosystem/


# KEYBOARD
https://codesandbox.io/examples/package/react-simple-keyboard
https://codesandbox.io/s/ndt1o?file=/src/Home.js:0-434

## Keyboard COmponent

import React, { useState } from "react";
import Keyboard from "react-simple-keyboard";

const KeyboardComponent = props => {
  const { keyboardRef: keyboard, inputNames = ["default"] } = props;
  const [inputs, setInputs] = useState({});
  const [inputName, setInputName] = useState(inputNames[0]);
  const [layoutName, setLayoutName] = useState("default");

  const onChangeAll = inputs => {
    /**
     * Here we spread the inputs into a new object
     * If we modify the same object, react will not trigger a re-render
     */
    setInputs({ ...inputs });
    console.log("Inputs changed", inputs, keyboard);
  };

  const onChangeInput = event => {
    const inputVal = event.target.value;

    setInputs({
      ...inputs,
      [inputName]: inputVal
    });

    keyboard.current.setInput(inputVal);
  };

  const handleShift = () => {
    const newLayoutName = layoutName === "default" ? "shift" : "default";
    setLayoutName(newLayoutName);
  };

  const getInputValue = inputName => {
    return inputs[inputName] || "";
  };

  const onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const keyboardProps = {
    keyboardRef: r => (keyboard.current = r),
    onChangeAll,
    inputName,
    onKeyPress,
    layoutName
  };

  return (
    <div>
      {inputNames.map(input => (
        <input
          key={input}
          placeholder={input}
          id={input}
          value={getInputValue(input)}
          onFocus={() => setInputName(input)}
          onChange={onChangeInput}
        />
      ))}
      <Keyboard {...keyboardProps} />
    </div>
  );
};

export default KeyboardComponent;

## Page component

import React, { useRef, useEffect } from "react";
import KeyboardComponent from "./KeyboardComponent";

const Home = () => {
  const keyboardRef = useRef(null);

  useEffect(() => {
    console.log("keyboardRef", keyboardRef);
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <KeyboardComponent
        keyboardRef={keyboardRef}
        inputNames={["firstName", "lastName"]}
      />
    </div>
  );
};
export default Home;

