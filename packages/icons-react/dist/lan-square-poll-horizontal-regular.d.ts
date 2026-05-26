import React from 'react';

export interface LanSquarePollHorizontalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePollHorizontalRegular: React.FC<LanSquarePollHorizontalRegularProps>;
export default LanSquarePollHorizontalRegular;
