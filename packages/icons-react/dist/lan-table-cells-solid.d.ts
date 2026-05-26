import React from 'react';

export interface LanTableCellsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsSolid: React.FC<LanTableCellsSolidProps>;
export default LanTableCellsSolid;
