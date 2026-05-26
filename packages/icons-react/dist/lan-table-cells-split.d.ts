import React from 'react';

export interface LanTableCellsSplitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsSplit: React.FC<LanTableCellsSplitProps>;
export default LanTableCellsSplit;
