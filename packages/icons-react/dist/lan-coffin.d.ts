import React from 'react';

export interface LanCoffinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffin: React.FC<LanCoffinProps>;
export default LanCoffin;
