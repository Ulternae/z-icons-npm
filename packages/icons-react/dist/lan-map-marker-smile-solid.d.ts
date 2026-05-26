import React from 'react';

export interface LanMapMarkerSmileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerSmileSolid: React.FC<LanMapMarkerSmileSolidProps>;
export default LanMapMarkerSmileSolid;
