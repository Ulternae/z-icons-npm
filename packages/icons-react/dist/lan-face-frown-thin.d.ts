import React from 'react';

export interface LanFaceFrownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceFrownThin: React.FC<LanFaceFrownThinProps>;
export default LanFaceFrownThin;
