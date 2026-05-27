import React from 'react';

export interface CoreShieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShield: React.FC<CoreShieldProps>;
export default CoreShield;
