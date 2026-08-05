import React from 'react';

export interface LanTableCellsColumnsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsColumns(props: LanTableCellsColumnsProps): React.ReactElement;
export default LanTableCellsColumns;
