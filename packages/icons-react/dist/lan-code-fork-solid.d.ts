import React from 'react';

export interface LanCodeForkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeForkSolid: React.FC<LanCodeForkSolidProps>;
export default LanCodeForkSolid;
