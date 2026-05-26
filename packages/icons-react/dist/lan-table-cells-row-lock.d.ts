import React from 'react';

export interface LanTableCellsRowLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsRowLock: React.FC<LanTableCellsRowLockProps>;
export default LanTableCellsRowLock;
