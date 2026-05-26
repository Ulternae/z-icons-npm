import React from 'react';

export interface LanCheeseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheese: React.FC<LanCheeseProps>;
export default LanCheese;
