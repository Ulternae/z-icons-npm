import React from 'react';

export interface LanTableRowsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableRowsRegular: React.FC<LanTableRowsRegularProps>;
export default LanTableRowsRegular;
