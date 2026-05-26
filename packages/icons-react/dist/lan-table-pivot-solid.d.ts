import React from 'react';

export interface LanTablePivotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTablePivotSolid: React.FC<LanTablePivotSolidProps>;
export default LanTablePivotSolid;
