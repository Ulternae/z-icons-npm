import React from 'react';

export interface LanFastForwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFastForwardSolid: React.FC<LanFastForwardSolidProps>;
export default LanFastForwardSolid;
