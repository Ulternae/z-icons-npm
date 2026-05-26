import React from 'react';

export interface LanFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireThin: React.FC<LanFireThinProps>;
export default LanFireThin;
