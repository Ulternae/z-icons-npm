import React from 'react';

export interface LanTableCellsRowsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsRowsThin: React.FC<LanTableCellsRowsThinProps>;
export default LanTableCellsRowsThin;
