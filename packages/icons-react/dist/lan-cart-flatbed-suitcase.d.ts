import React from 'react';

export interface LanCartFlatbedSuitcaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartFlatbedSuitcase: React.FC<LanCartFlatbedSuitcaseProps>;
export default LanCartFlatbedSuitcase;
