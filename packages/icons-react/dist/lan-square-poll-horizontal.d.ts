import React from 'react';

export interface LanSquarePollHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePollHorizontal: React.FC<LanSquarePollHorizontalProps>;
export default LanSquarePollHorizontal;
