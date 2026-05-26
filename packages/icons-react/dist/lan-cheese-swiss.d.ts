import React from 'react';

export interface LanCheeseSwissProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheeseSwiss: React.FC<LanCheeseSwissProps>;
export default LanCheeseSwiss;
