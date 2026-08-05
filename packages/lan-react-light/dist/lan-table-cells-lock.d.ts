import React from 'react';

export interface LanTableCellsLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsLock(props: LanTableCellsLockProps): React.ReactElement;
export default LanTableCellsLock;
