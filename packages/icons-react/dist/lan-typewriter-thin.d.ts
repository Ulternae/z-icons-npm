import React from 'react';

export interface LanTypewriterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTypewriterThin: React.FC<LanTypewriterThinProps>;
export default LanTypewriterThin;
