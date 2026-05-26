import React from 'react';

export interface LanKettlebellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKettlebellSolid: React.FC<LanKettlebellSolidProps>;
export default LanKettlebellSolid;
