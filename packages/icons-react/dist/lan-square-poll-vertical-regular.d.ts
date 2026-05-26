import React from 'react';

export interface LanSquarePollVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePollVerticalRegular: React.FC<LanSquarePollVerticalRegularProps>;
export default LanSquarePollVerticalRegular;
