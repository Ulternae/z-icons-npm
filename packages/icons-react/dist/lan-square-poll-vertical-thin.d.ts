import React from 'react';

export interface LanSquarePollVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePollVerticalThin: React.FC<LanSquarePollVerticalThinProps>;
export default LanSquarePollVerticalThin;
