import React from 'react';

export interface LanTableCellsHeaderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsHeaderSolid: React.FC<LanTableCellsHeaderSolidProps>;
export default LanTableCellsHeaderSolid;
