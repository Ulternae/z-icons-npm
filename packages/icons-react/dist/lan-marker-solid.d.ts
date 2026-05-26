import React from 'react';

export interface LanMarkerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarkerSolid: React.FC<LanMarkerSolidProps>;
export default LanMarkerSolid;
