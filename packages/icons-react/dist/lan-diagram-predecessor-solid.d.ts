import React from 'react';

export interface LanDiagramPredecessorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramPredecessorSolid: React.FC<LanDiagramPredecessorSolidProps>;
export default LanDiagramPredecessorSolid;
