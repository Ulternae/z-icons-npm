import React from 'react';

export interface LanCrownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrownThin: React.FC<LanCrownThinProps>;
export default LanCrownThin;
