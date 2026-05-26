import React from 'react';

export interface LanTableSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableSolid: React.FC<LanTableSolidProps>;
export default LanTableSolid;
