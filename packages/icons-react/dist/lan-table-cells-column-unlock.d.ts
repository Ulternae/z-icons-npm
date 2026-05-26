import React from 'react';

export interface LanTableCellsColumnUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsColumnUnlock: React.FC<LanTableCellsColumnUnlockProps>;
export default LanTableCellsColumnUnlock;
