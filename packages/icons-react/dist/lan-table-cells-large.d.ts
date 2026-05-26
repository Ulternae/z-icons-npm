import React from 'react';

export interface LanTableCellsLargeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsLarge: React.FC<LanTableCellsLargeProps>;
export default LanTableCellsLarge;
