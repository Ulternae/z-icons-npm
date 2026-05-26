import React from 'react';

export interface LanTableCellsLargeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsLargeThin: React.FC<LanTableCellsLargeThinProps>;
export default LanTableCellsLargeThin;
