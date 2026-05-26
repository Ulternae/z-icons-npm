import React from 'react';

export interface LanBusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusSolid: React.FC<LanBusSolidProps>;
export default LanBusSolid;
