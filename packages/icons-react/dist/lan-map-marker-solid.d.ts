import React from 'react';

export interface LanMapMarkerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerSolid: React.FC<LanMapMarkerSolidProps>;
export default LanMapMarkerSolid;
