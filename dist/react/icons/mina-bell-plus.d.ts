import React from 'react';

export interface MinaBellPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellPlus: React.FC<MinaBellPlusProps>;
export default MinaBellPlus;
