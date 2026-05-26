import React from 'react';

export interface LanTableCellsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableCellsThin: React.FC<LanTableCellsThinProps>;
export default LanTableCellsThin;
