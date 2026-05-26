import React from 'react';

export interface LanKiwiFruitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKiwiFruit: React.FC<LanKiwiFruitProps>;
export default LanKiwiFruit;
