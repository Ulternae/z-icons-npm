import React from 'react';

export interface LanTableCellsRowLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsRowLock(props: LanTableCellsRowLockProps): React.ReactElement;
export default LanTableCellsRowLock;
