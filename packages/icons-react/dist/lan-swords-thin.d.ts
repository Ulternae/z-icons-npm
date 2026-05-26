import React from 'react';

export interface LanSwordsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwordsThin: React.FC<LanSwordsThinProps>;
export default LanSwordsThin;
