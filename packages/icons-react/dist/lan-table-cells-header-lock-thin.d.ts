import React from 'react';

export interface LanTableCellsHeaderLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsHeaderLockThin: React.FC<LanTableCellsHeaderLockThinProps>;
export default LanTableCellsHeaderLockThin;
