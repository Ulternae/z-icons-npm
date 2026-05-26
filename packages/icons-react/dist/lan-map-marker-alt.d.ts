import React from 'react';

export interface LanMapMarkerAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerAlt: React.FC<LanMapMarkerAltProps>;
export default LanMapMarkerAlt;
