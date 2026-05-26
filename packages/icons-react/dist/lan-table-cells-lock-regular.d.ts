import React from 'react';

export interface LanTableCellsLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsLockRegular: React.FC<LanTableCellsLockRegularProps>;
export default LanTableCellsLockRegular;
