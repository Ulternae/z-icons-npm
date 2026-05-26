import React from 'react';

export interface LanHandsHelpingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHelpingThin: React.FC<LanHandsHelpingThinProps>;
export default LanHandsHelpingThin;
