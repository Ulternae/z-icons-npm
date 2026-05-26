import React from 'react';

export interface LanTableCellsSplitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsSplitRegular: React.FC<LanTableCellsSplitRegularProps>;
export default LanTableCellsSplitRegular;
