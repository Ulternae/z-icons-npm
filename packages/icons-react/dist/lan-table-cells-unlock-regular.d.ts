import React from 'react';

export interface LanTableCellsUnlockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsUnlockRegular: React.FC<LanTableCellsUnlockRegularProps>;
export default LanTableCellsUnlockRegular;
