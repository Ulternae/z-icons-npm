import React from 'react';

export interface CorePercentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePercentSolid: React.FC<CorePercentSolidProps>;
export default CorePercentSolid;
