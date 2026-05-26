import React from 'react';

export interface LanTableCellsMergeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsMergeSolid: React.FC<LanTableCellsMergeSolidProps>;
export default LanTableCellsMergeSolid;
