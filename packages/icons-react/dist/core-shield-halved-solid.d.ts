import React from 'react';

export interface CoreShieldHalvedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShieldHalvedSolid: React.FC<CoreShieldHalvedSolidProps>;
export default CoreShieldHalvedSolid;
