import React from 'react';

export interface LanTableCellsColumnsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsColumnsRegular: React.FC<LanTableCellsColumnsRegularProps>;
export default LanTableCellsColumnsRegular;
