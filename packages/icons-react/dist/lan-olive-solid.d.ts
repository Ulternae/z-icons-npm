import React from 'react';

export interface LanOliveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOliveSolid: React.FC<LanOliveSolidProps>;
export default LanOliveSolid;
