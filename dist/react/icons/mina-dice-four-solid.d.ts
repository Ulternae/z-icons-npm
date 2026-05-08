import React from 'react';

export interface MinaDiceFourSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDiceFourSolid: React.FC<MinaDiceFourSolidProps>;
export default MinaDiceFourSolid;
