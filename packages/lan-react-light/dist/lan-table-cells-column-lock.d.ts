import React from 'react';

export interface LanTableCellsColumnLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsColumnLock(props: LanTableCellsColumnLockProps): React.ReactElement;
export default LanTableCellsColumnLock;
