import React from 'react';

export interface LanMapMarkerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerRegular: React.FC<LanMapMarkerRegularProps>;
export default LanMapMarkerRegular;
