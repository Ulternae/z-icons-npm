import React from 'react';

export interface LanDiagramPredecessorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramPredecessorRegular: React.FC<LanDiagramPredecessorRegularProps>;
export default LanDiagramPredecessorRegular;
