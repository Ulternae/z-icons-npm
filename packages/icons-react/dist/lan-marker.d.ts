import React from 'react';

export interface LanMarkerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarker: React.FC<LanMarkerProps>;
export default LanMarker;
