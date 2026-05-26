import React from 'react';

export interface LanHouseTsunamiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseTsunamiRegular: React.FC<LanHouseTsunamiRegularProps>;
export default LanHouseTsunamiRegular;
