import React from 'react';

export interface CoreSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSunSolid: React.FC<CoreSunSolidProps>;
export default CoreSunSolid;
