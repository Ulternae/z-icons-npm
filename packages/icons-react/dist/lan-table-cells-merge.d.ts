import React from 'react';

export interface LanTableCellsMergeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsMerge: React.FC<LanTableCellsMergeProps>;
export default LanTableCellsMerge;
