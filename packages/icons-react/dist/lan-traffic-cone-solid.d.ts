import React from 'react';

export interface LanTrafficConeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficConeSolid: React.FC<LanTrafficConeSolidProps>;
export default LanTrafficConeSolid;
