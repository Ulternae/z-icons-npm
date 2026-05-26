import React from 'react';

export interface LanMapMarkerSmileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerSmile: React.FC<LanMapMarkerSmileProps>;
export default LanMapMarkerSmile;
