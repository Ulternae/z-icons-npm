import React from 'react';

export interface LanSquarePollHorizontalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePollHorizontalThin: React.FC<LanSquarePollHorizontalThinProps>;
export default LanSquarePollHorizontalThin;
