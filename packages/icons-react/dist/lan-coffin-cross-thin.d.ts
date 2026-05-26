import React from 'react';

export interface LanCoffinCrossThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffinCrossThin: React.FC<LanCoffinCrossThinProps>;
export default LanCoffinCrossThin;
