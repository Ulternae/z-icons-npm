import React from 'react';

export interface LanHandPaperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPaper: React.FC<LanHandPaperProps>;
export default LanHandPaper;
