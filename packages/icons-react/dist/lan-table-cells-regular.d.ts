import React from 'react';

export interface LanTableCellsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsRegular: React.FC<LanTableCellsRegularProps>;
export default LanTableCellsRegular;
