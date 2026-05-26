import React from 'react';

export interface LanTableCellsHeaderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsHeader: React.FC<LanTableCellsHeaderProps>;
export default LanTableCellsHeader;
