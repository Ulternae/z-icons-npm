import React from 'react';

export interface LanStreetViewThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStreetViewThin: React.FC<LanStreetViewThinProps>;
export default LanStreetViewThin;
