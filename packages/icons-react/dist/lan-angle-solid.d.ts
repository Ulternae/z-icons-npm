import React from 'react';

export interface LanAngleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleSolid: React.FC<LanAngleSolidProps>;
export default LanAngleSolid;
