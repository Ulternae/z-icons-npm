import React from 'react';

export interface LanTableCellsColumnsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsColumns: React.FC<LanTableCellsColumnsProps>;
export default LanTableCellsColumns;
