import React from 'react';

export interface LanMapMarkerTimesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerTimesThin: React.FC<LanMapMarkerTimesThinProps>;
export default LanMapMarkerTimesThin;
