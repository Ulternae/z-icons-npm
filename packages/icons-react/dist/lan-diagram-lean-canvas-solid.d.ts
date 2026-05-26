import React from 'react';

export interface LanDiagramLeanCanvasSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramLeanCanvasSolid: React.FC<LanDiagramLeanCanvasSolidProps>;
export default LanDiagramLeanCanvasSolid;
