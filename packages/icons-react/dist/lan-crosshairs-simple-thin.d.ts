import React from 'react';

export interface LanCrosshairsSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrosshairsSimpleThin: React.FC<LanCrosshairsSimpleThinProps>;
export default LanCrosshairsSimpleThin;
