import React from 'react';

export interface LanTableCellsUnlockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsUnlockThin: React.FC<LanTableCellsUnlockThinProps>;
export default LanTableCellsUnlockThin;
