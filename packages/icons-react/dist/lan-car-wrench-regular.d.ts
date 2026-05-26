import React from 'react';

export interface LanCarWrenchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarWrenchRegular: React.FC<LanCarWrenchRegularProps>;
export default LanCarWrenchRegular;
