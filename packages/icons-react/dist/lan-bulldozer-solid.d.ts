import React from 'react';

export interface LanBulldozerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBulldozerSolid: React.FC<LanBulldozerSolidProps>;
export default LanBulldozerSolid;
