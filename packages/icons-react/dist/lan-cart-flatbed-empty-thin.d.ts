import React from 'react';

export interface LanCartFlatbedEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartFlatbedEmptyThin: React.FC<LanCartFlatbedEmptyThinProps>;
export default LanCartFlatbedEmptyThin;
