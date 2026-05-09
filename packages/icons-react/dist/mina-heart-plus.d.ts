import React from 'react';

export interface MinaHeartPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartPlus: React.FC<MinaHeartPlusProps>;
export default MinaHeartPlus;
