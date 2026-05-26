import React from 'react';

export interface LanMapMarkerCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerCheckSolid: React.FC<LanMapMarkerCheckSolidProps>;
export default LanMapMarkerCheckSolid;
