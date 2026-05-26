import React from 'react';

export interface LanSackXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSackXmarkSolid: React.FC<LanSackXmarkSolidProps>;
export default LanSackXmarkSolid;
