import React from 'react';

export interface LanTableRowsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableRowsThin: React.FC<LanTableRowsThinProps>;
export default LanTableRowsThin;
