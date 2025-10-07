import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Hata yakalandı:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Bir şeyler ters gitti. Lütfen sayfayı yenileyin.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;