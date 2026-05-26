import React from 'react';

export interface LanShoePrintsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShoePrintsThin: React.FC<LanShoePrintsThinProps>;
export default LanShoePrintsThin;
