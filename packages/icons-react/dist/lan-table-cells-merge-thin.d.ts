import React from 'react';

export interface LanTableCellsMergeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsMergeThin: React.FC<LanTableCellsMergeThinProps>;
export default LanTableCellsMergeThin;
