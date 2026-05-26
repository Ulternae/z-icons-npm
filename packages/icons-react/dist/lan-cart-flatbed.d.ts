import React from 'react';

export interface LanCartFlatbedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartFlatbed: React.FC<LanCartFlatbedProps>;
export default LanCartFlatbed;
