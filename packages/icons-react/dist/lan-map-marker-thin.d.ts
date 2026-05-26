import React from 'react';

export interface LanMapMarkerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerThin: React.FC<LanMapMarkerThinProps>;
export default LanMapMarkerThin;
