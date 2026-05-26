import React from 'react';

export interface LanBuoySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuoySolid: React.FC<LanBuoySolidProps>;
export default LanBuoySolid;
