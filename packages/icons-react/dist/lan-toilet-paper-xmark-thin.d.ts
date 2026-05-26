import React from 'react';

export interface LanToiletPaperXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPaperXmarkThin: React.FC<LanToiletPaperXmarkThinProps>;
export default LanToiletPaperXmarkThin;
