import React from 'react';

export interface LanKiwiFruitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKiwiFruitRegular: React.FC<LanKiwiFruitRegularProps>;
export default LanKiwiFruitRegular;
