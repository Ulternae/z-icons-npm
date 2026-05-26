import React from 'react';

export interface LanTableRowsRemoveBelowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableRowsRemoveBelow: React.FC<LanTableRowsRemoveBelowProps>;
export default LanTableRowsRemoveBelow;
