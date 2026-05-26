import React from 'react';

export interface LanDiagramPredecessorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramPredecessor: React.FC<LanDiagramPredecessorProps>;
export default LanDiagramPredecessor;
