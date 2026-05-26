import React from 'react';

export interface LanMapMarkerAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerAltRegular: React.FC<LanMapMarkerAltRegularProps>;
export default LanMapMarkerAltRegular;
