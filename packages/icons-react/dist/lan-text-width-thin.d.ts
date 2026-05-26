import React from 'react';

export interface LanTextWidthThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextWidthThin: React.FC<LanTextWidthThinProps>;
export default LanTextWidthThin;
