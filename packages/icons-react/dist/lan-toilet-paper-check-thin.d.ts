import React from 'react';

export interface LanToiletPaperCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPaperCheckThin: React.FC<LanToiletPaperCheckThinProps>;
export default LanToiletPaperCheckThin;
