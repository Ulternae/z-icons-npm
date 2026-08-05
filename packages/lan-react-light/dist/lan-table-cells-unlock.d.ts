import React from 'react';

export interface LanTableCellsUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsUnlock(props: LanTableCellsUnlockProps): React.ReactElement;
export default LanTableCellsUnlock;
