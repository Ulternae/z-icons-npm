import React from 'react';

export interface LanMSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMSolid: React.FC<LanMSolidProps>;
export default LanMSolid;
