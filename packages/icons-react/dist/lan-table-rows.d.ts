import React from 'react';

export interface LanTableRowsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableRows: React.FC<LanTableRowsProps>;
export default LanTableRows;
