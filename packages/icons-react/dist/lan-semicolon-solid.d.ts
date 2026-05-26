import React from 'react';

export interface LanSemicolonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSemicolonSolid: React.FC<LanSemicolonSolidProps>;
export default LanSemicolonSolid;
