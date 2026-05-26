import React from 'react';

export interface LanTableCellsRowLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsRowLockThin: React.FC<LanTableCellsRowLockThinProps>;
export default LanTableCellsRowLockThin;
