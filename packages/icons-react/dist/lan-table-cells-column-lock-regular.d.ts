import React from 'react';

export interface LanTableCellsColumnLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsColumnLockRegular: React.FC<LanTableCellsColumnLockRegularProps>;
export default LanTableCellsColumnLockRegular;
