import React from 'react';

export interface LanDiagramLeanCanvasRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramLeanCanvasRegular: React.FC<LanDiagramLeanCanvasRegularProps>;
export default LanDiagramLeanCanvasRegular;
