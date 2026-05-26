import React from 'react';

export interface LanTableCellsLargeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsLargeRegular: React.FC<LanTableCellsLargeRegularProps>;
export default LanTableCellsLargeRegular;
