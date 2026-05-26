import React from 'react';

export interface LanHandPaperThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPaperThin: React.FC<LanHandPaperThinProps>;
export default LanHandPaperThin;
