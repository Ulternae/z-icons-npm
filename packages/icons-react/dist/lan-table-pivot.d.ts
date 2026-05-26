import React from 'react';

export interface LanTablePivotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTablePivot: React.FC<LanTablePivotProps>;
export default LanTablePivot;
