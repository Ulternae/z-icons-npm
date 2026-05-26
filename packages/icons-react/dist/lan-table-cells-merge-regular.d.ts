import React from 'react';

export interface LanTableCellsMergeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsMergeRegular: React.FC<LanTableCellsMergeRegularProps>;
export default LanTableCellsMergeRegular;
