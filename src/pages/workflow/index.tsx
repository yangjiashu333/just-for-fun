import { ModelMenu } from '@/components/workflow/model-menu';
import { Background, Panel, ReactFlow, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export default function Workflow() {
  return (
    <div className="h-screen w-screen">
      <ReactFlowProvider>
        <ReactFlow />
        <Background />
        <Panel position="bottom-center">
          <ModelMenu />
        </Panel>
      </ReactFlowProvider>
    </div>
  );
}
