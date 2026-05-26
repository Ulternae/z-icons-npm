import React from 'react';

export interface LanCherriesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCherriesThin: React.FC<LanCherriesThinProps>;
export default LanCherriesThin;
