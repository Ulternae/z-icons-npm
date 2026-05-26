import React from 'react';

export interface LanTableCellsLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsLockThin: React.FC<LanTableCellsLockThinProps>;
export default LanTableCellsLockThin;
