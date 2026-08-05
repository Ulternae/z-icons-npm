import React from 'react';

export interface LanTableCellsRowUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsRowUnlock(props: LanTableCellsRowUnlockProps): React.ReactElement;
export default LanTableCellsRowUnlock;
