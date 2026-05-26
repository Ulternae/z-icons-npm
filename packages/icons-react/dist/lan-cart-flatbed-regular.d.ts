import React from 'react';

export interface LanCartFlatbedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartFlatbedRegular: React.FC<LanCartFlatbedRegularProps>;
export default LanCartFlatbedRegular;
