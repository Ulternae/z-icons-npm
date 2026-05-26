import React from 'react';

export interface LanHotdogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHotdogSolid: React.FC<LanHotdogSolidProps>;
export default LanHotdogSolid;
