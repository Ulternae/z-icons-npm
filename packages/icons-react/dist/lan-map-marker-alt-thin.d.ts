import React from 'react';

export interface LanMapMarkerAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerAltThin: React.FC<LanMapMarkerAltThinProps>;
export default LanMapMarkerAltThin;
