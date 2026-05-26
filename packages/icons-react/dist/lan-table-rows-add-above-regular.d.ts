import React from 'react';

export interface LanTableRowsAddAboveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableRowsAddAboveRegular: React.FC<LanTableRowsAddAboveRegularProps>;
export default LanTableRowsAddAboveRegular;
