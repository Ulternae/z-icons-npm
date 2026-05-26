import React from 'react';

export interface LanMapMarkerCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerCheckRegular: React.FC<LanMapMarkerCheckRegularProps>;
export default LanMapMarkerCheckRegular;
