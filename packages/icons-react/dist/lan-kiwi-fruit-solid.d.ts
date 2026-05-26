import React from 'react';

export interface LanKiwiFruitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKiwiFruitSolid: React.FC<LanKiwiFruitSolidProps>;
export default LanKiwiFruitSolid;
