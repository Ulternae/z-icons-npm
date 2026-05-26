import React from 'react';

export interface LanMapMarkerEditThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerEditThin: React.FC<LanMapMarkerEditThinProps>;
export default LanMapMarkerEditThin;
