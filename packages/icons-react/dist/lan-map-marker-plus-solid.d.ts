import React from 'react';

export interface LanMapMarkerPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerPlusSolid: React.FC<LanMapMarkerPlusSolidProps>;
export default LanMapMarkerPlusSolid;
