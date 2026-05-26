import React from 'react';

export interface LanTablePivotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTablePivotRegular: React.FC<LanTablePivotRegularProps>;
export default LanTablePivotRegular;
