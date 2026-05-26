import React from 'react';

export interface LanFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagSolid: React.FC<LanFlagSolidProps>;
export default LanFlagSolid;
