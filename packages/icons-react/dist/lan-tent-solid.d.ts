import React from 'react';

export interface LanTentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTentSolid: React.FC<LanTentSolidProps>;
export default LanTentSolid;
