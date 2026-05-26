import React from 'react';

export interface LanShelvesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShelvesThin: React.FC<LanShelvesThinProps>;
export default LanShelvesThin;
