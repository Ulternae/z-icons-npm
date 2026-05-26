import React from 'react';

export interface LanMapMarkerMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerMinus: React.FC<LanMapMarkerMinusProps>;
export default LanMapMarkerMinus;
