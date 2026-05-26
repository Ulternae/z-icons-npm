import React from 'react';

export interface LanHamsaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHamsaRegular: React.FC<LanHamsaRegularProps>;
export default LanHamsaRegular;
