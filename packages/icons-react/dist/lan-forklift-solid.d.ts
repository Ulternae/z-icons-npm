import React from 'react';

export interface LanForkliftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanForkliftSolid: React.FC<LanForkliftSolidProps>;
export default LanForkliftSolid;
