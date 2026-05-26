import React from 'react';

export interface LanManatSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanManatSignThin: React.FC<LanManatSignThinProps>;
export default LanManatSignThin;
