import React from 'react';

export interface LanGridHorizontalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridHorizontalThin: React.FC<LanGridHorizontalThinProps>;
export default LanGridHorizontalThin;
