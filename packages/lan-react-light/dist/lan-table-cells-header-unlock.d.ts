import React from 'react';

export interface LanTableCellsHeaderUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsHeaderUnlock(props: LanTableCellsHeaderUnlockProps): React.ReactElement;
export default LanTableCellsHeaderUnlock;
