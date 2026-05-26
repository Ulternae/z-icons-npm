import React from 'react';

export interface LanTablePivotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTablePivotThin: React.FC<LanTablePivotThinProps>;
export default LanTablePivotThin;
