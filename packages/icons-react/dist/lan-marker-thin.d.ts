import React from 'react';

export interface LanMarkerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarkerThin: React.FC<LanMarkerThinProps>;
export default LanMarkerThin;
