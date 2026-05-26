import React from 'react';

export interface LanSquarePollVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePollVertical: React.FC<LanSquarePollVerticalProps>;
export default LanSquarePollVertical;
