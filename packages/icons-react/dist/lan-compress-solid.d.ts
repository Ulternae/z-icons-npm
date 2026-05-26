import React from 'react';

export interface LanCompressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompressSolid: React.FC<LanCompressSolidProps>;
export default LanCompressSolid;
