import React from 'react';

export interface LanMapMarkerPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerPlusThin: React.FC<LanMapMarkerPlusThinProps>;
export default LanMapMarkerPlusThin;
