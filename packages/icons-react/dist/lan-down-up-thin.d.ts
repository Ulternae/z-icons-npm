import React from 'react';

export interface LanDownUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownUpThin: React.FC<LanDownUpThinProps>;
export default LanDownUpThin;
