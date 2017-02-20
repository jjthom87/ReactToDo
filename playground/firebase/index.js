import firebase from 'firebase';

var config = {
apiKey: "AIzaSyC77WdOQiULhly6WfGQkX9Z6j0lHV9orpE",
authDomain: "jared-todo-app.firebaseapp.com",
databaseURL: "https://jared-todo-app.firebaseio.com",
storageBucket: "jared-todo-app.appspot.com",
messagingSenderId: "578736999597"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebase.database().ref().set({
	appName: 'Todo App'
})