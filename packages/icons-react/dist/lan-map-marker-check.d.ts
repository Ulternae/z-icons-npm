import React from 'react';

export interface LanMapMarkerCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerCheck: React.FC<LanMapMarkerCheckProps>;
export default LanMapMarkerCheck;
