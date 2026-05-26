import React from 'react';

export interface LanInfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInfoSolid: React.FC<LanInfoSolidProps>;
export default LanInfoSolid;
