import React from 'react';

export interface LanCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeThin: React.FC<LanCodeThinProps>;
export default LanCodeThin;
