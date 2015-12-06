# Learning React.js - javascript rendering library

- using 'state' to create interactive components
- using 'props' for reusuable components
- React.PropTypes for range of vaidations
- built react components using lifecycle methods 
- able to access refs to children method (underlying DOM representations)
- this.setState; this.props
- Mounting: componentWillMount (invokes on client and server before rendering occurs + call 'setState' and render() will see the updated state & exectute); componentDidMount (DOM Maniupulation from children then parent & AJAX requests)
- Unmounting: componentWillUnmount (calls before a component is unmounted from the DOM + clearn up after React component gets destroy. )
- Updating: componentWillReceiveProps; shouldComponentUpdate; componentWillUpdate; componentDidUpdate
- Used Flux architecture with React to build web apps (single direction data flow architecture with specific events and listeners: Action -> Dispatch -> Store -> View -> Action) - great for dynamic data applications
- dispatcher register a callback for data to flow from action through the dispatcher into the store. dispatcher doesn't know about the store and it only knows it has a callback to call at a specific time. 
- The view will pull the data from the store. 
- store register a callback with dispatcher 
- store can decide what data to update through the payload