import React from 'react';

export interface LanCartFlatbedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartFlatbedThin: React.FC<LanCartFlatbedThinProps>;
export default LanCartFlatbedThin;
