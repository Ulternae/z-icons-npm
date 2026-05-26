import React from 'react';

export interface LanPersonRifleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonRifleRegular: React.FC<LanPersonRifleRegularProps>;
export default LanPersonRifleRegular;
