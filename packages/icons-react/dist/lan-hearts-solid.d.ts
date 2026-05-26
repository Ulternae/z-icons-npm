import React from 'react';

export interface LanHeartsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartsSolid: React.FC<LanHeartsSolidProps>;
export default LanHeartsSolid;
