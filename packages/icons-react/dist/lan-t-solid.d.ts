import React from 'react';

export interface LanTSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTSolid: React.FC<LanTSolidProps>;
export default LanTSolid;
