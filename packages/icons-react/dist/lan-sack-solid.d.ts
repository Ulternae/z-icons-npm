import React from 'react';

export interface LanSackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSackSolid: React.FC<LanSackSolidProps>;
export default LanSackSolid;
