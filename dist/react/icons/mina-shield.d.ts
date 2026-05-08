import React from 'react';

export interface MinaShieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShield: React.FC<MinaShieldProps>;
export default MinaShield;
