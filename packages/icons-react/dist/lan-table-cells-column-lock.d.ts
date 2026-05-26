import React from 'react';

export interface LanTableCellsColumnLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsColumnLock: React.FC<LanTableCellsColumnLockProps>;
export default LanTableCellsColumnLock;
