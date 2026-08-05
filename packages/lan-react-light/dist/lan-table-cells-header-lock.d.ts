import React from 'react';

export interface LanTableCellsHeaderLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsHeaderLock(props: LanTableCellsHeaderLockProps): React.ReactElement;
export default LanTableCellsHeaderLock;
