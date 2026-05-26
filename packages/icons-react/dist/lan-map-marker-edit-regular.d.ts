import React from 'react';

export interface LanMapMarkerEditRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerEditRegular: React.FC<LanMapMarkerEditRegularProps>;
export default LanMapMarkerEditRegular;
