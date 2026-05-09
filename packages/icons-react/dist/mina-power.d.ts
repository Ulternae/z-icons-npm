import React from 'react';

export interface MinaPowerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPower: React.FC<MinaPowerProps>;
export default MinaPower;
