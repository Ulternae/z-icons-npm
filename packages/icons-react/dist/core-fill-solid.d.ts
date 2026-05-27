import React from 'react';

export interface CoreFillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFillSolid: React.FC<CoreFillSolidProps>;
export default CoreFillSolid;
