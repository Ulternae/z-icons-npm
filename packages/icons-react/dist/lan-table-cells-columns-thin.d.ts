import React from 'react';

export interface LanTableCellsColumnsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsColumnsThin: React.FC<LanTableCellsColumnsThinProps>;
export default LanTableCellsColumnsThin;
