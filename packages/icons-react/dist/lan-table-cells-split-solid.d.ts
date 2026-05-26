import React from 'react';

export interface LanTableCellsSplitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsSplitSolid: React.FC<LanTableCellsSplitSolidProps>;
export default LanTableCellsSplitSolid;
