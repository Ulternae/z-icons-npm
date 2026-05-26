import React from 'react';

export interface LanTableCellsLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsLock: React.FC<LanTableCellsLockProps>;
export default LanTableCellsLock;
