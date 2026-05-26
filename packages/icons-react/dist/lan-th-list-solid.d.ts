import React from 'react';

export interface LanThListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThListSolid: React.FC<LanThListSolidProps>;
export default LanThListSolid;
