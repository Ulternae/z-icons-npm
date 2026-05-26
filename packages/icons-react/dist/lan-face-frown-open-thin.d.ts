import React from 'react';

export interface LanFaceFrownOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceFrownOpenThin: React.FC<LanFaceFrownOpenThinProps>;
export default LanFaceFrownOpenThin;
