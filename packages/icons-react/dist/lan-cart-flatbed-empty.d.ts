import React from 'react';

export interface LanCartFlatbedEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartFlatbedEmpty: React.FC<LanCartFlatbedEmptyProps>;
export default LanCartFlatbedEmpty;
