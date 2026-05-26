import React from 'react';

export interface LanDiagramNextSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramNextSolid: React.FC<LanDiagramNextSolidProps>;
export default LanDiagramNextSolid;
