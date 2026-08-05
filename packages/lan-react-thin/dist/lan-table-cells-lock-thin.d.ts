import React from 'react';

export interface LanTableCellsLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsLockThin(props: LanTableCellsLockThinProps): React.ReactElement;
export default LanTableCellsLockThin;
