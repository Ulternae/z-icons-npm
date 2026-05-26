import React from 'react';

export interface LanTableRowsAddAboveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableRowsAddAbove: React.FC<LanTableRowsAddAboveProps>;
export default LanTableRowsAddAbove;
