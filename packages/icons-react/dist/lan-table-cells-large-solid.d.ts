import React from 'react';

export interface LanTableCellsLargeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsLargeSolid: React.FC<LanTableCellsLargeSolidProps>;
export default LanTableCellsLargeSolid;
