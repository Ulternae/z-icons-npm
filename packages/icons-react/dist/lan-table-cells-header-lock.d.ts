import React from 'react';

export interface LanTableCellsHeaderLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsHeaderLock: React.FC<LanTableCellsHeaderLockProps>;
export default LanTableCellsHeaderLock;
