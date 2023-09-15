/* eslint-disable @typescript-eslint/no-unused-vars */
import { MyLabel } from './components/MyLabel';
import { Button } from "./stories/Button";
import { Header } from "./stories/Header";
import { Page } from "./stories/Page";



export const index = () => {
  return (
    <div>
      <MyLabel label='hello' />
      <Button label={'hello'} />
      <Header onLogin={function (): void {
        throw new Error('Function not implemented.');
      }} onLogout={function (): void {
        throw new Error('Function not implemented.');
      }} onCreateAccount={function (): void {
        throw new Error('Function not implemented.');
      }} />
      <Page />
    </div>
  )
}

