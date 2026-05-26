import React from 'react';

export interface LanMapMarkerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarker: React.FC<LanMapMarkerProps>;
export default LanMapMarker;
