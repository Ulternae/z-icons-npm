import React from 'react';

export interface LanMapSignsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapSignsSolid: React.FC<LanMapSignsSolidProps>;
export default LanMapSignsSolid;
