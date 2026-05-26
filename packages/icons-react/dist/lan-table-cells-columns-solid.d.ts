import React from 'react';

export interface LanTableCellsColumnsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsColumnsSolid: React.FC<LanTableCellsColumnsSolidProps>;
export default LanTableCellsColumnsSolid;
