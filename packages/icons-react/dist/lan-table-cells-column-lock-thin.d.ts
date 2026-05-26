import React from 'react';

export interface LanTableCellsColumnLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsColumnLockThin: React.FC<LanTableCellsColumnLockThinProps>;
export default LanTableCellsColumnLockThin;
