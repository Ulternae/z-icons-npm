import React from 'react';

export interface LanTableColumnsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableColumnsThin: React.FC<LanTableColumnsThinProps>;
export default LanTableColumnsThin;
