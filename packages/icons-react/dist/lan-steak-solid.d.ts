import React from 'react';

export interface LanSteakSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSteakSolid: React.FC<LanSteakSolidProps>;
export default LanSteakSolid;
