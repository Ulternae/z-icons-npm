import React from 'react';

export interface LanCutThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCutThin: React.FC<LanCutThinProps>;
export default LanCutThin;
