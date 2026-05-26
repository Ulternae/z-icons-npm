import React from 'react';

export interface LanDiagramLeanCanvasProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramLeanCanvas: React.FC<LanDiagramLeanCanvasProps>;
export default LanDiagramLeanCanvas;
