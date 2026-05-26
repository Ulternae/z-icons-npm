import React from 'react';

export interface LanMakiRollSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMakiRollSolid: React.FC<LanMakiRollSolidProps>;
export default LanMakiRollSolid;
