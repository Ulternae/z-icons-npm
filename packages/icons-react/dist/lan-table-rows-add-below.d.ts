import React from 'react';

export interface LanTableRowsAddBelowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableRowsAddBelow: React.FC<LanTableRowsAddBelowProps>;
export default LanTableRowsAddBelow;
