import React from 'react';

export interface LanDiagramLeanCanvasThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramLeanCanvasThin: React.FC<LanDiagramLeanCanvasThinProps>;
export default LanDiagramLeanCanvasThin;
