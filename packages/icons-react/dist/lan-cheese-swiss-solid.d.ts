import React from 'react';

export interface LanCheeseSwissSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheeseSwissSolid: React.FC<LanCheeseSwissSolidProps>;
export default LanCheeseSwissSolid;
