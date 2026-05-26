import React from 'react';

export interface LanTableCellsRowsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsRowsRegular: React.FC<LanTableCellsRowsRegularProps>;
export default LanTableCellsRowsRegular;
