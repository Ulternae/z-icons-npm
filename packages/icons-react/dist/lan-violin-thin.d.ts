import React from 'react';

export interface LanViolinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanViolinThin: React.FC<LanViolinThinProps>;
export default LanViolinThin;
