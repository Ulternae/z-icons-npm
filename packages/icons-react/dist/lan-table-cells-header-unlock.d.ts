import React from 'react';

export interface LanTableCellsHeaderUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsHeaderUnlock: React.FC<LanTableCellsHeaderUnlockProps>;
export default LanTableCellsHeaderUnlock;
