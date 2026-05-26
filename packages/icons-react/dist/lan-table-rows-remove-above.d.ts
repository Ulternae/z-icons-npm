import React from 'react';

export interface LanTableRowsRemoveAboveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableRowsRemoveAbove: React.FC<LanTableRowsRemoveAboveProps>;
export default LanTableRowsRemoveAbove;
