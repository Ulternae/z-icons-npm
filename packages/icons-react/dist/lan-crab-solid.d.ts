import React from 'react';

export interface LanCrabSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrabSolid: React.FC<LanCrabSolidProps>;
export default LanCrabSolid;
