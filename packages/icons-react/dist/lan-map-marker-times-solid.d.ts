import React from 'react';

export interface LanMapMarkerTimesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerTimesSolid: React.FC<LanMapMarkerTimesSolidProps>;
export default LanMapMarkerTimesSolid;
