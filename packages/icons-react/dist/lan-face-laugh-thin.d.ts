import React from 'react';

export interface LanFaceLaughThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceLaughThin: React.FC<LanFaceLaughThinProps>;
export default LanFaceLaughThin;
