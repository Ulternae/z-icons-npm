import React from 'react';

export interface LanDiagramPreviousSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramPreviousSolid: React.FC<LanDiagramPreviousSolidProps>;
export default LanDiagramPreviousSolid;
