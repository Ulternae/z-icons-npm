import React from 'react';

export interface LanTableCellsRowsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsRows: React.FC<LanTableCellsRowsProps>;
export default LanTableCellsRows;
