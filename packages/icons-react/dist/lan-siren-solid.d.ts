import React from 'react';

export interface LanSirenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSirenSolid: React.FC<LanSirenSolidProps>;
export default LanSirenSolid;
