import React from 'react';

export interface LanBackwardFastThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBackwardFastThin: React.FC<LanBackwardFastThinProps>;
export default LanBackwardFastThin;
