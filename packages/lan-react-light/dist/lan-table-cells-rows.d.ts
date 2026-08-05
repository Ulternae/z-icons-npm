import React from 'react';

export interface LanTableCellsRowsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsRows(props: LanTableCellsRowsProps): React.ReactElement;
export default LanTableCellsRows;
