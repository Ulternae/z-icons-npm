import React from 'react';

export interface LanMapMarkerMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerMinusRegular: React.FC<LanMapMarkerMinusRegularProps>;
export default LanMapMarkerMinusRegular;
