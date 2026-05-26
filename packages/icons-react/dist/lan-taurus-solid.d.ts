import React from 'react';

export interface LanTaurusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTaurusSolid: React.FC<LanTaurusSolidProps>;
export default LanTaurusSolid;
