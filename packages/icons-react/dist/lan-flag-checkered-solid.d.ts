import React from 'react';

export interface LanFlagCheckeredSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagCheckeredSolid: React.FC<LanFlagCheckeredSolidProps>;
export default LanFlagCheckeredSolid;
