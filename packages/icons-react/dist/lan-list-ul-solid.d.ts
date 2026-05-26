import React from 'react';

export interface LanListUlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListUlSolid: React.FC<LanListUlSolidProps>;
export default LanListUlSolid;
