import React from 'react';

export interface LanBoltLightningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoltLightningSolid: React.FC<LanBoltLightningSolidProps>;
export default LanBoltLightningSolid;
