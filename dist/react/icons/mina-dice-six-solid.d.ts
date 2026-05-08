import React from 'react';

export interface MinaDiceSixSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDiceSixSolid: React.FC<MinaDiceSixSolidProps>;
export default MinaDiceSixSolid;
