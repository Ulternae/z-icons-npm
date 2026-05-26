import React from 'react';

export interface LanMapMarkerSmileRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerSmileRegular: React.FC<LanMapMarkerSmileRegularProps>;
export default LanMapMarkerSmileRegular;
