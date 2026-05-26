import React from 'react';

export interface LanMapMarkerMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerMinusSolid: React.FC<LanMapMarkerMinusSolidProps>;
export default LanMapMarkerMinusSolid;
