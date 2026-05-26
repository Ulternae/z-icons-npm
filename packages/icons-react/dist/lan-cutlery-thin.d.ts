import React from 'react';

export interface LanCutleryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCutleryThin: React.FC<LanCutleryThinProps>;
export default LanCutleryThin;
