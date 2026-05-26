import React from 'react';

export interface LanMapMarkedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkedSolid: React.FC<LanMapMarkedSolidProps>;
export default LanMapMarkedSolid;
