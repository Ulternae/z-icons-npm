import React from 'react';

export interface LanDiagramPreviousProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramPrevious: React.FC<LanDiagramPreviousProps>;
export default LanDiagramPrevious;
