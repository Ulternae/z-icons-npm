import React from 'react';

export interface LanTableCellsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCells: React.FC<LanTableCellsProps>;
export default LanTableCells;
