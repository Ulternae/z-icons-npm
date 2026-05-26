import React from 'react';

export interface LanThumbTackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbTackSolid: React.FC<LanThumbTackSolidProps>;
export default LanThumbTackSolid;
