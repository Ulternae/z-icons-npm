import React from 'react';

export interface LanDiagramPredecessorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramPredecessorThin: React.FC<LanDiagramPredecessorThinProps>;
export default LanDiagramPredecessorThin;
