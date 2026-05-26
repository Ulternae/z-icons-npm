import React from 'react';

export interface LanMapMarkerPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerPlus: React.FC<LanMapMarkerPlusProps>;
export default LanMapMarkerPlus;
