import React from 'react';

export interface LanBahaiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBahaiSolid: React.FC<LanBahaiSolidProps>;
export default LanBahaiSolid;
