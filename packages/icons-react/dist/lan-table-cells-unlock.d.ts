import React from 'react';

export interface LanTableCellsUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsUnlock: React.FC<LanTableCellsUnlockProps>;
export default LanTableCellsUnlock;
