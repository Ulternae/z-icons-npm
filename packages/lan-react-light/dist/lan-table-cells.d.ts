import React from 'react';

export interface LanTableCellsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCells(props: LanTableCellsProps): React.ReactElement;
export default LanTableCells;
