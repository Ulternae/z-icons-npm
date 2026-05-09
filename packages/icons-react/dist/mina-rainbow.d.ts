import React from 'react';

export interface MinaRainbowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRainbow: React.FC<MinaRainbowProps>;
export default MinaRainbow;
