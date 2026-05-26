import React from 'react';

export interface LanBlindsOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlindsOpenSolid: React.FC<LanBlindsOpenSolidProps>;
export default LanBlindsOpenSolid;
