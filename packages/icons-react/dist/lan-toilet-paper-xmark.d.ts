import React from 'react';

export interface LanToiletPaperXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPaperXmark: React.FC<LanToiletPaperXmarkProps>;
export default LanToiletPaperXmark;
