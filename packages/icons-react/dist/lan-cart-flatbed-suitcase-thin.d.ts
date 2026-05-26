import React from 'react';

export interface LanCartFlatbedSuitcaseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartFlatbedSuitcaseThin: React.FC<LanCartFlatbedSuitcaseThinProps>;
export default LanCartFlatbedSuitcaseThin;
