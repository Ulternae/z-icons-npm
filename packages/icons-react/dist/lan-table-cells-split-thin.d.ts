import React from 'react';

export interface LanTableCellsSplitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsSplitThin: React.FC<LanTableCellsSplitThinProps>;
export default LanTableCellsSplitThin;
