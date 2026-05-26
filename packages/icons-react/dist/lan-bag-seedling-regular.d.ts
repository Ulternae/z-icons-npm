import React from 'react';

export interface LanBagSeedlingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagSeedlingRegular: React.FC<LanBagSeedlingRegularProps>;
export default LanBagSeedlingRegular;
