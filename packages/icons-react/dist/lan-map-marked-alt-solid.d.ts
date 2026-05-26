import React from 'react';

export interface LanMapMarkedAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkedAltSolid: React.FC<LanMapMarkedAltSolidProps>;
export default LanMapMarkedAltSolid;
