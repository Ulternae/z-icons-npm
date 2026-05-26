import React from 'react';

export interface LanTableCellsHeaderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsHeaderThin: React.FC<LanTableCellsHeaderThinProps>;
export default LanTableCellsHeaderThin;
