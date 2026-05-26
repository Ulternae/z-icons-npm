import React from 'react';

export interface LanToiletPaperCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPaperCheck: React.FC<LanToiletPaperCheckProps>;
export default LanToiletPaperCheck;
