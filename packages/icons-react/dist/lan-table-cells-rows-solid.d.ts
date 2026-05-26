import React from 'react';

export interface LanTableCellsRowsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsRowsSolid: React.FC<LanTableCellsRowsSolidProps>;
export default LanTableCellsRowsSolid;
