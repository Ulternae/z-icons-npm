import React from 'react';

export interface LanCartFlatbedSuitcaseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartFlatbedSuitcaseRegular: React.FC<LanCartFlatbedSuitcaseRegularProps>;
export default LanCartFlatbedSuitcaseRegular;
