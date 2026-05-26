import React from 'react';

export interface LanCrutchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrutchSolid: React.FC<LanCrutchSolidProps>;
export default LanCrutchSolid;
