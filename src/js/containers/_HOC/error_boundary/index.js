import React from 'react'

type Props = { children:React$Node }
type StateErrorInfoType = { componentStack: string} | null
type State = {error:?Error, errorInfo:StateErrorInfoType  }

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error:Error, errorInfo:StateErrorInfoType) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo
    })
    // You can also log error messages to an error reporting service here
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}