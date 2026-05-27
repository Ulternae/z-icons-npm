import React from 'react';

export interface CoreShieldHalvedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShieldHalved: React.FC<CoreShieldHalvedProps>;
export default CoreShieldHalved;
