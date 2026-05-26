import React from 'react';

export interface LanFeatherSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFeatherSolid: React.FC<LanFeatherSolidProps>;
export default LanFeatherSolid;
