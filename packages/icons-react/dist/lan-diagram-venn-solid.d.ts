import React from 'react';

export interface LanDiagramVennSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramVennSolid: React.FC<LanDiagramVennSolidProps>;
export default LanDiagramVennSolid;
