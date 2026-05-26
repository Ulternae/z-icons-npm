import React from 'react';

export interface LanTableCellsHeaderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsHeaderRegular: React.FC<LanTableCellsHeaderRegularProps>;
export default LanTableCellsHeaderRegular;
