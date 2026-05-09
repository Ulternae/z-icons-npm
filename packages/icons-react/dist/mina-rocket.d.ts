import React from 'react';

export interface MinaRocketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRocket: React.FC<MinaRocketProps>;
export default MinaRocket;
