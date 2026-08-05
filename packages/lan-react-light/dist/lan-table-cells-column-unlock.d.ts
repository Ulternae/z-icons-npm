import React from 'react';

export interface LanTableCellsColumnUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsColumnUnlock(props: LanTableCellsColumnUnlockProps): React.ReactElement;
export default LanTableCellsColumnUnlock;
