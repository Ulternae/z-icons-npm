import React from 'react';

export interface LanHydraRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHydraRegular: React.FC<LanHydraRegularProps>;
export default LanHydraRegular;
