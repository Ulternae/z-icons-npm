import React from 'react';

export interface LanMapMarkerAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerAltSolid: React.FC<LanMapMarkerAltSolidProps>;
export default LanMapMarkerAltSolid;
