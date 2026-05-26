import React from 'react';

export interface LanFanTableSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFanTableSolid: React.FC<LanFanTableSolidProps>;
export default LanFanTableSolid;
