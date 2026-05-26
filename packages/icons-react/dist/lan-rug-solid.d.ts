import React from 'react';

export interface LanRugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRugSolid: React.FC<LanRugSolidProps>;
export default LanRugSolid;
