import React from 'react';

export interface LanTableCellsRowUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsRowUnlock: React.FC<LanTableCellsRowUnlockProps>;
export default LanTableCellsRowUnlock;
