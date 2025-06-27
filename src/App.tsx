import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import { Button } from './components/ui/button';

function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="h-screen w-screen bg-gray-100 ">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>情况一:</CardTitle>
          <CardDescription>
            删除一个文本节点时，如果不是唯一的子节点，会崩溃
          </CardDescription>
          <CardContent>
            <div>
              <div className="border rounded-md bg-accent">
                this is a normal node
              </div>
              {isShow && 'this is a text node'}
              <div className="border rounded-md bg-accent">
                this is a normal node
              </div>
            </div>
          </CardContent>
          <CardFooter className="space-x-1">
            <Button onClick={() => setIsShow(false)}>delete</Button>
            <Button onClick={() => setIsShow(true)}>reset</Button>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
}

export default App;
