import React from 'react';

export interface LanMapMarkerPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerPlusRegular: React.FC<LanMapMarkerPlusRegularProps>;
export default LanMapMarkerPlusRegular;
