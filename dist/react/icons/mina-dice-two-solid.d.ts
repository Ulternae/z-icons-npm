import React from 'react';

export interface MinaDiceTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDiceTwoSolid: React.FC<MinaDiceTwoSolidProps>;
export default MinaDiceTwoSolid;
