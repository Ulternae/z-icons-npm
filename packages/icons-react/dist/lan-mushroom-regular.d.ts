import React from 'react';

export interface LanMushroomRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMushroomRegular: React.FC<LanMushroomRegularProps>;
export default LanMushroomRegular;
