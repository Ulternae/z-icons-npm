import React from 'react';

export interface LanBagSeedlingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagSeedlingSolid: React.FC<LanBagSeedlingSolidProps>;
export default LanBagSeedlingSolid;
