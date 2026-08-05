import React from 'react';

export interface LanDiagramLeanCanvasProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramLeanCanvas(props: LanDiagramLeanCanvasProps): React.ReactElement;
export default LanDiagramLeanCanvas;
