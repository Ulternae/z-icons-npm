import React from 'react';

export interface LanSocksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSocksSolid: React.FC<LanSocksSolidProps>;
export default LanSocksSolid;
