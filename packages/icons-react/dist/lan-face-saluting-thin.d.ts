import React from 'react';

export interface LanFaceSalutingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSalutingThin: React.FC<LanFaceSalutingThinProps>;
export default LanFaceSalutingThin;
